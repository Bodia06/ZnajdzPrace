import { z } from 'zod'

const place = z.string().trim().min(1)

const reverseSchema = z.object({
	address: z
		.object({
			city: place.optional().catch(undefined),
			town: place.optional().catch(undefined),
			village: place.optional().catch(undefined),
			municipality: place.optional().catch(undefined)
		})
		.catch({})
})

export function parseCity(payload) {
	const result = reverseSchema.safeParse(payload)
	if (!result.success) return ''

	const { city, town, village, municipality } = result.data.address
	return city ?? town ?? village ?? municipality ?? ''
}
