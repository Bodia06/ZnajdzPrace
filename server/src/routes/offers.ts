import { desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { describeRoute, validator } from 'hono-openapi'
import { db } from '../db/index.js'
import { offers } from '../db/schema.js'
import { events, OFFERS_CHANGED } from '../events.js'
import { createOfferSchema, offerParamsSchema } from '../schemas/offers.js'

export const offersRoutes = new Hono()

offersRoutes.get(
	'/',
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
				contracts: offers.contracts,
				mode: offers.mode,
				levels: offers.levels,
				salaryContract: offers.salaryContract,
				salaryFrom: offers.salaryFrom,
				salaryTo: offers.salaryTo,
				tags: offers.tags,
				createdAt: offers.createdAt
			})
			.from(offers)
			.orderBy(desc(offers.createdAt), desc(offers.id))

		return c.json(result)
	}
)

const HEARTBEAT_MS = 25_000

offersRoutes.get(
	'/stream',
	describeRoute({
		summary: 'Subscribe to offer changes',
		description:
			'Server-Sent Events stream. Emits an `offers-changed` event whenever offers are modified; clients should refetch the list.',
		responses: { 200: { description: 'text/event-stream' } }
	}),
	(c) =>
		streamSSE(c, async (stream) => {
			const onChange = () => {
				void stream.writeSSE({ event: OFFERS_CHANGED, data: '{}' })
			}
			events.on(OFFERS_CHANGED, onChange)

			const closed = new Promise<void>((resolve) => stream.onAbort(resolve))
			stream.onAbort(() => {
				events.off(OFFERS_CHANGED, onChange)
			})

			await stream.writeSSE({ event: 'ready', data: '{}' })

			while (!stream.aborted) {
				await stream.sleep(HEARTBEAT_MS)
				if (!stream.aborted) await stream.write(': ping\n\n')
			}
			await closed
		})
)

offersRoutes.get(
	'/:id',
	describeRoute({
		summary: 'Get job offer details',
		responses: {
			200: { description: 'Full offer details, including description, requirements and company.' },
			400: { description: 'Invalid offer id.' },
			404: { description: 'Offer not found.' },
			500: { description: 'Could not read the offer from the database.' }
		}
	}),
	validator('param', offerParamsSchema, (result, c) => {
		if (!result.success) {
			return c.json({ error: 'Invalid offer id', details: result.error }, 400)
		}
	}),
	async (c) => {
		const { id } = c.req.valid('param')
		const [offer] = await db.select().from(offers).where(eq(offers.id, id))

		if (!offer) return c.json({ error: 'Offer not found' }, 404)

		return c.json(offer)
	}
)

offersRoutes.post(
	'/',
	describeRoute({
		summary: 'Create a job offer',
		description:
			'Public in M1. Salary is gross PLN per month. Optional: address, coordinates (both or none), salary, validUntil and the list fields.',
		responses: {
			201: { description: 'Offer created. Returns its id.' },
			400: { description: 'Invalid JSON or offer data.' },
			500: { description: 'Could not save the offer.' }
		}
	}),
	validator('json', createOfferSchema, (result, c) => {
		if (!result.success) {
			return c.json({ error: 'Invalid offer data', details: result.error }, 400)
		}
	}),
	async (c) => {
		const [offer] = await db
			.insert(offers)
			.values(c.req.valid('json'))
			.returning({ id: offers.id })

		events.emit(OFFERS_CHANGED)

		return c.json(offer, 201)
	}
)
