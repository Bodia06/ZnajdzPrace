'use client'

import { useEffect, useRef } from 'react'

export default function usePointerParallax() {
	const ref = useRef(null)

	useEffect(() => {
		const element = ref.current
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		let frame = 0
		let point = { x: 0, y: 0 }

		const update = () => {
			frame = 0
			const { left, top, width, height } = element.getBoundingClientRect()
			element.style.setProperty('--px', ((point.x - left) / width - 0.5) * 2)
			element.style.setProperty('--py', ((point.y - top) / height - 0.5) * 2)
		}

		const onMove = (event) => {
			if (event.pointerType !== 'mouse') return
			point = { x: event.clientX, y: event.clientY }
			if (!frame) frame = requestAnimationFrame(update)
		}

		const onLeave = () => {
			cancelAnimationFrame(frame)
			frame = 0
			element.style.setProperty('--px', 0)
			element.style.setProperty('--py', 0)
		}

		element.addEventListener('pointermove', onMove)
		element.addEventListener('pointerleave', onLeave)

		return () => {
			cancelAnimationFrame(frame)
			element.removeEventListener('pointermove', onMove)
			element.removeEventListener('pointerleave', onLeave)
		}
	}, [])

	return ref
}
