export const DEFAULT_API_URL = 'http://localhost:4000'
export const DEFAULT_GEOCODING_SEARCH_URL = 'https://geocoding-api.open-meteo.com/v1/search'
export const DEFAULT_GEOCODING_REVERSE_URL = 'https://nominatim.openstreetmap.org/reverse'
export const DEFAULT_MAPS_EMBED_URL = 'https://maps.google.com/maps'
export const DEFAULT_MAPS_SEARCH_URL = 'https://www.google.com/maps/search/'
export const API_ALLOWED_PROTOCOLS = ['http:', 'https:']
export const API_TIMEOUT_MS = 10_000

export const HTTP_STATUS = {
	badRequest: 400,
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	badGateway: 502
}
