'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
	FORM_STATUS,
	LINKS,
	OFFER_CREATE_DATA,
	OFFER_CREATE_INITIAL_VALUES,
	OFFER_CREATE_STEPS
} from '@/constants'
import { getOfferFieldError, toOfferPayload } from '@/lib/offerForm'
import { createOffer } from '@/services/api/offers'
import { findCityCoordinates } from '@/services/sources/geocoding'
import { validate } from '@/utils/validation'
import { createOfferSchema } from '@/utils/validation/offers'

const toggleItem = (list, value) =>
	list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

const stepOfField = (name) => OFFER_CREATE_STEPS.find((step) => step.fields.includes(name))?.id

export default function useOfferCreateForm() {
	const router = useRouter()
	const [values, setValues] = useState(OFFER_CREATE_INITIAL_VALUES)
	const [stepIndex, setStepIndex] = useState(0)
	const [furthest, setFurthest] = useState(0)
	const [attempted, setAttempted] = useState({})
	const [error, setError] = useState(null)
	const [status, setStatus] = useState(FORM_STATUS.idle)

	const { data, errors } = useMemo(
		() => validate(createOfferSchema, toOfferPayload(values)),
		[values]
	)
	const stepHasErrors = (step) => step.fields.some((name) => errors[name])
	const isLast = stepIndex === OFFER_CREATE_STEPS.length - 1

	const fieldError = (name) => {
		if (!errors[name] || !attempted[stepOfField(name)]) return undefined
		return OFFER_CREATE_DATA.errors[getOfferFieldError(name, values)]
	}

	const steps = OFFER_CREATE_STEPS.map((step, index) => ({
		...step,
		active: index === stepIndex,
		done: index !== stepIndex && index <= furthest && !stepHasErrors(step)
	}))

	const change = (name, update) => {
		setValues((current) => ({ ...current, [name]: update(current[name]) }))
		setError(null)
	}

	const setValue = (name) => (value) => change(name, () => value)
	const toggleValue = (name) => (value) => change(name, (list) => toggleItem(list, value))

	const addItem = (name) => (item) => change(name, (list) => [...list, item])
	const removeItem = (name) => (item) =>
		change(name, (list) => list.filter((entry) => entry !== item))

	const goTo = (index) => {
		setStepIndex(index)
		setFurthest((current) => Math.max(current, index))
		window.scrollTo({ top: 0 })
	}

	const goBack = () => stepIndex > 0 && goTo(stepIndex - 1)

	const reveal = (index) => {
		setAttempted((current) => ({ ...current, [OFFER_CREATE_STEPS[index].id]: true }))
	}

	const submit = async (event) => {
		event.preventDefault()
		if (status === FORM_STATUS.submitting) return

		if (!isLast) {
			if (stepHasErrors(OFFER_CREATE_STEPS[stepIndex])) return reveal(stepIndex)
			return goTo(stepIndex + 1)
		}

		const invalidIndex = OFFER_CREATE_STEPS.findIndex(stepHasErrors)
		if (invalidIndex !== -1) {
			reveal(invalidIndex)
			return setStepIndex(invalidIndex)
		}

		setStatus(FORM_STATUS.submitting)
		setError(null)
		try {
			const coordinates = await findCityCoordinates(data.location)
			const { id } = await createOffer({ ...data, ...coordinates })
			router.push(`${LINKS.OFFERS}/${id}`)
		} catch (requestError) {
			setError(requestError.isNetwork ? 'unreachable' : 'server')
			setStatus(FORM_STATUS.failed)
		}
	}

	return {
		values,
		steps,
		stepIndex,
		isLast,
		error,
		submitting: status === FORM_STATUS.submitting,
		fieldError,
		setValue,
		toggleValue,
		addItem,
		removeItem,
		goBack,
		submit
	}
}
