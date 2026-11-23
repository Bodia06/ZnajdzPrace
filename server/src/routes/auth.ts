import { randomBytes } from 'node:crypto'
import { DrizzleQueryError, eq, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { bodyLimit } from 'hono/body-limit'
import { deleteCookie, getCookie, setCookie } from 'hono/cookie'
import { describeRoute, validator } from 'hono-openapi'
import { DatabaseError } from 'pg'
import { createAuthToken, verifyAuthToken } from '../auth/jwt.js'
import { hashPassword, verifyPassword } from '../auth/password.js'
import { clientOrigins } from '../config.js'
import { db } from '../db/index.js'
import { users } from '../db/schema.js'
import { loginSchema, registerSchema } from '../schemas/auth.js'

export const authRoutes = new Hono()

const authBodyLimit = bodyLimit({
	maxSize: 8 * 1024,
	onError: (c) => c.json({ error: 'Request body is too large' }, 413)
})
const dummyPasswordHash = await hashPassword(randomBytes(32).toString('hex'))
const sessionCookie = '__Host-session'
const sessionCookieOptions = { path: '/', httpOnly: true, secure: true, sameSite: 'Lax' } as const

authRoutes.post(
	'/register',
	describeRoute({
		summary: 'Register a candidate or employer account',
		responses: {
			201: { description: 'Account created. Returns its id.' },
			400: { description: 'Invalid JSON or registration data.' },
			409: { description: 'Email already registered.' },
			413: { description: 'Request body is too large.' },
			500: { description: 'Could not create the account.' }
		}
	}),
	authBodyLimit,
	validator('json', registerSchema, (result, c) => {
		if (!result.success) {
			const details = result.error.map(({ path, message }) => ({ field: path?.[0], message }))
			return c.json({ error: 'Invalid registration data', details }, 400)
		}
	}),
	async (c) => {
		const data = c.req.valid('json')
		const profile = data.role === 'candidate'
			? { firstName: data.firstName, lastName: data.lastName }
			: { companyName: data.companyName, nip: data.nip }
		const passwordHash = await hashPassword(data.password)

		try {
			const [user] = await db.insert(users)
				.values({ email: data.email, role: data.role, passwordHash, ...profile })
				.returning({ id: users.id })

			return c.json(user, 201)
		} catch (error) {
			const cause = error instanceof DrizzleQueryError ? error.cause : error
			if (cause instanceof DatabaseError && cause.code === '23505' && cause.constraint === 'users_email_unique') {
				return c.json({ error: 'Email already registered' }, 409)
			}

			// Drizzle query errors can include the password hash in their parameters.
			console.error('Failed to save the registered account')
			return c.json({ error: 'Internal server error' }, 500)
		}
	}
)

authRoutes.post(
	'/login',
	describeRoute({
		summary: 'Log in and issue a JWT',
		responses: {
			204: { description: 'Logged in. Sets the signed JWT in the session cookie.' },
			400: { description: 'Invalid JSON or login data.' },
			401: { description: 'Invalid email or password.' },
			413: { description: 'Request body is too large.' },
			500: { description: 'Could not log in.' }
		}
	}),
	authBodyLimit,
	validator('json', loginSchema, (result, c) => {
		if (!result.success) return c.json({ error: 'Invalid login data' }, 400)
	}),
	async (c) => {
		const { email, password, remember } = c.req.valid('json')
		try {
			const [user] = await db.select({ id: users.id, role: users.role, passwordHash: users.passwordHash })
				.from(users)
				.where(eq(sql`lower(${users.email})`, email))
			const passwordMatches = await verifyPassword(user?.passwordHash ?? dummyPasswordHash, password)
			if (!user || !passwordMatches) return c.json({ error: 'Invalid email or password' }, 401)

			const { token, maxAge } = await createAuthToken(user, remember)
			setCookie(c, sessionCookie, token, { ...sessionCookieOptions, maxAge })
			c.header('Cache-Control', 'no-store')
			return c.body(null, 204)
		} catch {
			console.error('Failed to log in')
			return c.json({ error: 'Internal server error' }, 500)
		}
	}
)

authRoutes.get(
	'/session',
	describeRoute({
		summary: 'Get the current session',
		responses: {
			200: { description: 'Returns the signed-in account id and role.' },
			401: { description: 'No valid authentication token.' }
		}
	}),
	async (c) => {
		c.header('Cache-Control', 'no-store')
		const user = await verifyAuthToken(getCookie(c, sessionCookie))
		if (!user) return c.json({ error: 'No valid session' }, 401)
		return c.json(user)
	}
)

authRoutes.post(
	'/logout',
	describeRoute({
		summary: 'Log out by clearing the authentication cookie',
		responses: {
			204: { description: 'Authentication cookie cleared. The token expires at its original expiration time.' },
			403: { description: 'Request origin is not allowed.' }
		}
	}),
	(c) => {
		const origin = c.req.header('Origin')
		if (origin && origin !== new URL(c.req.url).origin && !clientOrigins.includes(origin)) {
			return c.json({ error: 'Request origin is not allowed' }, 403)
		}

		c.header('Cache-Control', 'no-store')
		deleteCookie(c, sessionCookie, sessionCookieOptions)
		return c.body(null, 204)
	}
)
