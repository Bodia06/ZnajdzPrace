import { swaggerUI } from '@hono/swagger-ui'
import { desc } from 'drizzle-orm'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { describeRoute, openAPIRouteHandler } from 'hono-openapi'
import { db } from './db/index.js'
import { offers } from './db/schema.js'

const clientOrigin = process.env.CLIENT_ORIGIN ?? 'http://localhost:3000'
const originUrl = new URL(clientOrigin)

if (!['http:', 'https:'].includes(originUrl.protocol) || originUrl.origin !== clientOrigin) {
	throw new Error('CLIENT_ORIGIN must be an HTTP(S) origin without a path or trailing slash')
}

const app = new Hono()

app.use('*', cors({ origin: (origin) => (origin === clientOrigin ? origin : undefined) }))

app.get(
	'/openapi.json',
	openAPIRouteHandler(app, {
		documentation: { info: { title: 'ZnajdzPrace API', version: '0.1.0' } },
		includeEmptyPaths: true,
		exclude: ['/docs', '/openapi.json']
	})
)
app.get('/docs', swaggerUI({ url: '/openapi.json', validatorUrl: '' }))

app.get(
	'/health',
	describeRoute({
		summary: 'Check that the API is running',
		responses: { 200: { description: 'API is running; database connectivity is not checked.' } }
	}),
	(c) => c.json({ status: 'ok' })
)

app.get(
	'/offers',
	describeRoute({
		summary: 'List job offers',
		responses: {
			200: { description: 'Stored offers, newest first. Returns an empty array when no offers exist.' },
			500: { description: 'Could not read offers from the database.' }
		}
	}),
	async (c) => {
		const result = await db
			.select({
				id: offers.id,
				title: offers.title,
				company: offers.company,
				location: offers.location,
				contractType: offers.contractType,
				createdAt: offers.createdAt
			})
			.from(offers)
			.orderBy(desc(offers.createdAt), desc(offers.id))

		return c.json(result)
	}
)

app.notFound((c) => c.json({ error: 'Not found' }, 404))

app.onError((error, c) => {
	console.error(error)
	return c.json({ error: 'Internal server error' }, 500)
})

export default app
