export default function UserIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 24 24'
			className={`size-5 shrink-0 ${className}`}
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			aria-hidden='true'
		>
			<circle cx='12' cy='8' r='4' />
			<path d='M4 21a8 8 0 0 1 16 0' />
		</svg>
	)
}
