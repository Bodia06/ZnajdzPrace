import { z } from 'zod'
import {
	AUTH_ROLES,
	MAX_COMPANY_LENGTH,
	MAX_PASSWORD_LENGTH,
	MIN_PASSWORD_LENGTH,
	NIP_WEIGHTS
} from '@/constants'
import { email, personName, requiredText } from './fields'

const hasValidChecksum = (digits) => {
	const sum = NIP_WEIGHTS.reduce(
		(total, weight, index) => total + weight * Number(digits[index]),
		0
	)
	return sum % 11 === Number(digits[9])
}

const nip = z
	.string()
	.trim()
	.min(1, 'required')
	.transform((value) => value.replace(/[\s-]/g, ''))
	.pipe(
		z
			.string()
			.regex(/^\d{10}$/, 'nip')
			.refine(hasValidChecksum, 'nip')
	)

const password = z
	.string()
	.min(1, 'required')
	.min(MIN_PASSWORD_LENGTH, 'passwordShort')
	.max(MAX_PASSWORD_LENGTH, 'passwordLong')

const terms = z.boolean().refine(Boolean, 'terms')

export const loginSchema = z.object({
	email,
	password: z.string().min(1, 'required'),
	remember: z.boolean()
})

const credentials = { email, password, confirm: z.string().min(1, 'required'), terms }

const candidateSchema = z.object({
	role: z.literal(AUTH_ROLES.candidate),
	firstName: personName,
	lastName: personName,
	...credentials
})

const employerSchema = z.object({
	role: z.literal(AUTH_ROLES.employer),
	companyName: requiredText(MAX_COMPANY_LENGTH),
	nip,
	...credentials
})

export const registerSchema = z
	.discriminatedUnion('role', [candidateSchema, employerSchema])
	.refine((values) => values.password === values.confirm, {
		error: 'mismatch',
		path: ['confirm'],
		when: ({ value }) => typeof value.password === 'string' && typeof value.confirm === 'string'
	})
	.transform((values) => {
		const payload = { ...values }
		delete payload.confirm
		return payload
	})
