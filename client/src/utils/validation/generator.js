import { z } from 'zod'
import {
	GENERATOR_COLORS,
	GENERATOR_LEVELS,
	GENERATOR_LIMITS,
	GENERATOR_TEMPLATE_IDS,
	CITY_PATTERN,
	DATE_PATTERN,
	MONTHS,
	NAME_PATTERN,
	PERIOD_END_PATTERN,
	PHONE_PATTERN,
	START_DATE_PATTERN
} from '@/constants'
import { email, optionalText, personName, requiredText } from './fields'

const monthIndex = (value, endOfPeriod) => {
	const [, month, year] = DATE_PATTERN.exec(value)
	const fallback = endOfPeriod ? MONTHS - 1 : 0
	return Number(year) * MONTHS + (month ? Number(month) - 1 : fallback)
}

const date = (pattern) => z.string().trim().regex(pattern, 'date')

const currentMonthIndex = () => {
	const now = new Date()
	return now.getFullYear() * MONTHS + now.getMonth()
}

const withPeriod = (shape) =>
	z.object(shape).superRefine(({ from, to }, context) => {
		if (DATE_PATTERN.test(from) && monthIndex(from, false) > currentMonthIndex()) {
			context.addIssue({ code: 'custom', path: ['from'], message: 'dateFuture' })
		}

		if (!DATE_PATTERN.test(from) || !DATE_PATTERN.test(to)) return

		if (monthIndex(from, false) > monthIndex(to, true)) {
			context.addIssue({ code: 'custom', path: ['to'], message: 'dateOrder' })
		}
	})

export const personalSchema = z.object({
	firstName: personName,
	lastName: personName,
	jobTitle: optionalText(GENERATOR_LIMITS.jobTitle),
	email,
	phone: optionalText(GENERATOR_LIMITS.phone).regex(PHONE_PATTERN, 'phone'),
	city: optionalText(GENERATOR_LIMITS.city).refine(
		(value) => !value || CITY_PATTERN.test(value),
		'city'
	),
	summary: optionalText(GENERATOR_LIMITS.summary)
})

export const experienceSchema = withPeriod({
	position: requiredText(GENERATOR_LIMITS.entryTitle),
	company: optionalText(GENERATOR_LIMITS.entryTitle),
	from: date(START_DATE_PATTERN),
	to: date(PERIOD_END_PATTERN),
	description: optionalText(GENERATOR_LIMITS.description)
})

export const educationSchema = withPeriod({
	school: requiredText(GENERATOR_LIMITS.entryTitle),
	degree: optionalText(GENERATOR_LIMITS.entryTitle),
	from: date(START_DATE_PATTERN),
	to: date(PERIOD_END_PATTERN)
})

export const languageSchema = z.object({
	name: requiredText(GENERATOR_LIMITS.language).regex(NAME_PATTERN, 'name'),
	level: z.enum(GENERATOR_LEVELS)
})

export const createSkillSchema = (skills) =>
	requiredText(GENERATOR_LIMITS.skill)
		.regex(/^[^<>]+$/, 'skillChars')
		.refine(
			(value) => !skills.some((item) => item.toLowerCase() === value.toLowerCase()),
			'skillDuplicate'
		)
		.refine(() => skills.length < GENERATOR_LIMITS.skills, 'skillLimit')

const text = z.string().catch('')

const sanitizeSkills = (items) => {
	const seen = new Set()
	const result = []
	for (const item of items) {
		const skill = item.trim()
		const key = skill.toLowerCase()
		if (!skill || skill.length > GENERATOR_LIMITS.skill || /[<>]/.test(skill) || seen.has(key)) {
			continue
		}
		seen.add(key)
		result.push(skill)
	}
	return result.slice(0, GENERATOR_LIMITS.skills)
}

const draftEntry = (fields) =>
	z.object({ id: z.string().min(1), ...Object.fromEntries(fields.map((name) => [name, text])) })

export const draftSchema = z.object({
	template: z.enum(Object.values(GENERATOR_TEMPLATE_IDS)).optional().catch(undefined),
	color: z
		.enum(GENERATOR_COLORS.map((color) => color.id))
		.optional()
		.catch(undefined),
	personal: z
		.object(Object.fromEntries(Object.keys(personalSchema.shape).map((name) => [name, text])))
		.catch({}),
	experience: z.array(draftEntry(Object.keys(experienceSchema.shape))).catch([]),
	education: z.array(draftEntry(Object.keys(educationSchema.shape))).catch([]),
	skills: z.array(z.string()).transform(sanitizeSkills).catch([]),
	languages: z
		.array(draftEntry(['name']).extend({ level: z.enum(GENERATOR_LEVELS).catch('B2') }))
		.catch([])
})
