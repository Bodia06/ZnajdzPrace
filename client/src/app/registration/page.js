import HomePage from '../page'
import AuthModal from '@/components/features/auth/AuthModal'
import { AUTH_DATA, AUTH_MODES } from '@/constants'

export const metadata = {
	title: AUTH_DATA.meta.register
}

export default function RegistrationPage() {
	return (
		<>
			<HomePage />
			<AuthModal initialMode={AUTH_MODES.register} />
		</>
	)
}
