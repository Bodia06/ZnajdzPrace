'use client'

import { useState } from 'react'
import { OFFERS_INITIAL_FILTERS } from '@/constants'

const toggleItem = (list, value) =>
	list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

export default function useOffersFilter(initialFilters = OFFERS_INITIAL_FILTERS, paramNames = []) {
	const [filters, setFilters] = useState(initialFilters)

	const activeCount =
		filters.contracts.length +
		filters.levels.length +
		[filters.mode, filters.salary].filter(Boolean).length

	const setField = (key) => (value) => setFilters((current) => ({ ...current, [key]: value }))
	const toggleField = (key) => (value) =>
		setFilters((current) => ({ ...current, [key]: toggleItem(current[key], value) }))
	const reset = () => {
		setFilters(OFFERS_INITIAL_FILTERS)
		const url = new URL(window.location.href)
		paramNames.forEach((name) => url.searchParams.delete(name))
		window.history.replaceState(null, '', url)
	}

	return { filters, activeCount, setField, toggleField, reset }
}
