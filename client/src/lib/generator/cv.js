import {
	GENERATOR_COLORS,
	GENERATOR_SAMPLE,
	GENERATOR_STEP_IDS,
	GENERATOR_TEMPLATE_IDS
} from '@/constants'

export const EMPTY_ENTRIES = {
	experience: { position: '', company: '', from: '', to: '', description: '' },
	education: { school: '', degree: '', from: '', to: '' }
}

export const DEFAULT_LEVEL = 'B2'

let counter = 0

export const createId = () => {
	counter += 1
	return `entry-${Date.now().toString(36)}-${counter}`
}

export const createEntry = (section) => ({ id: createId(), ...EMPTY_ENTRIES[section] })

export const createLanguage = () => ({ id: createId(), name: '', level: DEFAULT_LEVEL })

export const createInitialCv = () => ({
	template: GENERATOR_TEMPLATE_IDS.sidebar,
	color: GENERATOR_COLORS[0].id,
	personal: {
		firstName: '',
		lastName: '',
		jobTitle: '',
		email: '',
		phone: '',
		city: '',
		summary: ''
	},
	experience: [{ id: 'experience-initial', ...EMPTY_ENTRIES.experience }],
	education: [{ id: 'education-initial', ...EMPTY_ENTRIES.education }],
	skills: [],
	languages: []
})

const filled = (value) => Boolean(value?.trim())

const hasContent = (entry) =>
	Object.entries(entry).some(([key, value]) => key !== 'id' && filled(value))

export const isStepDone = (stepId, cv) => {
	switch (stepId) {
		case GENERATOR_STEP_IDS.personal:
			return (
				filled(cv.personal.firstName) && filled(cv.personal.lastName) && filled(cv.personal.email)
			)
		case GENERATOR_STEP_IDS.experience:
			return cv.experience.some((entry) => filled(entry.position))
		case GENERATOR_STEP_IDS.education:
			return cv.education.some((entry) => filled(entry.school))
		case GENERATOR_STEP_IDS.skills:
			return cv.skills.length > 0
		default:
			return true
	}
}

export const mergeDraft = (draft) => {
	const base = createInitialCv()
	if (!draft || typeof draft !== 'object') return base

	return {
		...base,
		...draft,
		personal: { ...base.personal, ...draft.personal },
		experience: draft.experience?.length ? draft.experience : base.experience,
		education: draft.education?.length ? draft.education : base.education,
		skills: draft.skills ?? base.skills,
		languages: draft.languages ?? base.languages
	}
}

const hasAnyContent = (cv) =>
	Object.values(cv.personal).some(filled) ||
	cv.experience.some(hasContent) ||
	cv.education.some(hasContent) ||
	cv.skills.length > 0 ||
	cv.languages.some((language) => filled(language.name))

const withIds = (list, prefix) =>
	list.map((entry, index) => ({ id: `${prefix}-${index}`, ...entry }))

export const buildPreview = (cv) => {
	const source = hasAnyContent(cv)
		? {
				...cv.personal,
				experience: cv.experience.filter(hasContent),
				education: cv.education.filter(hasContent),
				skills: cv.skills,
				languages: cv.languages.filter((language) => filled(language.name))
			}
		: {
				...GENERATOR_SAMPLE,
				experience: withIds(GENERATOR_SAMPLE.experience, 'sample-experience'),
				education: withIds(GENERATOR_SAMPLE.education, 'sample-education'),
				languages: withIds(GENERATOR_SAMPLE.languages, 'sample-language')
			}

	const firstName = source.firstName.trim()
	const lastName = source.lastName.trim()

	return {
		fullName: [firstName, lastName].filter(Boolean).join(' '),
		initials: `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase(),
		jobTitle: source.jobTitle.trim(),
		contacts: [source.email, source.phone, source.city]
			.map((value) => value.trim())
			.filter(Boolean),
		summary: source.summary.trim(),
		experience: source.experience,
		education: source.education,
		skills: source.skills,
		languages: source.languages
	}
}

export const periodOf = ({ from, to }, present) => {
	const start = from?.trim()
	const end = to?.trim() || (start ? present : '')
	return [start, end].filter(Boolean).join(' – ')
}

export const colorValue = (colorId) =>
	(GENERATOR_COLORS.find((color) => color.id === colorId) ?? GENERATOR_COLORS[0]).value
