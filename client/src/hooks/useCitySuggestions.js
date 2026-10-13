'use client'

import { useEffect, useState } from 'react'

const SEARCH_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const MIN_LENGTH = 2
const DEBOUNCE_MS = 200
const MAX_SUGGESTIONS = 6

async function searchCities(query, signal) {
	const params = new URLSearchParams({
		name: query,
		count: 10,
		language: 'pl',
		countryCode: 'PL'
	})

	const res = await fetch(`${SEARCH_URL}?${params}`, { signal })
	if (!res.ok) throw new Error(`city search failed: ${res.status}`)
	const { results = [] } = await res.json()

	const seen = new Set()
	return results
		.map(({ id, name, admin1 = '' }) => ({
			id: String(id),
			name,
			region: admin1.replace(/^województwo\s+/i, '').toLowerCase()
		}))
		.filter(({ name, region }) => {
			const key = `${name}-${region}`
			return !seen.has(key) && seen.add(key)
		})
		.slice(0, MAX_SUGGESTIONS)
}

export default function useCitySuggestions(value) {
	const [result, setResult] = useState({ query: '', cities: [] })
	const query = value.trim()

	useEffect(() => {
		if (query.length < MIN_LENGTH) return

		const controller = new AbortController()
		const timer = setTimeout(async () => {
			try {
				const cities = await searchCities(query, controller.signal)
				setResult({ query, cities })
			} catch (error) {
				if (error.name !== 'AbortError') setResult({ query, cities: [] })
			}
		}, DEBOUNCE_MS)

		return () => {
			clearTimeout(timer)
			controller.abort()
		}
	}, [query])

	if (result.query !== query) return []
	return result.cities.filter(city => city.name.toLowerCase() !== query.toLowerCase())
}
