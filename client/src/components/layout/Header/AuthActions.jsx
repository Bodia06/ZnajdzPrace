'use client'

import UserMenu from '@/components/layout/Header/UserMenu'
import UserPanel from '@/components/layout/Header/UserPanel'
import Button from '@/components/ui/Button'
import { AUTH_ITEMS } from '@/constants'
import { useAuth } from '@/hooks'

export default function AuthActions({ mobile = false, buttonClassName = '', onAction }) {
	const { user, ready, signOut } = useAuth()

	if (!ready) return null

	if (user) {
		const handleSignOut = () => {
			onAction?.()
			signOut()
		}

		return mobile ? (
			<UserPanel onSignOut={handleSignOut} onNavigate={onAction} />
		) : (
			<UserMenu onSignOut={handleSignOut} />
		)
	}

	return AUTH_ITEMS.map((item) => (
		<Button
			key={item.id}
			href={item.link}
			variant={item.variant}
			onClick={onAction}
			className={buttonClassName}
		>
			{item.name}
		</Button>
	))
}
