import { sql } from 'drizzle-orm'
import { db, pool } from './index.js'

try {
	await db.execute(sql`select 1`)
	console.log('Database connection successful')
} catch (error) {
	console.error('Database connection failed:', error)
	process.exitCode = 1
} finally {
	await pool.end()
}
