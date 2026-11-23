'use client'

import { useEffect, useRef, useState } from 'react'

export default function useUserMenu() {
	const [open, setOpen] = useState(false)
	const rootRef = useRef(null)
	const triggerRef = useRef(null)

	const close = () => setOpen(false)
	const toggle = () => setOpen((current) => !current)

	useEffect(() => {
		if (!open) return

		const onPointerDown = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false)
		}
		const onKeyDown = (event) => {
			if (event.key !== 'Escape') return
			setOpen(false)
			triggerRef.current?.focus()
		}

		document.addEventListener('pointerdown', onPointerDown)
		document.addEventListener('keydown', onKeyDown)
		return () => {
			document.removeEventListener('pointerdown', onPointerDown)
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [open])

	return { open, rootRef, triggerRef, close, toggle }
}
