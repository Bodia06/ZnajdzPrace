import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
	{ ignores: ['dist/**'] },
	js.configs.recommended,
	tseslint.configs.recommended,
	{ languageOptions: { globals: { process: 'readonly', console: 'readonly' } } }
)
