export function validate(schema, input) {
	const result = schema.safeParse(input)
	if (result.success) return { data: result.data, errors: {} }

	const errors = {}
	for (const issue of result.error.issues) {
		errors[issue.path[0]] ??= issue.message
	}
	return { data: null, errors }
}
