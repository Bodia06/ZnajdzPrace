import { GENERATOR_STORAGE_KEY } from '@/constants'
import { mergeDraft } from '@/lib/cv'

export function loadCvDraft() {
	const raw = window.localStorage.getItem(GENERATOR_STORAGE_KEY)
	return raw ? mergeDraft(JSON.parse(raw)) : null
}

export const saveCvDraft = (cv) =>
	window.localStorage.setItem(GENERATOR_STORAGE_KEY, JSON.stringify(cv))
