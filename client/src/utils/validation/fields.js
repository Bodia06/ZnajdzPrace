import { z } from 'zod'
import { MAX_EMAIL_LENGTH, MAX_NAME_LENGTH, NAME_PATTERN } from '@/constants'

export const requiredText = (max) => z.string().trim().min(1, 'required').max(max, 'tooLong')

export const optionalText = (max) => z.string().trim().max(max, 'tooLong')

export const personName = requiredText(MAX_NAME_LENGTH).regex(NAME_PATTERN, 'name')

export const email = z
	.string()
	.trim()
	.min(1, 'required')
	.max(MAX_EMAIL_LENGTH, 'tooLong')
	.pipe(z.email('email'))
	.transform((value) => value.toLowerCase())
