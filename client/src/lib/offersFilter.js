const normalize = (value) =>
	value.toLowerCase().replace(/ł/g, 'l').normalize('NFD').replace(/[̀-ͯ]/g, '')

const includes = (text, part) => normalize(text).includes(normalize(part))
const maxSalary = ({ salary }) => (salary ? (salary.to ?? salary.from) : 0)

const matchesSearch = (offer, { query, city }) => {
	const haystack = [offer.title, offer.company, ...offer.tags.map((tag) => tag.label)].join(' ')
	return (
		query.split(/\s+/).every((word) => includes(haystack, word)) &&
		(!city || includes(offer.location, city))
	)
}

const matchesFilters = (offer, { contracts, mode, levels, salary }) =>
	(contracts.length === 0 || contracts.some((value) => offer.contracts.includes(value))) &&
	(!mode || offer.mode === mode) &&
	(levels.length === 0 || levels.some((value) => offer.levels.includes(value))) &&
	(!salary || maxSalary(offer) >= Number(salary))

const SORTS = {
	newest: null,
	'salary-desc': (a, b) => maxSalary(b) - maxSalary(a),
	'salary-asc': (a, b) => maxSalary(a) - maxSalary(b)
}

export function getOffers(items, { search, filters, sort }) {
	const result = items.filter(
		(offer) => matchesSearch(offer, search) && matchesFilters(offer, filters)
	)
	return SORTS[sort] ? result.toSorted(SORTS[sort]) : result
}
