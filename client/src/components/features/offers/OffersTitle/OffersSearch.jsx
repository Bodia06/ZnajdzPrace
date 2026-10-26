'use client'

import { useEffect, useRef, useState } from 'react'
import OffersCityField from './OffersCityField'
import OffersField from './OffersField'
import ClearIcon from '@/components/ui/icons/ClearCircleIcon'
import SearchIcon from '@/components/ui/icons/SearchIcon'
import { LINKS, OFFERS_IDS } from '@/constants'
import { useOffersCity } from '@/hooks'

export default function OffersSearch({ item, initial }) {
	const { query, city, button } = item
	const [queryValue, setQueryValue] = useState(initial.query)
	const { city: cityValue, setCity: setCityValue } = useOffersCity()
	const formRef = useRef(null)

	const clearedQuery = initial.query !== '' && queryValue === ''
	const clearedCity = initial.city !== '' && cityValue === ''

	useEffect(() => {
		if (clearedQuery || clearedCity) formRef.current?.requestSubmit()
	}, [clearedQuery, clearedCity])

	return (
		<form
			ref={formRef}
			id={OFFERS_IDS.form}
			role='search'
			aria-labelledby={OFFERS_IDS.title}
			action={LINKS.OFFERS}
			className='grid grid-cols-1 gap-2 rounded-2xl bg-white p-2 shadow-[0_0_0_4px_rgba(255,255,255,0.12)] md:grid-cols-2 md:rounded-3xl lg:grid-cols-[1fr_1fr_auto]'
		>
			<OffersField
				icon={<SearchIcon className='size-4 text-primary sm:size-5' />}
				name={query.name}
				autoComplete={query.autoComplete}
				placeholder={query.placeholder}
				value={queryValue}
				onChange={setQueryValue}
				clearLabel={query.clear}
				clearIcon={<ClearIcon className='size-4' />}
			/>
			<OffersCityField item={city} value={cityValue} onChange={setCityValue} />
			<button
				type='submit'
				className='h-12 cursor-pointer rounded-xl bg-primary px-8 text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.98] sm:h-14 sm:text-base md:col-span-2 lg:col-span-1 lg:w-52'
			>
				{button}
			</button>
		</form>
	)
}
