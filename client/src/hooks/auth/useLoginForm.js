'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LINKS } from '@/constants'
import { validateLogin } from '@/lib/auth/validation'
import { loginRequest } from '@/services/auth'

const INITIAL_VALUES = { email: '', password: '', remember: true }
const INVALID_STATUSES = [400, 401, 403]

export default function useLoginForm() {
	const router = useRouter()
	const [values, setValues] = useState(INITIAL_VALUES)
	const [error, setError] = useState(null)
	const [submitting, setSubmitting] = useState(false)

	const setValue = (name) => (value) => {
		setValues((current) => ({ ...current, [name]: value }))
		setError(null)
	}

	const submit = async (event) => {
		event.preventDefault()
		if (submitting) return

		if (!validateLogin(values)) return setError('invalid')

		setSubmitting(true)
		setError(null)
		try {
			await loginRequest(values)
			router.push(LINKS.HOME)
		} catch (requestError) {
			setError(INVALID_STATUSES.includes(requestError.status) ? 'invalid' : 'server')
			setSubmitting(false)
		}
	}

	return { values, error, submitting, setValue, submit }
}
