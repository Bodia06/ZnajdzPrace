export default function ClockIcon({ className = '' }) {
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
			<circle cx='12' cy='12' r='9' />
			<path d='M12 7v5l3 2' />
		</svg>
	)
}
