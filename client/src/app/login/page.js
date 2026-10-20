import HomePage from '@/app/page'
import AuthModal from '@/components/features/auth'
import { AUTH_DATA, AUTH_MODES } from '@/constants'

export const metadata = {
	title: AUTH_DATA.meta.login
}

export default function LoginPage() {
	return (
		<>
			<HomePage />
			<AuthModal initialMode={AUTH_MODES.login} />
		</>
	)
}
