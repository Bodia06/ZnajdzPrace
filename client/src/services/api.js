const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function api(path, { method = 'GET', body, headers, ...options } = {}) {
	const res = await fetch(`${API_URL}${path}`, {
		method,
		headers: { 'Content-Type': 'application/json', ...headers },
		body: body ? JSON.stringify(body) : undefined,
		...options
	})

	if (!res.ok) {
		const error = new Error(`Request failed: ${res.status} ${res.statusText}`)
		error.status = res.status
		throw error
	}

	return res.status === 204 ? null : res.json()
}
