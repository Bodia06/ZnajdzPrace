export default function SparkIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 20 20'
			className={`size-5 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M10 2.5c.4 3.9 2.1 5.6 6 6-3.9.4-5.6 2.1-6 6-.4-3.9-2.1-5.6-6-6 3.9-.4 5.6-2.1 6-6Z'
				stroke='currentColor'
				strokeWidth='1.6'
				strokeLinejoin='round'
			/>
			<path
				d='M15.5 14.2c.15 1.4.75 2 2.1 2.1-1.35.15-1.95.75-2.1 2.1-.15-1.35-.75-1.95-2.1-2.1 1.35-.1 1.95-.7 2.1-2.1Z'
				fill='currentColor'
			/>
		</svg>
	)
}
