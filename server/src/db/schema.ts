import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const offers = pgTable('offers', {
	id: uuid().defaultRandom().primaryKey(),
	title: text().notNull(),
	company: text().notNull(),
	description: text().notNull(),
	requirements: text().notNull(),
	location: text().notNull(),
	contractType: text('contract_type').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
})
