'use client'

import { useState } from 'react'

export default function useAccordion(defaultOpenId = null) {
	const [openId, setOpenId] = useState(defaultOpenId)

	const isOpen = (id) => id === openId
	const toggle = (id) => setOpenId((current) => (current === id ? null : id))

	return { isOpen, toggle }
}
