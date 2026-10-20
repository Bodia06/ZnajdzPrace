import { GENERATOR_STEP_IDS } from '@/constants'
import { hasContent } from '@/lib/generator/cv'
import {
	createSkillSchema,
	educationSchema,
	experienceSchema,
	languageSchema,
	personalSchema
} from '@/lib/generator/schemas'
import { validate } from '@/lib/validation'

const ENTRY_SCHEMAS = { experience: experienceSchema, education: educationSchema }

const STEP_OF_SECTION = {
	personal: GENERATOR_STEP_IDS.personal,
	experience: GENERATOR_STEP_IDS.experience,
	education: GENERATOR_STEP_IDS.education,
	languages: GENERATOR_STEP_IDS.skills
}

const collect = (errors, prefix, schema, input) => {
	for (const [name, key] of Object.entries(validate(schema, input).errors)) {
		errors[`${prefix}.${name}`] = key
	}
}

export const stepOfPath = (path) => STEP_OF_SECTION[path.split('.')[0]]

export function validateCv(cv) {
	const errors = {}

	collect(errors, 'personal', personalSchema, cv.personal)
	for (const [section, schema] of Object.entries(ENTRY_SCHEMAS)) {
		for (const entry of cv[section].filter(hasContent)) {
			collect(errors, `${section}.${entry.id}`, schema, entry)
		}
	}
	for (const language of cv.languages.filter(hasContent)) {
		collect(errors, `languages.${language.id}`, languageSchema, language)
	}

	return errors
}

export function validateSkill(text, skills) {
	const result = createSkillSchema(skills).safeParse(text)
	return result.success ? null : result.error.issues[0].message
}
