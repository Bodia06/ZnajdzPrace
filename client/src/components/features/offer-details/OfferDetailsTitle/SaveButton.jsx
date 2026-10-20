'use client'

import { useState } from 'react'
import HeartIcon from '@/components/ui/icons/HeartIcon'

export default function SaveButton({ initial, label }) {
	const [active, setActive] = useState(initial)

	return (
		<button
			type='button'
			onClick={() => setActive((current) => !current)}
			aria-pressed={active}
			aria-label={label}
			className={`flex size-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-bold ring-1 transition active:scale-95 sm:size-auto sm:h-12 sm:px-5 ${
				active
					? 'bg-primary-soft text-primary ring-primary/20'
					: 'bg-white text-ink ring-ink/10 hover:bg-primary-soft hover:text-primary'
			}`}
		>
			<HeartIcon filled={active} className='size-4' />
			<span className='hidden sm:inline'>{label}</span>
		</button>
	)
}
