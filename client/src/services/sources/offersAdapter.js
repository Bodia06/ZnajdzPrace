import { OFFERS_DAY_MS, OFFERS_LOGO_TONES, OFFERS_NEW_DAYS, OFFERS_RESULTS_DATA } from '@/constants'

const daysSince = (date) =>
	Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / OFFERS_DAY_MS))

const formatPosted = (date) => {
	const days = daysSince(date)
	if (days === 0) return 'dzisiaj'
	return days === 1 ? '1 dzień temu' : `${days} dni temu`
}

const toneOf = (company) =>
	OFFERS_LOGO_TONES[
		[...company].reduce((sum, char) => sum + char.charCodeAt(0), 0) % OFFERS_LOGO_TONES.length
	]

const { contracts: CONTRACTS, contractsShort: SHORT, modes: MODES } = OFFERS_RESULTS_DATA.card

const contractLabel = (contracts) =>
	contracts.length === 1
		? (CONTRACTS[contracts[0]] ?? contracts[0])
		: contracts.map((value) => SHORT[value] ?? CONTRACTS[value] ?? value).join(' / ')

function buildTags({ contracts, mode, tags }) {
	return [
		...(contracts.length > 0 ? [{ label: contractLabel(contracts), accent: true }] : []),
		...(mode ? [{ label: MODES[mode] ?? mode, accent: false }] : []),
		...tags.map((label) => ({ label, accent: false }))
	]
}

export function toOffer(raw) {
	const {
		id,
		title,
		company,
		location,
		createdAt,
		description = '',
		requirements = '',
		contracts = [],
		mode,
		levels = [],
		workload,
		salaryFrom,
		salaryTo,
		salaryContract,
		validUntil,
		tags = [],
		duties = [],
		benefits = [],
		recruitment = [],
		address,
		latitude,
		longitude,
		skills = []
	} = raw

	return {
		id,
		title,
		company,
		location,
		posted: formatPosted(createdAt),
		validUntil: validUntil ?? null,
		isNew: daysSince(createdAt) <= OFFERS_NEW_DAYS,
		isFavorite: false,
		tone: toneOf(company),
		mode: mode ?? '',
		levels,
		workload: workload ?? '',
		description,
		contracts,
		salary:
			salaryFrom == null
				? null
				: { from: salaryFrom, to: salaryTo ?? null, contract: salaryContract ?? null },
		tags: buildTags({ contracts, mode, tags }),
		duties,
		benefits,
		recruitment,
		address: address ?? '',
		coordinates: latitude == null || longitude == null ? null : [latitude, longitude],
		requirementsNote: requirements,
		skills: skills.map(({ name, required, years }) => ({ name, required, years: years ?? null }))
	}
}

export const toOffers = (list) => list.map(toOffer)
