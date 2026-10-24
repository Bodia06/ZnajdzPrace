import { z } from 'zod'

const requiredText = z.string().trim().min(1, 'This field is required')

export const offerParamsSchema = z.object({ id: z.uuid() })

export const createOfferSchema = z.strictObject({
	title: requiredText,
	company: requiredText,
	description: requiredText,
	requirements: requiredText,
	location: requiredText,
	contractType: requiredText
})
