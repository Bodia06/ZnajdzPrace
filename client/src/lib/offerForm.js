const toNumber = (value) => (String(value).trim() === '' ? undefined : Number(value))

const omitEmpty = (payload) =>
	Object.fromEntries(
		Object.entries(payload).filter(([, value]) => value !== undefined && value !== '')
	)

export function toOfferPayload(values) {
	return omitEmpty({
		title: values.title.trim(),
		company: values.company.trim(),
		location: values.location.trim(),
		description: values.description.trim(),
		requirements: values.requirements.trim(),
		contracts: values.contracts,
		mode: values.mode,
		levels: values.levels,
		workload: values.workload,
		salaryFrom: toNumber(values.salaryFrom),
		salaryTo: toNumber(values.salaryTo),
		salaryContract: values.salaryContract,
		validUntil: values.validUntil,
		skills: values.skills.map((name) => ({ name, required: true })),
		duties: values.duties,
		benefits: values.benefits,
		recruitment: values.recruitment,
		tags: values.tags
	})
}

export const isEmptyValue = (value) =>
	Array.isArray(value) ? value.length === 0 : !String(value).trim()

export const getOfferFieldError = (name, values) =>
	isEmptyValue(values[name] ?? '') ? 'required' : 'invalid'

const pad = (value) => String(value).padStart(2, '0')

export function dateInDays(days) {
	const date = new Date()
	date.setDate(date.getDate() + days)
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}
