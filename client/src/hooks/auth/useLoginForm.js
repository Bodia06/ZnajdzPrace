'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_INVALID_STATUSES, AUTH_LOGIN_INITIAL_VALUES, LINKS } from '@/constants'
import { loginSchema } from '@/utils/validation/auth'
import { loginRequest } from '@/services/api/auth'
import { validate } from '@/utils/validation'

export default function useLoginForm() {
	const router = useRouter()
	const [values, setValues] = useState(AUTH_LOGIN_INITIAL_VALUES)
	const [errors, setErrors] = useState({})
	const [error, setError] = useState(null)
	const [submitting, setSubmitting] = useState(false)

	const setValue = (name) => (value) => {
		setValues((current) => ({ ...current, [name]: value }))
		setErrors((current) => ({ ...current, [name]: undefined }))
		setError(null)
	}

	const submit = async (event) => {
		event.preventDefault()
		if (submitting) return

		const { data, errors: found } = validate(loginSchema, values)
		setErrors(found)
		if (!data) return

		setSubmitting(true)
		setError(null)
		try {
			await loginRequest(data)
			router.push(LINKS.HOME)
		} catch (requestError) {
			setError(AUTH_INVALID_STATUSES.includes(requestError.status) ? 'invalid' : 'server')
			setSubmitting(false)
		}
	}

	return { values, errors, error, submitting, setValue, submit }
}
