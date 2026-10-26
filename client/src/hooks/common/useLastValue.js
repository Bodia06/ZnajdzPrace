'use client'

import { useState } from 'react'

export default function useLastValue(value) {
	const [last, setLast] = useState(value)

	if (value && value !== last) setLast(value)

	return last
}
