'use client'

import useAuth from '@/hooks/auth/useAuth'

export default function RoleGate({ role, fallback = null, children }) {
	const { user, ready } = useAuth()

	if (role == null) return children
	if (!ready) return null

	const allowed = Array.isArray(role) ? role : [role]
	return user && allowed.includes(user.role) ? children : fallback
}
