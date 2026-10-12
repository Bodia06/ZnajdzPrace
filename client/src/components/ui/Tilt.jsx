'use client'

import { useRef } from 'react'

const MAX_ANGLE = 7

export default function Tilt({ className = '', children }) {
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
		element.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX_ANGLE * 2}deg) rotateY(${(x - 0.5) * MAX_ANGLE * 2}deg) scale3d(1.02, 1.02, 1.02)`
		element.style.setProperty('--mx', `${x * 100}%`)
		element.style.setProperty('--my', `${y * 100}%`)
	}

	const handleMove = (event) => {
		if (event.pointerType !== 'mouse') return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		pointer.current = { x: event.clientX, y: event.clientY }
		if (!frame.current) frame.current = requestAnimationFrame(render)
	}

	const handleLeave = () => {
		cancelAnimationFrame(frame.current)
		frame.current = 0

		const element = ref.current
		element.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
		element.style.transform = ''
	}

	return (
		<div
			ref={ref}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className={`group/tilt relative hover:will-change-transform ${className}`}
		>
			{children}
			<span
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100'
				style={{
					background:
						'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.18), transparent 55%)'
				}}
			/>
		</div>
	)
}
