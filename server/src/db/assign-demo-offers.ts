import { and, eq, inArray, isNull, or, sql } from 'drizzle-orm'
import { z } from 'zod'
import { db, pool } from './index.js'
import { offers, users } from './schema.js'

try {
	const [, , emailArg, ...offerArgs] = process.argv
	const email = z.email().safeParse(emailArg?.trim().toLowerCase())
	const offerIds = z.array(z.uuid()).nonempty().safeParse(offerArgs.map((id) => id.toLowerCase()))
	if (!email.success || !offerIds.success) {
		throw new Error('Usage: npm run db:assign-demo-offers -- <employer-email> <offer-id> [offer-id ...]')
	}

	const ids = [...new Set(offerIds.data)]

	await db.transaction(async (tx) => {
		const [employer] = await tx.select({ id: users.id }).from(users)
			.where(and(eq(sql`lower(${users.email})`, email.data), eq(users.role, 'employer')))
		if (!employer) throw new Error('Demo employer account not found')

		const assigned = await tx.update(offers).set({ employerId: employer.id })
			.where(and(inArray(offers.id, ids), or(isNull(offers.employerId), eq(offers.employerId, employer.id))))
			.returning({ id: offers.id })
		if (assigned.length !== ids.length) {
			throw new Error('At least one offer does not exist or belongs to a different employer')
		}
	})

	console.log(`Assigned ${ids.length} demo offer(s)`)
} catch (error) {
	console.error(error instanceof Error ? error.message : error)
	process.exitCode = 1
} finally {
	await pool.end()
}
