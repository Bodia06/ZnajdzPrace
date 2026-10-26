'use client'

import { useEffect, useState } from 'react'
import { AUTOCOMPLETE_DEBOUNCE_MS, AUTOCOMPLETE_MIN_LENGTH } from '@/constants'
import { searchCities } from '@/services/sources/geocoding'

export default function useCitySuggestions(value) {
	const [result, setResult] = useState({ query: '', cities: [] })
	const query = value.trim()

	useEffect(() => {
		if (query.length < AUTOCOMPLETE_MIN_LENGTH) return

		const controller = new AbortController()
		const timer = setTimeout(async () => {
			try {
				const cities = await searchCities(query, controller.signal)
				setResult({ query, cities })
			} catch (error) {
				if (error.name !== 'AbortError') setResult({ query, cities: [] })
			}
		}, AUTOCOMPLETE_DEBOUNCE_MS)

		return () => {
			clearTimeout(timer)
			controller.abort()
		}
	}, [query])

	if (result.query !== query) return []
	return result.cities.filter((city) => city.name.toLowerCase() !== query.toLowerCase())
}
