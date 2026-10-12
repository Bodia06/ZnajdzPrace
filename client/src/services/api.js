const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

/** Thin fetch wrapper for talking to the backend. */
export async function api(path, { method = "GET", body, headers, ...options } = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return res.status === 204 ? null : res.json();
}
