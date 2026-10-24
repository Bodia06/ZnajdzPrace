import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { clientOrigin } from './config.js'
import { registerDocs } from './docs.js'
import { errorHandler } from './middleware/error-handler.js'
import { healthRoutes } from './routes/health.js'
import { offersRoutes } from './routes/offers.js'

const app = new Hono()

app.use('*', cors({ origin: (origin) => (origin === clientOrigin ? origin : undefined) }))

app.route('/health', healthRoutes)
app.route('/offers', offersRoutes)
registerDocs(app)

app.notFound((c) => c.json({ error: 'Not found' }, 404))

app.onError(errorHandler)

export default app
