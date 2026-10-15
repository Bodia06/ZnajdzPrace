'use client'

import { useState } from 'react'

export default function useEntryAccordion(entries, onAdd) {
	const [collapsed, setCollapsed] = useState(() => new Set())

	const toggle = (id) =>
		setCollapsed((current) => {
			const next = new Set(current)
			if (next.has(id)) next.delete(id)
			else next.add(id)
			return next
		})

	const add = () => {
		setCollapsed(new Set(entries.map((entry) => entry.id)))
		onAdd()
	}

	return { isCollapsed: (id) => collapsed.has(id), toggle, add }
}
