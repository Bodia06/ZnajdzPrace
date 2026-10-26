export default function HomeIcon({ className = '' }) {
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
			<path d='m3 11 9-8 9 8' />
			<path d='M5 10v10h14V10M10 20v-6h4v6' />
		</svg>
	)
}
