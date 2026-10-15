'use client'

import { useState } from 'react'

export default function usePasswordVisibility() {
	const [visible, setVisible] = useState(false)

	return {
		visible,
		type: visible ? 'text' : 'password',
		toggle: () => setVisible((current) => !current)
	}
}
