export default function ChevronDownIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 16 16'
			className={`size-3 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='m3 6 5 5 5-5'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
