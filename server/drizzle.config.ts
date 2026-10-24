import { existsSync } from 'node:fs'
import { defineConfig } from 'drizzle-kit'
import { getDatabaseUrl } from './src/db/config.ts'

if (existsSync('.env')) process.loadEnvFile('.env')

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/db/schema.ts',
	out: './drizzle',
	dbCredentials: { url: getDatabaseUrl() }
})
