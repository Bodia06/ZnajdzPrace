export const clientOrigin = process.env.CLIENT_ORIGIN ?? 'http://localhost:3000'
const originUrl = new URL(clientOrigin)

if (!['http:', 'https:'].includes(originUrl.protocol) || originUrl.origin !== clientOrigin) {
	throw new Error('CLIENT_ORIGIN must be an HTTP(S) origin without a path or trailing slash')
}
