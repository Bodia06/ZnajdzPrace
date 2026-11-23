import { sql } from 'drizzle-orm'
import { date, doublePrecision, index, integer, jsonb, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

export const userRole = pgEnum('user_role', ['candidate', 'employer'])

export const users = pgTable(
	'users',
	{
		id: uuid().defaultRandom().primaryKey(),
		email: text().notNull(),
		passwordHash: text('password_hash').notNull(),
		role: userRole().notNull(),
		firstName: text('first_name'),
		lastName: text('last_name'),
		companyName: text('company_name'),
		nip: text(),
		createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
	},
	(table) => [uniqueIndex('users_email_unique').on(sql`lower(${table.email})`)]
)

export const revokedTokens = pgTable(
	'revoked_tokens',
	{
		jti: uuid().primaryKey(),
		expiresAt: timestamp('expires_at', { withTimezone: true }).notNull()
	},
	(table) => [index('revoked_tokens_expires_at_idx').on(table.expiresAt)]
)

export type OfferSkill = { name: string; required: boolean; years?: number }

export const offers = pgTable('offers', {
	id: uuid().defaultRandom().primaryKey(),
	employerId: uuid('employer_id').references(() => users.id),
	title: text().notNull(),
	company: text().notNull(),
	description: text().notNull(),
	requirements: text().notNull(),
	location: text().notNull(),
	address: text(),
	latitude: doublePrecision(),
	longitude: doublePrecision(),
	contracts: text().array().notNull().default([]),
	mode: text(),
	levels: text().array().notNull().default([]),
	salaryContract: text('salary_contract'),
	workload: text(),
	salaryFrom: integer('salary_from'),
	salaryTo: integer('salary_to'),
	validUntil: date('valid_until'),
	tags: text().array().notNull().default([]),
	duties: text().array().notNull().default([]),
	benefits: text().array().notNull().default([]),
	recruitment: text().array().notNull().default([]),
	skills: jsonb().$type<OfferSkill[]>().notNull().default([]),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
})
