'use client'

import { useLayoutEffect, useRef, useState } from 'react'

export default function useActivePanelHeight(activeKey) {
	const panels = useRef({})
	const [height, setHeight] = useState(undefined)

	const bind = (key) => (element) => {
		if (element) panels.current[key] = element
		else delete panels.current[key]
	}

	useLayoutEffect(() => {
		const element = panels.current[activeKey]
		if (!element) return

		setHeight(element.offsetHeight)

		const observer = new ResizeObserver(() => setHeight(element.offsetHeight))
		observer.observe(element)

		return () => observer.disconnect()
	}, [activeKey])

	return { height, bind }
}
