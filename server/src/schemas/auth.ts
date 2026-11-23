import { z } from 'zod'

const requiredText = z.string().trim().min(1).max(80)
const personName = requiredText.regex(/^\p{L}[\p{L}\s.'’-]*$/u, 'Invalid name')
const nipWeights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
const nip = z.string()
	.transform((value) => value.replace(/[\s-]/g, ''))
	.pipe(z.string().regex(/^\d{10}$/, 'Invalid NIP').refine((value) => {
		const sum = nipWeights.reduce((total, weight, index) => total + weight * Number(value[index]), 0)
		return sum % 11 === Number(value[9])
	}, 'Invalid NIP checksum'))

const credentials = {
	email: z.string().trim().toLowerCase().max(254).pipe(z.email()),
	password: z.string().min(8).max(128),
	terms: z.literal(true, 'Terms must be accepted')
}

export const registerSchema = z.discriminatedUnion('role', [
	z.object({
		role: z.literal('candidate'),
		firstName: personName,
		lastName: personName,
		...credentials
	}),
	z.object({
		role: z.literal('employer'),
		companyName: requiredText.refine((value) => !value.includes('\0'), 'Invalid company name'),
		nip,
		...credentials
	})
])
