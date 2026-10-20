'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LINKS } from '@/constants'
import { loginSchema } from '@/lib/auth/schemas'
import { loginRequest } from '@/services/auth'
import { validate } from '@/lib/validation'

const INITIAL_VALUES = { email: '', password: '', remember: true }
const INVALID_STATUSES = [400, 401, 403]

export default function useLoginForm() {
	const router = useRouter()
	const [values, setValues] = useState(INITIAL_VALUES)
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
			setError(INVALID_STATUSES.includes(requestError.status) ? 'invalid' : 'server')
			setSubmitting(false)
		}
	}

	return { values, errors, error, submitting, setValue, submit }
}
