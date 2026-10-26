'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { GENERATOR_SHEET_HEIGHT, GENERATOR_SHEET_WIDTH } from '@/constants'
import { CV_TEMPLATES, DEFAULT_CV_TEMPLATE } from './templates'
import { useFitScale } from '@/hooks'
import { buildPreview, colorValue } from '@/lib/cv'

export default function CvSheet({ cv, label, fixedScale }) {
	const sheetRef = useRef(null)
	const [height, setHeight] = useState(GENERATOR_SHEET_HEIGHT)
	const { ref, scale: fitted } = useFitScale(GENERATOR_SHEET_WIDTH, height)
	const scale = fixedScale ?? fitted

	useLayoutEffect(() => {
		const element = sheetRef.current
		if (!element) return

		const measure = () => setHeight(Math.max(GENERATOR_SHEET_HEIGHT, element.offsetHeight))
		measure()

		const observer = new ResizeObserver(measure)
		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	const Template = CV_TEMPLATES[cv.template] ?? DEFAULT_CV_TEMPLATE

	return (
		<div ref={ref} className='flex w-full justify-center lg:h-full lg:items-center'>
			<div
				style={{ width: GENERATOR_SHEET_WIDTH * scale, height: height * scale }}
				className='shrink-0 overflow-hidden rounded-lg shadow-[0_20px_60px_-20px_rgba(14,15,26,0.35)]'
			>
				<article
					ref={sheetRef}
					aria-label={label}
					style={{
						width: GENERATOR_SHEET_WIDTH,
						minHeight: GENERATOR_SHEET_HEIGHT,
						transform: `scale(${scale})`,
						transformOrigin: 'top left'
					}}
					className='overflow-hidden bg-white font-(family-name:--font-jakarta)'
				>
					<Template data={buildPreview(cv)} color={colorValue(cv.color)} />
				</article>
			</div>
		</div>
	)
}
