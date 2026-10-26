import { API_URL } from '@/config'
import { API_TIMEOUT_MS } from '@/constants'

export class ApiError extends Error {
	constructor(message, { status = 0, details } = {}) {
		super(message)
		this.name = 'ApiError'
		this.status = status
		this.details = details
	}

	get isNetwork() {
		return this.status === 0
	}
}

const readJson = (res) => res.json().catch(() => null)

export async function api(path, { method = 'GET', body, headers, signal, ...options } = {}) {
	const timeout = AbortSignal.timeout(API_TIMEOUT_MS)
	let res

	try {
		res = await fetch(`${API_URL}${path}`, {
			method,
			headers: {
				Accept: 'application/json',
				...(body !== undefined && { 'Content-Type': 'application/json' }),
				...headers
			},
			body: body === undefined ? undefined : JSON.stringify(body),
			signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
			...options
		})
	} catch (error) {
		if (signal?.aborted) throw error
		const reason = timeout.aborted ? 'Request timed out' : 'Server is unreachable'
		throw new ApiError(reason, { details: error })
	}

	if (!res.ok) {
		const data = await readJson(res)
		throw new ApiError(data?.error ?? `Request failed: ${res.status} ${res.statusText}`, {
			status: res.status,
			details: data?.details
		})
	}

	return res.status === 204 ? null : readJson(res)
}
