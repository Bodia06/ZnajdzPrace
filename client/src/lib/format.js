const number = new Intl.NumberFormat('pl-PL', { useGrouping: 'always' })

export const formatNumber = (value) => number.format(Number(value))

export const formatDate = (value) => value.split('-').reverse().join('.')

export function formatSalary({ from, to }, unit) {
	const range = to ? `${number.format(from)} – ${number.format(to)}` : number.format(from)
	return `${range} ${unit}`
}

export function formatSalaryShort({ from, to }, { unit, thousand }) {
	const k = (value) => number.format(value / 1000)
	const range = to && to !== from ? `${k(from)}–${k(to)}` : k(from)
	return `${range} ${thousand} ${unit}`
}

const yearsNoun = (years) => {
	if (years === 1) return 'rok'
	const last = years % 10
	return last >= 2 && last <= 4 && (years < 10 || years > 20) ? 'lata' : 'lat'
}

export const formatYears = (years) => `${years} ${yearsNoun(years)}`

export function formatResultsTitle({ query, city, location }, { fallbackTitle, locative }) {
	const place = city || location
	const main = query || fallbackTitle

	if (!place) return { main, place: '' }
	return { main, place: locative[place] ? `w\u00A0${locative[place]}` : `– ${place}` }
}
