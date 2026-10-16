import {
  check,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const userRole = pgEnum('user_role', ['candidate', 'employer'])

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    role: userRole('role').notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    firstName: varchar('first_name', { length: 100 }),
    lastName: varchar('last_name', { length: 100 }),
    companyName: varchar('company_name', { length: 255 }),
    nip: varchar('nip', { length: 10 }).unique(),
    termsAcceptedAt: timestamp('terms_accepted_at').notNull().defaultNow(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
  },
  table => [
    check(
      'users_role_fields',
      sql`(${table.role} = 'candidate' AND ${table.firstName} IS NOT NULL AND ${table.lastName} IS NOT NULL)
					OR (${table.role} = 'employer' AND ${table.companyName} IS NOT NULL AND ${table.nip} IS NOT NULL)`
    )
  ]
)
