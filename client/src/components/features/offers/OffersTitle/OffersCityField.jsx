'use client'

import { useId } from 'react'
import OffersField from './OffersField'
import CitySuggestions from '@/components/ui/CitySuggestions'
import PinIcon from '@/components/ui/icons/PinIcon'
import { useCitySuggestions, useCombobox, useGeolocationCity } from '@/hooks'

export default function OffersCityField({ item, value, onChange }) {
	const id = useId()
	const listId = `${id}-list`
	const suggestions = useCitySuggestions(value)
	const { expanded, active, setActive, show, select, getInputProps } = useCombobox(
		suggestions,
		(city) => onChange(city.name)
	)
	const { request, loading } = useGeolocationCity((city) => onChange((current) => current || city))

	return (
		<OffersField
			icon={<PinIcon className='size-4 text-primary sm:size-5' />}
			name={item.name}
			autoComplete={item.autoComplete}
			placeholder={item.placeholder}
			value={value}
			onChange={(next) => {
				onChange(next)
				show()
			}}
			onFocus={() => {
				show()
				request()
			}}
			busy={loading}
			className='bg-page'
			inputProps={getInputProps(listId)}
		>
			{expanded && (
				<CitySuggestions
					id={listId}
					label={item.placeholder}
					items={suggestions}
					active={active}
					onSelect={select}
					onHover={setActive}
				/>
			)}
		</OffersField>
	)
}
