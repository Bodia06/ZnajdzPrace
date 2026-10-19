import {
	OFFERS_DATA,
	OFFERS_FILTER_DATA,
	OFFERS_MAX_TEXT_LENGTH,
	OFFERS_RESULTS_DATA
} from '@/constants'

const toList = (value) => (value === undefined ? [] : Array.isArray(value) ? value : [value])
const toText = (value) => (toList(value)[0] ?? '').trim().slice(0, OFFERS_MAX_TEXT_LENGTH)
const onlyKnown = (options, value) =>
	toList(value).filter((item) => options.some((option) => option.value === item))

export function parseOffersParams(params = {}) {
	const { location, contracts, modes, levels, salary } = OFFERS_FILTER_DATA
	const { query, city } = OFFERS_DATA.search
	const { sort, pagination } = OFFERS_RESULTS_DATA

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
