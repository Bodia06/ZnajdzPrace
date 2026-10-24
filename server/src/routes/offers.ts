import { desc } from 'drizzle-orm'
import { Hono } from 'hono'
import { describeRoute, validator } from 'hono-openapi'
import { db } from '../db/index.js'
import { offers } from '../db/schema.js'
import { createOfferSchema } from '../schemas/offers.js'

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
				contractType: offers.contractType,
				createdAt: offers.createdAt
			})
			.from(offers)
			.orderBy(desc(offers.createdAt), desc(offers.id))

		return c.json(result)
	}
)

offersRoutes.post(
	'/',
	describeRoute({
		summary: 'Create a job offer',
		description: 'Public in M1. All fields are required.',
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

		return c.json(offer, 201)
	}
)
