import { Hono } from 'hono'
import { describeRoute } from 'hono-openapi'

export const healthRoutes = new Hono().get(
	'/',
	describeRoute({
		summary: 'Check that the API is running',
		responses: { 200: { description: 'API is running; database connectivity is not checked.' } }
	}),
	(c) => c.json({ status: 'ok' })
)
