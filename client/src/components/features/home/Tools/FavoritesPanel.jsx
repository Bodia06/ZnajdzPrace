'use client'

import { useState } from 'react'

import HeartIcon from '@/components/ui/HeartIcon'
import ToolPanel from './ToolPanel'

export default function FavoritesPanel({ item }) {
	const { title, label, empty, saved } = item
	const [active, setActive] = useState(false)

	return (
		<ToolPanel title={title} className='items-start gap-3'>
			<button
				type='button'
				aria-pressed={active}
				aria-label={label}
				onClick={() => setActive((prev) => !prev)}
				className={`flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors ${
					active ? 'bg-primary text-white' : 'bg-page text-ink hover:bg-primary-soft'
				}`}
			>
				<HeartIcon filled={active} />
			</button>
			<p className='text-sm font-bold text-ink'>{active ? saved : empty}</p>
		</ToolPanel>
	)
}
