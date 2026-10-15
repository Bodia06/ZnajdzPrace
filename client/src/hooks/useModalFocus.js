'use client'

import { useEffect } from 'react'

const FOCUSABLE =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const isVisible = (element) => getComputedStyle(element).visibility !== 'hidden'

export default function useModalFocus(ref, onEscape) {
	useEffect(() => {
		const root = ref.current
		const previous = document.activeElement
		root.focus()

		const onKeyDown = (event) => {
			if (event.key === 'Escape') return onEscape?.()
			if (event.key !== 'Tab') return

			const items = [...root.querySelectorAll(FOCUSABLE)].filter(isVisible)
			if (items.length === 0) return

			const first = items[0]
			const last = items[items.length - 1]
			const active = document.activeElement

			if (event.shiftKey && (active === first || active === root)) {
				event.preventDefault()
				last.focus()
			} else if (!event.shiftKey && active === last) {
				event.preventDefault()
				first.focus()
			}
		}

		document.addEventListener('keydown', onKeyDown)

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			previous?.focus?.()
		}
	}, [ref, onEscape])
}
