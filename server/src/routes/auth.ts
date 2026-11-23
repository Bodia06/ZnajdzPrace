import { DrizzleQueryError } from 'drizzle-orm'
import { Hono } from 'hono'
import { bodyLimit } from 'hono/body-limit'
import { describeRoute, validator } from 'hono-openapi'
import { DatabaseError } from 'pg'
import { hashPassword } from '../auth/password.js'
import { db } from '../db/index.js'
import { users } from '../db/schema.js'
import { registerSchema } from '../schemas/auth.js'

export const authRoutes = new Hono()

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
	bodyLimit({
		maxSize: 8 * 1024,
		onError: (c) => c.json({ error: 'Request body is too large' }, 413)
	}),
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
