export default function MailIcon({ className = '' }) {
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
			<rect x='3' y='5' width='18' height='14' rx='3' />
			<path d='m4 7 8 6 8-6' />
		</svg>
	)
}
