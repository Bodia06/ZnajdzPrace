import { API_URL } from '@/config'

export const dynamic = 'force-dynamic'

// The API sets a `Secure` `__Host-` cookie, which browsers such as Safari refuse to store
// on plain-http localhost. This proxy keeps the browser on the app's own origin and, only
// when the app is not served over https, stores that cookie under a local name without `Secure`.
const SERVER_COOKIE = '__Host-session'
const LOCAL_COOKIE = 'session'

const isSecure = (request) =>
	request.headers.get('x-forwarded-proto') === 'https' || new URL(request.url).protocol === 'https:'

const toServerCookie = (cookie) =>
	cookie
		.split(/;\s*/)
		.map((part) =>
			part.startsWith(`${LOCAL_COOKIE}=`) ? `${SERVER_COOKIE}=${part.slice(LOCAL_COOKIE.length + 1)}` : part
		)
		.join('; ')

const toLocalSetCookie = (setCookie) =>
	setCookie.replace(`${SERVER_COOKIE}=`, `${LOCAL_COOKIE}=`).replace(/;\s*Secure/gi, '')

async function proxy(request, { params }) {
	const { path } = await params
	if (path.some((segment) => segment === '.' || segment === '..')) {
		return Response.json({ error: 'Not found' }, { status: 404 })
	}
	const secure = isSecure(request)
	const target = `${API_URL}/auth/${path.map(encodeURIComponent).join('/')}`

	const headers = new Headers()
	for (const name of ['accept', 'content-type']) {
		const value = request.headers.get(name)
		if (value) headers.set(name, value)
	}
	const cookie = request.headers.get('cookie')
	if (cookie) headers.set('cookie', secure ? cookie : toServerCookie(cookie))

	let upstream
	try {
		upstream = await fetch(target, {
			method: request.method,
			headers,
			body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.text(),
			redirect: 'manual',
			cache: 'no-store'
		})
	} catch {
		return Response.json({ error: 'Server is unreachable' }, { status: 502 })
	}

	const responseHeaders = new Headers()
	for (const name of ['content-type', 'cache-control']) {
		const value = upstream.headers.get(name)
		if (value) responseHeaders.set(name, value)
	}
	for (const setCookie of upstream.headers.getSetCookie()) {
		responseHeaders.append('set-cookie', secure ? setCookie : toLocalSetCookie(setCookie))
	}

	return new Response(upstream.status === 204 ? null : upstream.body, {
		status: upstream.status,
		headers: responseHeaders
	})
}

export { proxy as GET, proxy as POST }
