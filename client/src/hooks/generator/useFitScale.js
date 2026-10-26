'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { GENERATOR_CONTAIN_QUERY } from '@/constants'

export default function useFitScale(designWidth, designHeight) {
	const ref = useRef(null)
	const [scale, setScale] = useState(1)

	useLayoutEffect(() => {
		const element = ref.current
		if (!element) return

		const media = window.matchMedia(GENERATOR_CONTAIN_QUERY)
		const measure = () => {
			const byWidth = element.clientWidth / designWidth
			const byHeight = element.clientHeight / designHeight
			setScale(media.matches && byHeight > 0 ? Math.min(byWidth, byHeight) : byWidth)
		}
		measure()

		const observer = new ResizeObserver(measure)
		observer.observe(element)
		media.addEventListener('change', measure)

		return () => {
			observer.disconnect()
			media.removeEventListener('change', measure)
		}
	}, [designWidth, designHeight])

	return { ref, scale }
}
