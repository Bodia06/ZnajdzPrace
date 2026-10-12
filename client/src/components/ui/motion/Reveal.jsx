'use client'

import { useEffect, useRef } from 'react'

const handlers = new WeakMap()
let observer

const getObserver = () => {
	observer ??= new IntersectionObserver(
		(entries) => entries.forEach((entry) => handlers.get(entry.target)?.(entry)),
		{ threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
	)
	return observer
}

const applyState = (element, entry) => {
	const state = entry.isIntersecting
		? 'is-visible'
		: entry.boundingClientRect.top < 0
			? 'is-above'
			: ''

	element.classList.remove('is-visible', 'is-above')
	if (state) element.classList.add(state)
}

export default function Reveal({ children, className = '' }) {
	const ref = useRef(null)

	useEffect(() => {
		const element = ref.current
		const io = getObserver()

		handlers.set(element, (entry) => applyState(element, entry))
		io.observe(element)

		return () => {
			io.unobserve(element)
			handlers.delete(element)
		}
	}, [])

	return (
		<div ref={ref} className={`reveal ${className}`}>
			{children}
		</div>
	)
}
