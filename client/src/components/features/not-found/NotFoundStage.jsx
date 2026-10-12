'use client'

import { usePointerParallax } from '@/hooks'

export default function NotFoundStage({ children }) {
	const ref = usePointerParallax()

	return (
		<section
			ref={ref}
			aria-labelledby='not-found-title'
			className='dot-grid relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-ink px-4 py-12 font-(family-name:--font-jakarta) text-white sm:px-10 sm:py-16 lg:py-24'
		>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -top-24 -left-24 size-72 animate-float rounded-full bg-primary/35 blur-3xl [animation-duration:9s] motion-reduce:animate-none sm:size-96'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -right-24 bottom-24 size-72 animate-float rounded-full bg-accent/15 blur-3xl [animation-delay:-4s] [animation-duration:11s] motion-reduce:animate-none sm:size-96'
			/>
			{children}
		</section>
	)
}
