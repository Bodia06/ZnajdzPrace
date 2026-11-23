'use client'

import { useState } from 'react'
import { AUTH_REGISTER_INITIAL_VALUES, AUTH_ROLES, FORM_STATUS, HTTP_STATUS } from '@/constants'
import { getPasswordStrength } from '@/lib/password'
import { registerSchema } from '@/utils/validation/auth'
import { validate } from '@/utils/validation'
import { registerRequest } from '@/services/api/auth'

const FORM_FIELDS = Object.keys(AUTH_REGISTER_INITIAL_VALUES)

function getServerFieldErrors(error) {
	if (error?.status === HTTP_STATUS.conflict) return { email: 'emailTaken' }
	if (error?.status !== HTTP_STATUS.badRequest || !Array.isArray(error.details)) return {}

	const fieldErrors = {}
	for (const { field } of error.details) {
		const name = typeof field === 'object' ? field?.key : field
		if (FORM_FIELDS.includes(name)) fieldErrors[name] ??= 'invalid'
	}
	return fieldErrors
}

export default function useRegisterForm() {
	const [role, setRole] = useState(AUTH_ROLES.candidate)
	const [values, setValues] = useState(AUTH_REGISTER_INITIAL_VALUES)
	const [errors, setErrors] = useState({})
	const [status, setStatus] = useState(FORM_STATUS.idle)

	const setValue = (name) => (value) => {
		setValues((current) => ({ ...current, [name]: value }))
		setErrors((current) => ({
			...current,
			[name]: undefined,
			...(name === 'password' && { confirm: undefined })
		}))
	}

	const submit = async (event) => {
		event.preventDefault()
		if (status === FORM_STATUS.submitting) return

		const { data, errors: found } = validate(registerSchema, { role, ...values })
		setErrors(found)
		if (!data) return

		setStatus(FORM_STATUS.submitting)
		try {
			await registerRequest(data)
			setStatus(FORM_STATUS.done)
		} catch (error) {
			const fieldErrors = getServerFieldErrors(error)
			if (Object.keys(fieldErrors).length > 0) {
				setErrors(fieldErrors)
				setStatus(FORM_STATUS.idle)
			} else {
				setStatus(FORM_STATUS.failed)
			}
		}
	}

	return {
		role,
		values,
		errors,
		status,
		strength: getPasswordStrength(values.password),
		setRole,
		setValue,
		submit
	}
}
