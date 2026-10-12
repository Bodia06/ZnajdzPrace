export default function ArrowIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 16 16'
			className={`size-4 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M2.5 8h11m-4-4 4 4-4 4'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
