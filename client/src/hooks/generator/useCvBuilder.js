'use client'

import { useEffect, useState } from 'react'
import { GENERATOR_STEPS, GENERATOR_STORAGE_KEY } from '@/constants'
import {
	createEntry,
	createInitialCv,
	createLanguage,
	isStepDone,
	mergeDraft
} from '@/lib/generator/cv'

const SAVED_TIMEOUT = 2200

export default function useCvBuilder() {
	const [cv, setCv] = useState(createInitialCv)
	const [stepIndex, setStepIndex] = useState(0)
	const [saved, setSaved] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			try {
				const raw = window.localStorage.getItem(GENERATOR_STORAGE_KEY)
				if (raw) setCv(mergeDraft(JSON.parse(raw)))
			} catch {
				setCv(createInitialCv())
			}
		}, 0)

		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (!saved) return

		const timer = setTimeout(() => setSaved(false), SAVED_TIMEOUT)
		return () => clearTimeout(timer)
	}, [saved])

	const steps = GENERATOR_STEPS.map((step, index) => ({
		...step,
		active: index === stepIndex,
		done: index !== stepIndex && isStepDone(step.id, cv)
	}))

	const update = (changes) => setCv((current) => ({ ...current, ...changes }))

	const setPersonal = (name, value) =>
		setCv((current) => ({ ...current, personal: { ...current.personal, [name]: value } }))

	const updateList = (section, change) =>
		setCv((current) => ({ ...current, [section]: change(current[section]) }))

	const addEntry = (section) => updateList(section, (list) => [...list, createEntry(section)])

	const removeEntry = (section, id) =>
		updateList(section, (list) =>
			list.length > 1 ? list.filter((entry) => entry.id !== id) : list
		)

	const setEntry = (section, id, name, value) =>
		updateList(section, (list) =>
			list.map((entry) => (entry.id === id ? { ...entry, [name]: value } : entry))
		)

	const addSkill = (text) => {
		const skill = text.trim()
		if (!skill) return false

		updateList('skills', (list) =>
			list.some((item) => item.toLowerCase() === skill.toLowerCase()) ? list : [...list, skill]
		)
		return true
	}

	const removeSkill = (skill) =>
		updateList('skills', (list) => list.filter((item) => item !== skill))

	const addLanguage = () => updateList('languages', (list) => [...list, createLanguage()])

	const removeLanguage = (id) =>
		updateList('languages', (list) => list.filter((language) => language.id !== id))

	const setLanguage = (id, name, value) =>
		updateList('languages', (list) =>
			list.map((language) => (language.id === id ? { ...language, [name]: value } : language))
		)

	const saveDraft = () => {
		try {
			window.localStorage.setItem(GENERATOR_STORAGE_KEY, JSON.stringify(cv))
			setSaved(true)
		} catch {
			setSaved(false)
		}
	}

	const download = () => window.print()

	return {
		cv,
		steps,
		stepIndex,
		isFirst: stepIndex === 0,
		isLast: stepIndex === GENERATOR_STEPS.length - 1,
		saved,
		next: () => setStepIndex((index) => Math.min(index + 1, GENERATOR_STEPS.length - 1)),
		back: () => setStepIndex((index) => Math.max(index - 1, 0)),
		setTemplate: (template) => update({ template }),
		setColor: (color) => update({ color }),
		setPersonal,
		addEntry,
		removeEntry,
		setEntry,
		addSkill,
		removeSkill,
		addLanguage,
		removeLanguage,
		setLanguage,
		saveDraft,
		download
	}
}
