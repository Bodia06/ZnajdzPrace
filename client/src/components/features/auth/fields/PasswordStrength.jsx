import { MAX_PASSWORD_STRENGTH } from '@/lib/auth/password'

export default function PasswordStrength({ level, labels }) {
	return (
		<>
			<span aria-hidden='true' className='mt-1 flex gap-1'>
				{Array.from({ length: MAX_PASSWORD_STRENGTH }, (_, index) => (
					<span
						key={index}
						className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
							index < level ? 'bg-primary' : 'bg-ink/10'
						}`}
					/>
				))}
			</span>
			<span aria-live='polite' className='text-xs font-semibold text-primary'>
				{labels[level]}
			</span>
		</>
	)
}
