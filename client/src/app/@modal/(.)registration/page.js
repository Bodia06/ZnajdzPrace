import AuthModal from '@/components/features/auth/AuthModal'
import { AUTH_MODES } from '@/constants'

export default function RegistrationModal() {
	return <AuthModal initialMode={AUTH_MODES.register} overlay />
}
