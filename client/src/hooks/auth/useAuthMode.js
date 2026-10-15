'use client'

import { useState } from 'react'
import { AUTH_MODES, LINKS } from '@/constants'

const PATHS = {
	[AUTH_MODES.login]: LINKS.LOGIN,
	[AUTH_MODES.register]: LINKS.REGISTRATION
}

export default function useAuthMode(initialMode) {
	const [mode, setMode] = useState(initialMode)

	const switchTo = (next) => {
		setMode(next)
		window.history.replaceState(null, '', PATHS[next])
	}

	return {
		mode,
		isLogin: mode === AUTH_MODES.login,
		toLogin: () => switchTo(AUTH_MODES.login),
		toRegister: () => switchTo(AUTH_MODES.register)
	}
}
