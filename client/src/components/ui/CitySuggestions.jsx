'use client'

import { useEffect, useRef } from 'react'

export default function CitySuggestions({ id, label, items, active, onSelect, onHover }) {
	const listRef = useRef(null)

	useEffect(() => {
		const list = listRef.current
		const item = list?.children[active]
		if (!item) return

		const top = item.offsetTop
		const bottom = top + item.offsetHeight
		if (top < list.scrollTop) list.scrollTop = top
		else if (bottom > list.scrollTop + list.clientHeight)
			list.scrollTop = bottom - list.clientHeight
	}, [active])

	return (
		<ul
			ref={listRef}
			id={id}
			role='listbox'
			aria-label={label}
			className='absolute inset-x-0 top-full z-20 mt-2 max-h-60 overflow-y-auto overscroll-contain rounded-xl bg-white p-1 text-ink shadow-[0_12px_32px_rgba(14,15,26,0.18)] ring-1 ring-ink/5 motion-safe:animate-fade-down'
		>
			{items.map((city, i) => (
				<li
					key={city.id}
					id={`${id}-${i}`}
					role='option'
					aria-selected={i === active}
					onMouseDown={(e) => {
						e.preventDefault()
						onSelect(city)
					}}
					onMouseEnter={() => onHover(i)}
					className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm font-semibold sm:text-base ${
						i === active ? 'bg-primary-soft text-primary' : ''
					}`}
				>
					{city.name}
					{city.region && (
						<span className='ml-2 text-xs font-medium text-muted'>{city.region}</span>
					)}
				</li>
			))}
		</ul>
	)
}
