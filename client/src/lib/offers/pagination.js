import { OFFERS_RESULTS_DATA, PAGINATION_GAP as GAP } from '@/constants'

const { pageSize } = OFFERS_RESULTS_DATA.pagination

const range = (from, to) => Array.from({ length: to - from + 1 }, (_, index) => from + index)

export const isGap = (item) => item === GAP

export const getTotalPages = (total) => Math.max(1, Math.ceil(total / pageSize))

export function getPageRange(total, current, siblings) {
	const slots = siblings * 2 + 5
	if (total <= slots) return range(1, total)

	if (current < slots - 2) return [...range(1, slots - 2), GAP, total]
	if (current > total - (slots - 3)) return [1, GAP, ...range(total - (slots - 3), total)]

	return [1, GAP, ...range(current - siblings, current + siblings), GAP, total]
}

export function paginate(items, requestedPage) {
	const totalPages = getTotalPages(items.length)
	const page = Math.min(requestedPage, totalPages)
	const visible = items.slice((page - 1) * pageSize, page * pageSize)
	const filler = totalPages > 1 ? items.slice(0, pageSize - visible.length) : []

	return { page, totalPages, items: visible, filler }
}
