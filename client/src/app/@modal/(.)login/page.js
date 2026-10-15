import AuthModal from '@/components/features/auth/AuthModal'
import { AUTH_MODES } from '@/constants'

export default function LoginModal() {
	return <AuthModal initialMode={AUTH_MODES.login} overlay />
}
