import { LINKS, OFFERS_DATA, OFFERS_FILTER_DATA, OFFERS_RESULTS_DATA } from '@/constants'
import { formatNumber } from '@/lib/format'

export function buildOffersHref({ search, filters, sort, page }) {
	const params = new URLSearchParams()
	const set = (name, value) => value && params.set(name, value)
	const append = (name, list) => list.forEach((value) => params.append(name, value))

	set(OFFERS_DATA.search.query.name, search.query)
	set(OFFERS_DATA.search.city.name, search.city)
	set(OFFERS_FILTER_DATA.location.name, filters.location)
	append(OFFERS_FILTER_DATA.contracts.name, filters.contracts)
	set(OFFERS_FILTER_DATA.modes.name, filters.mode)
	append(OFFERS_FILTER_DATA.levels.name, filters.levels)
	set(OFFERS_FILTER_DATA.salary.name, filters.salary)

	if (sort !== OFFERS_RESULTS_DATA.sort.options[0].value) set(OFFERS_RESULTS_DATA.sort.name, sort)
	if (page > 1) set(OFFERS_RESULTS_DATA.pagination.name, String(page))

	const query = params.toString()
	return query ? `${LINKS.OFFERS}?${query}` : LINKS.OFFERS
}

export function getActiveFilters(state) {
	const { filters } = state
	const { contracts, modes, levels } = OFFERS_FILTER_DATA
	const { salaryPrefix, salaryUnit } = OFFERS_RESULTS_DATA.activeFilters
	const labelOf = (options, value) => options.find((option) => option.value === value)?.label

	const withFilters = (patch) =>
		buildOffersHref({ ...state, page: 1, filters: { ...filters, ...patch } })
	const chips = []

	if (filters.location) {
		chips.push({ id: 'location', label: filters.location, href: withFilters({ location: '' }) })
	}
	filters.contracts.forEach((value) =>
		chips.push({
			id: `contract-${value}`,
			label: labelOf(contracts.options, value),
			href: withFilters({ contracts: filters.contracts.filter((item) => item !== value) })
		})
	)
	if (filters.mode) {
		chips.push({
			id: 'mode',
			label: labelOf(modes.options, filters.mode),
			href: withFilters({ mode: '' })
		})
	}
	filters.levels.forEach((value) =>
		chips.push({
			id: `level-${value}`,
			label: labelOf(levels.options, value),
			href: withFilters({ levels: filters.levels.filter((item) => item !== value) })
		})
	)
	if (filters.salary) {
		chips.push({
			id: 'salary',
			label: `${salaryPrefix} ${formatNumber(filters.salary)} ${salaryUnit}`,
			href: withFilters({ salary: '' })
		})
	}

	return chips
}

export function getSortOptions(state) {
	return OFFERS_RESULTS_DATA.sort.options.map((option) => ({
		...option,
		href: buildOffersHref({ ...state, sort: option.value, page: 1 })
	}))
}

export function getPagination(state) {
	const { page } = state
	const { totalPages } = OFFERS_RESULTS_DATA.pagination
	const hrefTo = (number) => buildOffersHref({ ...state, page: number })

	return {
		pages: Array.from({ length: totalPages }, (_, index) => ({
			number: index + 1,
			href: hrefTo(index + 1),
			current: index + 1 === page
		})),
		prevHref: page > 1 ? hrefTo(page - 1) : null,
		nextHref: page < totalPages ? hrefTo(page + 1) : null
	}
}
