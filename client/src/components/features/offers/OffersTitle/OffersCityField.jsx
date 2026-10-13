'use client'

import { useState } from 'react'
import OffersField from './OffersField'
import PinIcon from '@/components/ui/icons/PinIcon'
import { useCitySuggestions, useGeolocationCity } from '@/hooks'

const LIST_ID = 'offers-city-list'

export default function OffersCityField({ item, value, onChange }) {
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState(-1)
	const suggestions = useCitySuggestions(value)
	const { request, loading } = useGeolocationCity(city => onChange(current => current || city))
	const expanded = open && suggestions.length > 0

	const change = next => {
		onChange(next)
		setActive(-1)
		setOpen(true)
	}

	const select = city => {
		onChange(city)
		setActive(-1)
		setOpen(false)
	}

	const onKeyDown = e => {
		if (e.key === 'Escape') return setOpen(false)
		if (!expanded) return

		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			e.preventDefault()
			const step = e.key === 'ArrowDown' ? 1 : -1
			setActive(i => (i + step + suggestions.length) % suggestions.length)
		} else if (e.key === 'Enter' && active >= 0) {
			e.preventDefault()
			select(suggestions[active].name)
		}
	}

	return (
		<OffersField
			icon={<PinIcon className='size-4 text-primary sm:size-5' />}
			name={item.name}
			autoComplete={item.autoComplete}
			placeholder={item.placeholder}
			value={value}
			onChange={change}
			onFocus={() => {
				setOpen(true)
				request()
			}}
			busy={loading}
			className='bg-page'
			inputProps={{
				role: 'combobox',
				'aria-expanded': expanded,
				'aria-controls': LIST_ID,
				'aria-autocomplete': 'list',
				'aria-activedescendant': active >= 0 ? `${LIST_ID}-${active}` : undefined,
				onKeyDown,
				onBlur: () => setOpen(false)
			}}
		>
			{expanded && (
				<ul
					id={LIST_ID}
					role='listbox'
					aria-label={item.placeholder}
					className='absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-xl bg-white p-1 text-ink shadow-[0_12px_32px_rgba(14,15,26,0.18)] ring-1 ring-ink/5'
				>
					{suggestions.map((city, i) => (
						<li
							key={city.id}
							id={`${LIST_ID}-${i}`}
							role='option'
							aria-selected={i === active}
							onMouseDown={e => {
								e.preventDefault()
								select(city.name)
							}}
							onMouseEnter={() => setActive(i)}
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
			)}
		</OffersField>
	)
}
