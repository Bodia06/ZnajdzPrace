export const clientOrigins = (process.env.CLIENT_ORIGIN ?? 'http://localhost:3000')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean)

for (const clientOrigin of clientOrigins) {
	const originUrl = new URL(clientOrigin)

	if (!['http:', 'https:'].includes(originUrl.protocol) || originUrl.origin !== clientOrigin) {
		throw new Error('CLIENT_ORIGIN must be a comma-separated list of HTTP(S) origins without a path or trailing slash')
	}
}
