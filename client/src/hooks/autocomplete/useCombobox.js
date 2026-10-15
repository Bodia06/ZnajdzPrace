'use client'

import { useState } from 'react'

export default function useCombobox(items, onSelect) {
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState(-1)
	const expanded = open && items.length > 0

	const show = () => {
		setActive(-1)
		setOpen(true)
	}
	const hide = () => setOpen(false)
	const select = (item) => {
		onSelect(item)
		setActive(-1)
		setOpen(false)
	}

	const onKeyDown = (e) => {
		if (e.key === 'Escape') return hide()
		if (!expanded) return

		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			e.preventDefault()
			const step = e.key === 'ArrowDown' ? 1 : -1
			setActive((i) => (i + step + items.length) % items.length)
		} else if (e.key === 'Enter' && active >= 0) {
			e.preventDefault()
			select(items[active])
		}
	}

	const getInputProps = (listId) => ({
		role: 'combobox',
		'aria-expanded': expanded,
		'aria-controls': listId,
		'aria-autocomplete': 'list',
		'aria-activedescendant': active >= 0 ? `${listId}-${active}` : undefined,
		onKeyDown,
		onBlur: hide
	})

	return { expanded, active, setActive, show, select, getInputProps }
}
