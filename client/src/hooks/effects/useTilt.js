'use client'

import { useRef } from 'react'
import { TILT_DESKTOP_QUERY, TILT_MAX_ANGLE } from '@/constants'

export default function useTilt() {
	const ref = useRef(null)
	const frame = useRef(0)
	const pointer = useRef({ x: 0, y: 0 })

	const render = () => {
		frame.current = 0
		const element = ref.current
		const { left, top, width, height } = element.getBoundingClientRect()
		const x = (pointer.current.x - left) / width
		const y = (pointer.current.y - top) / height

		element.style.transition = 'transform 0.12s ease-out'
		element.style.transform = `perspective(900px) rotateX(${(0.5 - y) * TILT_MAX_ANGLE * 2}deg) rotateY(${(x - 0.5) * TILT_MAX_ANGLE * 2}deg) scale3d(1.02, 1.02, 1.02)`
		element.style.setProperty('--mx', `${x * 100}%`)
		element.style.setProperty('--my', `${y * 100}%`)
	}

	const onPointerMove = (event) => {
		if (event.pointerType !== 'mouse') return
		if (!window.matchMedia(TILT_DESKTOP_QUERY).matches) return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		pointer.current = { x: event.clientX, y: event.clientY }
		if (!frame.current) frame.current = requestAnimationFrame(render)
	}

	const onPointerLeave = () => {
		cancelAnimationFrame(frame.current)
		frame.current = 0

		const element = ref.current
		element.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
		element.style.transform = ''
	}

	return { ref, handlers: { onPointerMove, onPointerLeave } }
}
