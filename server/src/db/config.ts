export function getDatabaseUrl() {
	const databaseUrl = process.env.DATABASE_URL ?? ''
	const url = URL.canParse(databaseUrl) ? new URL(databaseUrl) : null

	if (!url?.hostname || !['postgres:', 'postgresql:'].includes(url.protocol)) {
		throw new Error('DATABASE_URL must be a valid PostgreSQL connection URL')
	}

	return databaseUrl
}
