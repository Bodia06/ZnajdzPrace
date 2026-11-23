import { randomUUID } from 'node:crypto'
import { eq, lte } from 'drizzle-orm'
import { sign, verify } from 'hono/jwt'
import { z } from 'zod'
import { db } from '../db/index.js'
import { revokedTokens, userRole } from '../db/schema.js'

const jwtSecret = process.env.JWT_SECRET ?? ''
if (!/^[a-f0-9]{64}$/i.test(jwtSecret)) {
	throw new Error('JWT_SECRET must be a random 32-byte key encoded as 64 hexadecimal characters')
}

const jwtOptions = { alg: 'HS256', iss: 'znajdzprace', aud: 'znajdzprace-api' } as const
const roleSchema = z.enum(userRole.enumValues)
const authClaims = z.object({ sub: z.uuid(), role: roleSchema, jti: z.uuid(), exp: z.number().int().positive() })

async function readAuthClaims(token: string | undefined) {
	if (!token) return null
	try {
		const payload = await verify(token, jwtSecret, jwtOptions)
		const result = authClaims.safeParse(payload)
		return result.success ? result.data : null
	} catch {
		return null
	}
}

export async function verifyAuthToken(token: string | undefined) {
	const claims = await readAuthClaims(token)
	if (!claims) return null

	const [revoked] = await db.select({ jti: revokedTokens.jti })
		.from(revokedTokens)
		.where(eq(revokedTokens.jti, claims.jti))
	return revoked ? null : { id: claims.sub, role: claims.role }
}

export async function revokeAuthToken(token: string | undefined) {
	const claims = await readAuthClaims(token)
	if (!claims) return

	await db.transaction(async (tx) => {
		await tx.insert(revokedTokens)
			.values({ jti: claims.jti, expiresAt: new Date(claims.exp * 1000) })
			.onConflictDoNothing({ target: revokedTokens.jti })
		await tx.delete(revokedTokens).where(lte(revokedTokens.expiresAt, new Date()))
	})
}

export async function createAuthToken(user: { id: string; role: z.infer<typeof roleSchema> }, remember: boolean) {
	const lifetime = (remember ? 24 : 1) * 60 * 60
	const issuedAt = Math.floor(Date.now() / 1000)
	const token = await sign({
		iss: jwtOptions.iss,
		aud: jwtOptions.aud,
		sub: user.id,
		role: user.role,
		jti: randomUUID(),
		iat: issuedAt,
		exp: issuedAt + lifetime
	}, jwtSecret, jwtOptions.alg)

	return { token, maxAge: remember ? lifetime : undefined }
}
