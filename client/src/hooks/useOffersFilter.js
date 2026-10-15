'use client'

import { useState } from 'react'

const INITIAL_FILTERS = { location: '', contracts: [], mode: '', levels: [], salary: '' }

const toggleItem = (list, value) =>
	list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

export default function useOffersFilter(initialFilters = INITIAL_FILTERS, paramNames = []) {
	const [filters, setFilters] = useState(initialFilters)

	const activeCount =
		filters.contracts.length +
		filters.levels.length +
		[filters.location, filters.mode, filters.salary].filter(Boolean).length

	const setField = (key) => (value) => setFilters((current) => ({ ...current, [key]: value }))
	const toggleField = (key) => (value) =>
		setFilters((current) => ({ ...current, [key]: toggleItem(current[key], value) }))
	const reset = () => {
		setFilters(INITIAL_FILTERS)
		const url = new URL(window.location.href)
		paramNames.forEach((name) => url.searchParams.delete(name))
		window.history.replaceState(null, '', url)
	}

	return { filters, activeCount, setField, toggleField, reset }
}
