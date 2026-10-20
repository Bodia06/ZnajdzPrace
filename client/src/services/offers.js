import {
	COMPANIES,
	OFFERS_DATA,
	OFFERS_FILTER_DATA,
	OFFER_DETAILS_DATA,
	OFFERS_LIST,
	OFFERS_RESULTS_DATA,
	OFFER_CONTRACTS,
	OFFER_ITEMS,
	OFFER_SKILLS,
	OFFER_TAGS,
	SKILLS
} from '@/constants'

const DAY = 24 * 60 * 60 * 1000
const NEW_DAYS = 2
const SIMILAR_LIMIT = 3

const pluralDays = (days) => (days === 1 ? '1 dzień temu' : `${days} dni temu`)

const daysSince = (date) => Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / DAY))

const formatPosted = (date) => {
	const days = daysSince(date)
	return days === 0 ? 'dzisiaj' : pluralDays(days)
}

const groupBy = (rows, key) => {
	const groups = {}
	for (const row of rows) {
		groups[row[key]] ??= []
		groups[row[key]].push(row)
	}
	return groups
}

function joinOffers() {
	const companies = Object.fromEntries(COMPANIES.map((company) => [company.id, company]))
	const contracts = groupBy(OFFER_CONTRACTS, 'offer_id')
	const items = groupBy(OFFER_ITEMS, 'offer_id')
	const tags = groupBy(OFFER_TAGS, 'offer_id')
	const skills = groupBy(OFFER_SKILLS, 'offer_id')
	const skillNames = Object.fromEntries(SKILLS.map((skill) => [skill.id, skill.name]))
	const labelsOf = (rows = [], category) =>
		rows.filter((row) => row.category === category).map((row) => row.label)

	return OFFERS_LIST.map((offer) => ({
		id: offer.id,
		title: offer.title,
		company: companies[offer.company_id]?.name ?? '',
		location: offer.location,
		posted: formatPosted(offer.posted_at),
		validUntil: offer.valid_until,
		isNew: daysSince(offer.posted_at) <= NEW_DAYS,
		isFavorite: false,
		tone: offer.tone,
		mode: offer.mode,
		level: offer.level,
		workload: offer.workload,
		description: offer.description,
		contracts: (contracts[offer.id] ?? []).map((row) => row.contract_type),
		salary: { from: offer.salary_from, to: offer.salary_to },
		tags: (tags[offer.id] ?? []).map((tag) => ({ label: tag.label, accent: tag.is_accent })),
		duties: labelsOf(items[offer.id], 'duty'),
		benefits: labelsOf(items[offer.id], 'benefit'),
		recruitment: labelsOf(items[offer.id], 'recruitment'),
		address: offer.address,
		coordinates:
			offer.latitude != null && offer.longitude != null ? [offer.latitude, offer.longitude] : null,
		requirementsNote: offer.requirements_note,
		skills: (skills[offer.id] ?? []).map((skill) => ({
			name: skillNames[skill.skill_id],
			required: skill.is_required,
			years: skill.experience_years
		}))
	}))
}

export async function getOffersPageData() {
	return {
		offers: joinOffers(),
		content: {
			header: OFFERS_DATA,
			filter: OFFERS_FILTER_DATA,
			results: OFFERS_RESULTS_DATA
		}
	}
}

export async function getOfferPageData(id) {
	const offers = joinOffers()
	const offer = offers.find((item) => item.id === id)
	if (!offer) return null

	const similar = offers.filter((item) => item.id !== id).slice(0, SIMILAR_LIMIT)

	return { offer, similar, content: OFFER_DETAILS_DATA }
}
