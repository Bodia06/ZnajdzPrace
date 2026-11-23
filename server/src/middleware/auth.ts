import type { Context } from 'hono'
import { getCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'
import { verifyAuthToken } from '../auth/jwt.js'

export const sessionCookie = '__Host-session'

export function getAuthenticatedUser(c: Context) {
	return verifyAuthToken(getCookie(c, sessionCookie))
}

export const requireEmployer = createMiddleware<{ Variables: { employerId: string } }>(async (c, next) => {
	const user = await getAuthenticatedUser(c)
	if (!user) return c.json({ error: 'No valid session' }, 401)
	if (user.role !== 'employer') return c.json({ error: 'Employer account required' }, 403)
	c.set('employerId', user.id)
	await next()
})
