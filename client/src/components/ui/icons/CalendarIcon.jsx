export default function CalendarIcon({ className = '' }) {
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
			<rect x='3' y='5' width='18' height='16' rx='3' />
			<path d='M8 3v4M16 3v4M3 10h18' />
		</svg>
	)
}
