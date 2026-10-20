import { OFFERS_MAX_TEXT_LENGTH } from '@/constants'

const toList = (value) => {
	if (value === undefined) return []
	return Array.isArray(value) ? value : [value]
}
const toText = (value) => (toList(value)[0] ?? '').trim().slice(0, OFFERS_MAX_TEXT_LENGTH)
const onlyKnown = (options, value) =>
	toList(value).filter((item) => options.some((option) => option.value === item))

const FILTER_KEYS = ['location', 'contracts', 'modes', 'levels', 'salary']

export const getFilterParams = (filter) => FILTER_KEYS.map((key) => filter[key].name)

export function parseOffersParams(params = {}, { header, filter, results }) {
	const { location, contracts, modes, levels, salary } = filter
	const { query, city } = header.search
	const { sort, pagination } = results

	const salaryText = toText(params[salary.name])
	const pageNumber = Number.parseInt(toText(params[pagination.name]), 10)

	return {
		search: {
			query: toText(params[query.name]),
			city: toText(params[city.name])
		},
		filters: {
			location: toText(params[location.name]),
			contracts: onlyKnown(contracts.options, params[contracts.name]),
			mode: onlyKnown(modes.options, params[modes.name])[0] ?? '',
			levels: onlyKnown(levels.options, params[levels.name]),
			salary: /^\d+$/.test(salaryText) ? salaryText : ''
		},
		sort: onlyKnown(sort.options, params[sort.name])[0] ?? sort.options[0].value,
		page: Number.isInteger(pageNumber) ? Math.max(pageNumber, 1) : 1
	}
}
