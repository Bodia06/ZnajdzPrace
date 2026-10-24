import { swaggerUI } from '@hono/swagger-ui'
import type { Hono } from 'hono'
import { openAPIRouteHandler } from 'hono-openapi'

export function registerDocs(app: Hono) {
	app.get(
		'/openapi.json',
		openAPIRouteHandler(app, {
			documentation: { info: { title: 'ZnajdzPrace API', version: '0.1.0' } },
			includeEmptyPaths: true,
			exclude: ['/docs', '/openapi.json']
		})
	)
	app.get('/docs', swaggerUI({ url: '/openapi.json', validatorUrl: '' }))
}
