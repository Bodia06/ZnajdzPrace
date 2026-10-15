import AuthModal from '@/components/features/auth'
import { AUTH_MODES } from '@/constants'

export default function RegistrationModal() {
	return <AuthModal initialMode={AUTH_MODES.register} overlay />
}
