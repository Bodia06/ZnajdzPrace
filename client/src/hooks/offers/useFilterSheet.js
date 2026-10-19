'use client'

import { useEffect, useRef, useState } from 'react'
import { OFFERS_FILTER_DESKTOP_QUERY } from '@/constants'
import useScrollLock from '@/hooks/useScrollLock'

export default function useFilterSheet() {
	const [open, setOpen] = useState(false)
	const panelRef = useRef(null)
	const triggerRef = useRef(null)

	const show = () => setOpen(true)
	const hide = () => setOpen(false)

	useScrollLock(open)

	useEffect(() => {
		if (!open) return

		const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
		const media = window.matchMedia(OFFERS_FILTER_DESKTOP_QUERY)
		const onMediaChange = (e) => e.matches && setOpen(false)

		document.addEventListener('keydown', onKeyDown)
		media.addEventListener('change', onMediaChange)
		const trigger = triggerRef.current
		let frame = requestAnimationFrame(() => {
			frame = requestAnimationFrame(() => panelRef.current?.focus())
		})

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			media.removeEventListener('change', onMediaChange)
			cancelAnimationFrame(frame)
			trigger?.focus()
		}
	}, [open])

	return { open, show, hide, panelRef, triggerRef }
}
