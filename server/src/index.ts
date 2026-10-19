import { Hono } from 'hono'
import { cors } from 'hono/cors'

const clientOrigin = process.env.CLIENT_ORIGIN ?? 'http://localhost:3000'
const originUrl = new URL(clientOrigin)

if (!['http:', 'https:'].includes(originUrl.protocol) || originUrl.origin !== clientOrigin) {
	throw new Error('CLIENT_ORIGIN must be an HTTP(S) origin without a path or trailing slash')
}

const app = new Hono()

app.use('*', cors({ origin: (origin) => (origin === clientOrigin ? origin : undefined) }))

app.get('/health', (c) => c.json({ status: 'ok' }))

app.notFound((c) => c.json({ error: 'Not found' }, 404))

app.onError((error, c) => {
	console.error(error)
	return c.json({ error: 'Internal server error' }, 500)
})

export default app
