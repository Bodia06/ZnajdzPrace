const number = new Intl.NumberFormat('pl-PL', { useGrouping: 'always' })

export const formatNumber = (value) => number.format(Number(value))

export function formatSalary({ from, to }, unit) {
	const range = to ? `${number.format(from)} – ${number.format(to)}` : number.format(from)
	return `${range} ${unit}`
}

export function formatResultsTitle({ query, city, location }, { fallbackTitle, locative }) {
	const place = city || location
	const main = query || fallbackTitle

	if (!place) return { main, place: '' }
	return { main, place: locative[place] ? `w\u00A0${locative[place]}` : `– ${place}` }
}
