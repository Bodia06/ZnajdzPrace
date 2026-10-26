'use client'

import { useRef, useState } from 'react'
import { GEOLOCATION_OPTIONS } from '@/constants'
import { fetchCity } from '@/services/sources/geocoding'

export default function useGeolocationCity(onCity) {
	const asked = useRef(false)
	const [loading, setLoading] = useState(false)

	const request = () => {
		if (asked.current) return
		if (!window.isSecureContext || !('geolocation' in navigator)) return
		asked.current = true
		setLoading(true)

		navigator.geolocation.getCurrentPosition(
			async ({ coords }) => {
				try {
					const city = await fetchCity(coords)
					if (city) onCity(city)
				} catch {
				} finally {
					setLoading(false)
				}
			},
			() => setLoading(false),
			GEOLOCATION_OPTIONS
		)
	}

	return { request, loading }
}
