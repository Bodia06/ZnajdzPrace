'use client'

import { useEffect, useState } from 'react'

const DESKTOP_QUERY = '(min-width: 1100px)'

export default function useMobileMenu() {
	const [open, setOpen] = useState(false)

	const close = () => setOpen(false)
	const toggle = () => setOpen((prev) => !prev)

	useEffect(() => {
		if (!open) return

		const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
		const media = window.matchMedia(DESKTOP_QUERY)
		const onMediaChange = (e) => e.matches && setOpen(false)

		document.addEventListener('keydown', onKeyDown)
		media.addEventListener('change', onMediaChange)
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			media.removeEventListener('change', onMediaChange)
			document.body.style.overflow = ''
		}
	}, [open])

	return { open, close, toggle }
}
