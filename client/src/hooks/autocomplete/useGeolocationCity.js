'use client'

import { useRef, useState } from 'react'
import { parseCity } from '@/lib/geocoding'

const REVERSE_URL = 'https://nominatim.openstreetmap.org/reverse'

async function fetchCity({ latitude, longitude }) {
	const params = new URLSearchParams({
		format: 'jsonv2',
		lat: latitude,
		lon: longitude,
		zoom: 10,
		'accept-language': 'pl'
	})
	const res = await fetch(`${REVERSE_URL}?${params}`)
	if (!res.ok) throw new Error('reverse geocoding failed')
	return parseCity(await res.json())
}

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
			{ timeout: 10000, maximumAge: 600000 }
		)
	}

	return { request, loading }
}
