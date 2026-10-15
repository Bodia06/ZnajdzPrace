import HomePage from '../page'
import AuthModal from '@/components/features/auth'
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
