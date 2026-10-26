'use client'

import { useEffect, useState } from 'react'
import { MOBILE_MENU_DESKTOP_QUERY } from '@/constants'
import useScrollLock from '@/hooks/common/useScrollLock'

export default function useMobileMenu() {
	const [open, setOpen] = useState(false)
	const [instant, setInstant] = useState(false)

	const close = () => setOpen(false)
	const closeNow = () => {
		setInstant(true)
		setOpen(false)
	}
	const toggle = () => {
		setInstant(false)
		setOpen((prev) => !prev)
	}

	useScrollLock(open)

	useEffect(() => {
		if (!open) return

		const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
		const media = window.matchMedia(MOBILE_MENU_DESKTOP_QUERY)
		const onMediaChange = (e) => e.matches && setOpen(false)

		document.addEventListener('keydown', onKeyDown)
		media.addEventListener('change', onMediaChange)

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			media.removeEventListener('change', onMediaChange)
		}
	}, [open])

	return { open, instant, close, closeNow, toggle }
}
