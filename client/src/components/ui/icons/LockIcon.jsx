export default function LockIcon({ className = '' }) {
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
			<rect x='4' y='10' width='16' height='11' rx='3' />
			<path d='M8 10V7a4 4 0 0 1 8 0v3' />
		</svg>
	)
}
