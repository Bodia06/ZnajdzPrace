import {
	API_ALLOWED_PROTOCOLS,
	DEFAULT_API_URL,
	DEFAULT_GEOCODING_REVERSE_URL,
	DEFAULT_GEOCODING_SEARCH_URL,
	DEFAULT_MAPS_EMBED_URL,
	DEFAULT_MAPS_SEARCH_URL
} from '@/constants'

function parseUrl(name, value) {
	const url = URL.canParse(value) ? new URL(value) : null
	if (!url || !API_ALLOWED_PROTOCOLS.includes(url.protocol)) {
		throw new Error(`${name} must be an HTTP(S) URL`)
	}

	return url.origin + url.pathname.replace(/\/+$/, '')
}

function resolveUrl(name, value, fallback) {
	const trimmed = value?.trim()
	return trimmed ? parseUrl(name, trimmed) : fallback
}

function resolveApiUrl() {
	const value = process.env.NEXT_PUBLIC_API_URL
	if (!value?.trim() && process.env.NODE_ENV === 'production') {
		throw new Error('NEXT_PUBLIC_API_URL is required in production')
	}

	return resolveUrl('NEXT_PUBLIC_API_URL', value, DEFAULT_API_URL)
}

export const API_URL = resolveApiUrl()

export const GEOCODING_SEARCH_URL = resolveUrl(
	'NEXT_PUBLIC_GEOCODING_SEARCH_URL',
	process.env.NEXT_PUBLIC_GEOCODING_SEARCH_URL,
	DEFAULT_GEOCODING_SEARCH_URL
)

export const GEOCODING_REVERSE_URL = resolveUrl(
	'NEXT_PUBLIC_GEOCODING_REVERSE_URL',
	process.env.NEXT_PUBLIC_GEOCODING_REVERSE_URL,
	DEFAULT_GEOCODING_REVERSE_URL
)

export const MAPS_EMBED_URL = resolveUrl(
	'NEXT_PUBLIC_MAPS_EMBED_URL',
	process.env.NEXT_PUBLIC_MAPS_EMBED_URL,
	DEFAULT_MAPS_EMBED_URL
)

export const MAPS_SEARCH_URL = resolveUrl(
	'NEXT_PUBLIC_MAPS_SEARCH_URL',
	process.env.NEXT_PUBLIC_MAPS_SEARCH_URL,
	DEFAULT_MAPS_SEARCH_URL
)
