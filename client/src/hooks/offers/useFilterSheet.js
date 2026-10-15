'use client'

import { useEffect, useRef, useState } from 'react'

const DESKTOP_QUERY = '(min-width: 1024px)'

export default function useFilterSheet() {
	const [open, setOpen] = useState(false)
	const panelRef = useRef(null)
	const triggerRef = useRef(null)

	const show = () => setOpen(true)
	const hide = () => setOpen(false)

	useEffect(() => {
		if (!open) return

		const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
		const media = window.matchMedia(DESKTOP_QUERY)
		const onMediaChange = (e) => e.matches && setOpen(false)

		document.addEventListener('keydown', onKeyDown)
		media.addEventListener('change', onMediaChange)
		document.body.style.overflow = 'hidden'
		const trigger = triggerRef.current
		let frame = requestAnimationFrame(() => {
			frame = requestAnimationFrame(() => panelRef.current?.focus())
		})

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			media.removeEventListener('change', onMediaChange)
			cancelAnimationFrame(frame)
			document.body.style.overflow = ''
			trigger?.focus()
		}
	}, [open])

	return { open, show, hide, panelRef, triggerRef }
}
