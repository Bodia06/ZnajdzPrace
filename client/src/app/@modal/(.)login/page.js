import AuthModal from '@/components/features/auth'
import { AUTH_MODES } from '@/constants'

export default function LoginModal() {
	return <AuthModal initialMode={AUTH_MODES.login} overlay />
}
