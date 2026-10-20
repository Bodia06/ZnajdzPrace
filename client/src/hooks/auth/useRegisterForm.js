'use client'

import { useState } from 'react'
import { AUTH_ROLES } from '@/constants'
import { getPasswordStrength } from '@/lib/auth/password'
import { registerSchema } from '@/lib/auth/schemas'
import { validate } from '@/lib/validation'
import { registerRequest } from '@/services/auth'

const INITIAL_VALUES = {
	firstName: '',
	lastName: '',
	companyName: '',
	nip: '',
	email: '',
	password: '',
	confirm: '',
	terms: false
}

export default function useRegisterForm() {
	const [role, setRole] = useState(AUTH_ROLES.candidate)
	const [values, setValues] = useState(INITIAL_VALUES)
	const [errors, setErrors] = useState({})
	const [status, setStatus] = useState('idle')

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
		if (status === 'submitting') return

		const { data, errors: found } = validate(registerSchema, { role, ...values })
		setErrors(found)
		if (!data) return

		setStatus('submitting')
		try {
			await registerRequest(data)
			setStatus('done')
		} catch {
			setStatus('failed')
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
