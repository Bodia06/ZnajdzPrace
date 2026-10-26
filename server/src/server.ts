import { serve } from '@hono/node-server'
import app from './index.js'

const port = Number(process.env.PORT ?? 4000)

if (!Number.isInteger(port) || port < 1 || port > 65535) {
	throw new Error('PORT must be an integer between 1 and 65535')
}

const server = serve({ fetch: app.fetch, port }, ({ port }) => {
	console.log(`API listening on http://localhost:${port}`)
})

server.on('error', (error) => {
	console.error(error)
	process.exit(1)
})

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
	process.once(signal, () => {
		if ('closeAllConnections' in server) server.closeAllConnections()
		server.close((error) => {
			if (error) console.error(error)
			process.exit(error ? 1 : 0)
		})
	})
}
