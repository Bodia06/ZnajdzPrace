import { API_URL } from '@/config'
import { HTTP_STATUS } from '@/constants'
import { api, ApiError } from './client'
import { createOfferSchema, offerListItemSchema, offerSchema } from '@/utils/validation/offers'

const invalidResponse = (error) =>
	new ApiError('Unexpected response from the server', {
		status: HTTP_STATUS.badGateway,
		details: error.issues
	})

function parseList(data) {
	if (!Array.isArray(data)) throw invalidResponse({ issues: ['Expected an array of offers'] })

	return data.flatMap((item) => {
		const result = offerListItemSchema.safeParse(item)
		if (result.success) return [result.data]

		console.warn('Skipped an invalid offer', item?.id, result.error.issues)
		return []
	})
}

export async function getOffers(options) {
	return parseList(await api('/offers', options))
}

export async function getOffer(id, options) {
	const result = offerSchema.safeParse(await api(`/offers/${encodeURIComponent(id)}`, options))
	if (!result.success) throw invalidResponse(result.error)

	return result.data
}

export async function createOffer(payload) {
	const result = createOfferSchema.safeParse(payload)
	if (!result.success)
		throw new ApiError('Invalid offer data', {
			status: HTTP_STATUS.badRequest,
			details: result.error.issues
		})

	return api('/offers', { method: 'POST', body: result.data })
}

export function subscribeToOffers(onChange) {
	const source = new EventSource(`${API_URL}/offers/stream`)

	source.addEventListener('offers-changed', onChange)
	return () => source.close()
}
