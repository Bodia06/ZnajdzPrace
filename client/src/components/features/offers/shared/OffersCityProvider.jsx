'use client'

import { useState } from 'react'
import { OffersCityContext } from '@/hooks/offers/useOffersCity'

export default function OffersCityProvider({ initialCity, children }) {
	const [city, setCity] = useState(initialCity)

	return <OffersCityContext value={{ city, setCity }}>{children}</OffersCityContext>
}
