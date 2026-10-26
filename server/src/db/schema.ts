import { date, doublePrecision, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export type OfferSkill = { name: string; required: boolean; years?: number }

export const offers = pgTable('offers', {
	id: uuid().defaultRandom().primaryKey(),
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
