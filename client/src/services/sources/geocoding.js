import { z } from 'zod'
import { GEOCODING_REVERSE_URL, GEOCODING_SEARCH_URL } from '@/config'
import { AUTOCOMPLETE_MAX_SUGGESTIONS } from '@/constants'

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

export async function searchCities(query, signal) {
	const params = new URLSearchParams({
		name: query,
		count: AUTOCOMPLETE_MAX_SUGGESTIONS,
		language: 'pl',
		countryCode: 'PL'
	})

	const res = await fetch(`${GEOCODING_SEARCH_URL}?${params}`, { signal })
	if (!res.ok) throw new Error(`city search failed: ${res.status}`)
	const { results = [] } = await res.json()

	const seen = new Set()
	return results
		.filter(({ feature_code }) => feature_code?.startsWith('PPL'))
		.map(({ id, name, admin1 = '' }) => ({
			id: String(id),
			name,
			region: admin1.replace(/^województwo\s+/i, '').toLowerCase()
		}))
		.filter(({ name, region }) => {
			const key = `${name}-${region}`
			return !seen.has(key) && seen.add(key)
		})
		.slice(0, AUTOCOMPLETE_MAX_SUGGESTIONS)
}

export async function fetchCity({ latitude, longitude }) {
	const params = new URLSearchParams({
		format: 'jsonv2',
		lat: latitude,
		lon: longitude,
		zoom: 10,
		'accept-language': 'pl'
	})
	const res = await fetch(`${GEOCODING_REVERSE_URL}?${params}`)
	if (!res.ok) throw new Error('reverse geocoding failed')
	return parseCity(await res.json())
}
