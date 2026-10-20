'use client'

import { useState } from 'react'

import ColorPicker from './ColorPicker'
import CvPreview from './CvPreview'
import ToolCard from '@/components/features/home/Tools/shared/ToolCard'
import ToolLink from '@/components/features/home/Tools/shared/ToolLink'

export default function CvGeneratorCard({ item, className }) {
	const { badge, title, colorsLabel, colors, preview, button } = item
	const [colorId, setColorId] = useState(colors[0].id)
	const { value: color } = colors.find(({ id }) => id === colorId)

	return (
		<ToolCard
			tone='light'
			badge={badge}
			title={title}
			className={className}
			control={
				<ColorPicker label={colorsLabel} colors={colors} value={colorId} onChange={setColorId} />
			}
		>
			<div className='mt-5 flex flex-1 flex-col'>
				<p className='sr-only'>
					{preview.name}, {preview.role}
				</p>
				<CvPreview item={preview} color={color} />
			</div>
			<ToolLink href={button.link} className='mt-5'>
				{button.title}
			</ToolLink>
		</ToolCard>
	)
}
