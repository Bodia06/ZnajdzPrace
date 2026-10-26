'use client'

import { useState } from 'react'
import { AUTH_MODES, AUTH_PATHS } from '@/constants'

export default function useAuthMode(initialMode) {
	const [mode, setMode] = useState(initialMode)

	const switchTo = (next) => {
		setMode(next)
		window.history.replaceState(null, '', AUTH_PATHS[next])
	}

	return {
		mode,
		isLogin: mode === AUTH_MODES.login,
		toLogin: () => switchTo(AUTH_MODES.login),
		toRegister: () => switchTo(AUTH_MODES.register)
	}
}
