import { sign, verify } from 'hono/jwt'
import { z } from 'zod'
import { userRole } from '../db/schema.js'

const jwtSecret = process.env.JWT_SECRET ?? ''
if (!/^[a-f0-9]{64}$/i.test(jwtSecret)) {
	throw new Error('JWT_SECRET must be a random 32-byte key encoded as 64 hexadecimal characters')
}

const jwtOptions = { alg: 'HS256', iss: 'znajdzprace', aud: 'znajdzprace-api' } as const
const roleSchema = z.enum(userRole.enumValues)
const authClaims = z.object({ sub: z.uuid(), role: roleSchema, exp: z.number().int().positive() })

export async function verifyAuthToken(token: string | undefined) {
	if (!token) return null
	try {
		const payload = await verify(token, jwtSecret, jwtOptions)
		const result = authClaims.safeParse(payload)
		return result.success ? { id: result.data.sub, role: result.data.role } : null
	} catch {
		return null
	}
}

export async function createAuthToken(user: { id: string; role: z.infer<typeof roleSchema> }, remember: boolean) {
	const lifetime = (remember ? 24 : 1) * 60 * 60
	const issuedAt = Math.floor(Date.now() / 1000)
	const token = await sign({
		iss: jwtOptions.iss,
		aud: jwtOptions.aud,
		sub: user.id,
		role: user.role,
		iat: issuedAt,
		exp: issuedAt + lifetime
	}, jwtSecret, jwtOptions.alg)

	return { token, maxAge: remember ? lifetime : undefined }
}
