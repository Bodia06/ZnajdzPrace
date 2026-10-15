export default function ExpandIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 16 16'
			className={`size-4 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M9.5 2.5h4v4m0-4L9 7M6.5 13.5h-4v-4m0 4L7 9'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
