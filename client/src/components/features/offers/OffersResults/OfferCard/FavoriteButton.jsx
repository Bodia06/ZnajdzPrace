'use client'

import { useState } from 'react'
import HeartIcon from '@/components/ui/icons/HeartIcon'

export default function FavoriteButton({ initial, addLabel, removeLabel }) {
	const [active, setActive] = useState(initial)

	return (
		<button
			type='button'
			onClick={() => setActive((current) => !current)}
			aria-label={active ? removeLabel : addLabel}
			className={`flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full ring-1 transition active:scale-90 ${
				active
					? 'bg-primary-soft text-primary ring-primary/20'
					: 'bg-white text-ink ring-ink/10 hover:bg-primary-soft hover:text-primary'
			}`}
		>
			<HeartIcon filled={active} />
		</button>
	)
}
