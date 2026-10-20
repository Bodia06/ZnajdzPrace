import { AUTH_ROLES } from '@/constants'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[^\s@.]{2,}$/
const NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7]
const MIN_PASSWORD_LENGTH = 8
export const MAX_PASSWORD_STRENGTH = 4

const isEmail = (value) => EMAIL_PATTERN.test(value.trim())

function isNip(value) {
	const digits = value.replace(/[\s-]/g, '')
	if (!/^\d{10}$/.test(digits)) return false

	const sum = NIP_WEIGHTS.reduce(
		(total, weight, index) => total + weight * Number(digits[index]),
		0
	)
	return sum % 11 === Number(digits[9])
}

export function getPasswordStrength(password) {
	if (!password) return 0

	const checks = [
		password.length >= MIN_PASSWORD_LENGTH,
		/[a-z]/.test(password) && /[A-Z]/.test(password),
		/\d/.test(password),
		/[^A-Za-z0-9]/.test(password)
	]
	return checks.filter(Boolean).length
}

export function validateLogin({ email, password }) {
	return isEmail(email) && password.length > 0
}

export function validateRegistration(role, values) {
	const errors = {}
	const require = (name, test = () => true, key = 'required') => {
		const value = values[name]
		if (typeof value === 'string' && value.trim() === '') errors[name] = 'required'
		else if (!test(value)) errors[name] = key
	}

	if (role === AUTH_ROLES.candidate) {
		require('firstName')
		require('lastName')
	} else {
		require('companyName')
		require('nip', isNip, 'nip')
	}
	require('email', isEmail, 'email')
	require('password', (value) => value.length >= MIN_PASSWORD_LENGTH, 'passwordShort')
	require('confirm', (value) => value === values.password, 'mismatch')
	if (!values.terms) errors.terms = 'terms'

	return errors
}
