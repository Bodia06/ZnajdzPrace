import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { getDatabaseUrl } from './config.js'

export const pool = new Pool({
	connectionString: getDatabaseUrl(),
	connectionTimeoutMillis: 5000
})

pool.on('error', (error) => {
	console.error('Unexpected database connection error:', error)
})

export const db = drizzle({ client: pool })
