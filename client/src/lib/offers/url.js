import { LINKS } from '@/constants'
import { formatNumber } from '@/lib/format'
import { getPageRange, isGap } from './pagination'

export function buildOffersHref({ search, filters, sort, page }, { header, filter, results }) {
	const params = new URLSearchParams()
	const set = (name, value) => value && params.set(name, value)
	const append = (name, list) => list.forEach((value) => params.append(name, value))

	set(header.search.query.name, search.query)
	set(header.search.city.name, search.city)
	set(filter.location.name, filters.location)
	append(filter.contracts.name, filters.contracts)
	set(filter.modes.name, filters.mode)
	append(filter.levels.name, filters.levels)
	set(filter.salary.name, filters.salary)

	if (sort !== results.sort.options[0].value) set(results.sort.name, sort)
	if (page > 1) set(results.pagination.name, String(page))

	const query = params.toString()
	return query ? `${LINKS.OFFERS}?${query}` : LINKS.OFFERS
}

export function getActiveFilters(state, content) {
	const { filters } = state
	const { contracts, modes, levels } = content.filter
	const { salaryPrefix, salaryUnit } = content.results.activeFilters
	const labelOf = (options, value) => options.find((option) => option.value === value)?.label

	const withFilters = (patch) =>
		buildOffersHref({ ...state, page: 1, filters: { ...filters, ...patch } }, content)
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

export function getSortOptions(state, content) {
	return content.results.sort.options.map((option) => ({
		...option,
		href: buildOffersHref({ ...state, sort: option.value, page: 1 }, content)
	}))
}

export function getPagination(state, totalPages, content) {
	const { page } = state
	const hrefTo = (number) => buildOffersHref({ ...state, page: number }, content)
	const toItems = (range) =>
		range.map((item, index) =>
			isGap(item)
				? { gap: true, key: `gap-${index}` }
				: { number: item, key: item, href: hrefTo(item), current: item === page }
		)

	return {
		pages: toItems(getPageRange(totalPages, page, 1)),
		compactPages: toItems(getPageRange(totalPages, page, 0)),
		prevHref: page > 1 ? hrefTo(page - 1) : null,
		nextHref: page < totalPages ? hrefTo(page + 1) : null
	}
}
