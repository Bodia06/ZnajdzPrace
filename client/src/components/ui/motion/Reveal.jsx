'use client'

import { useReveal } from '@/hooks'

export default function Reveal({ children, className = '' }) {
	const ref = useReveal()

	return (
		<div ref={ref} className={`reveal-below ${className}`}>
			{children}
		</div>
	)
}
