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

const STATES = ['reveal-in', 'reveal-above', 'reveal-below']

const stateOf = (entry) => {
	if (entry.isIntersecting) return 'reveal-in'
	return entry.boundingClientRect.top < 0 ? 'reveal-above' : 'reveal-below'
}

const applyState = (element, entry) => {
	const state = stateOf(entry)

	element.classList.remove(...STATES)
	element.classList.add(state)
}

export default function useReveal() {
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

	return ref
}
