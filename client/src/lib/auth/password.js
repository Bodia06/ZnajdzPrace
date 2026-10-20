export const MIN_PASSWORD_LENGTH = 8
export const MAX_PASSWORD_LENGTH = 128
export const MAX_PASSWORD_STRENGTH = 4

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
