import { GENERATOR_LABELS } from '../generator/content'

export const MAX_EMAIL_LENGTH = 254
export const MAX_COMPANY_LENGTH = 80
export const NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7]
export const MONTHS = 12

export const NAME_PATTERN = /^\p{L}[\p{L}\s.'’-]*$/u
export const CITY_PATTERN = /^\p{L}[\p{L}\s.,'’-]*$/u
export const PHONE_PATTERN = /^(?:[\s()-]*\+?(?:[\s()-]*\d){9,15}[\s()-]*)?$/

const DATE_SOURCE = '(?:(0[1-9]|1[0-2])\\.)?((?:19|20)\\d{2})'

export const DATE_PATTERN = new RegExp(`^${DATE_SOURCE}$`)
export const START_DATE_PATTERN = new RegExp(`^(?:|${DATE_SOURCE})$`)
export const PERIOD_END_PATTERN = new RegExp(
	`^(?:|${DATE_SOURCE}|${GENERATOR_LABELS.present})$`,
	'i'
)
