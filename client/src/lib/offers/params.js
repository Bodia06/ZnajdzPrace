import { z } from 'zod'
import { OFFERS_MAX_SALARY_DIGITS, OFFERS_MAX_TEXT_LENGTH } from '@/constants'

const FILTER_KEYS = ['location', 'contracts', 'modes', 'levels', 'salary']

export const salaryValue = z
	.string()
	.trim()
	.regex(new RegExp(`^\\d{0,${OFFERS_MAX_SALARY_DIGITS}}$`))

export const getFilterParams = (filter) => FILTER_KEYS.map((key) => filter[key].name)

const toList = (value) => (value === undefined ? [] : [value].flat())

const text = z.preprocess(
	(value) => toList(value)[0],
	z
		.string()
		.transform((value) => value.trim().slice(0, OFFERS_MAX_TEXT_LENGTH))
		.catch('')
)

const known = (options) => {
	const values = options.map((option) => option.value)
	return z.preprocess(
		toList,
		z
			.array(z.string())
			.transform((items) => items.filter((item) => values.includes(item)))
			.catch([])
	)
}

const salary = z.preprocess((value) => toList(value)[0], salaryValue.catch(''))

const page = z.preprocess(
	(value) => toList(value)[0],
	z.string().regex(/^\d+$/).transform(Number).pipe(z.number().int().min(1)).catch(1)
)

export function parseOffersParams(params = {}, { header, filter, results }) {
	const { location, contracts, modes, levels } = filter
	const { query, city } = header.search
	const { sort, pagination } = results

	const parsed = z
		.object({
			[query.name]: text,
			[city.name]: text,
			[location.name]: text,
			[contracts.name]: known(contracts.options),
			[modes.name]: known(modes.options),
			[levels.name]: known(levels.options),
			[filter.salary.name]: salary,
			[sort.name]: known(sort.options),
			[pagination.name]: page
		})
		.parse(params)

	return {
		search: { query: parsed[query.name], city: parsed[city.name] },
		filters: {
			location: parsed[location.name],
			contracts: parsed[contracts.name],
			mode: parsed[modes.name][0] ?? '',
			levels: parsed[levels.name],
			salary: parsed[filter.salary.name]
		},
		sort: parsed[sort.name][0] ?? sort.options[0].value,
		page: parsed[pagination.name]
	}
}
