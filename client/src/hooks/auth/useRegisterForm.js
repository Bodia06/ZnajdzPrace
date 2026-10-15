'use client'

import { useState } from 'react'
import { AUTH_ROLES } from '@/constants'
import { getPasswordStrength, validateRegistration } from '@/lib/auth/validation'
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

		const found = validateRegistration(role, values)
		setErrors(found)
		if (Object.keys(found).length > 0) return

		setStatus('submitting')
		try {
			await registerRequest({ role, ...values })
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
