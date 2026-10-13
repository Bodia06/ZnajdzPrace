'use client'

import { useTilt } from '@/hooks'

export default function Tilt({ className = '', children }) {
	const { ref, handlers } = useTilt()

	return (
		<div
			ref={ref}
			{...handlers}
			className={`group/tilt relative hover:will-change-transform ${className}`}
		>
			{children}
			<span
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100 md:block'
				style={{
					background:
						'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgb(255 255 255 / 0.18), transparent 55%)'
				}}
			/>
		</div>
	)
}
