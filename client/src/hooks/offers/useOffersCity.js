'use client'

import { createContext, useContext } from 'react'

export const OffersCityContext = createContext(null)

export default function useOffersCity() {
	const context = useContext(OffersCityContext)
	if (!context) throw new Error('useOffersCity must be used inside OffersCityProvider')

	return context
}
