export default function HeartIcon({ filled = false, className = '' }) {
	return (
		<svg viewBox='0 0 20 20' className={`size-5 shrink-0 ${className}`} aria-hidden='true'>
			<path
				d='M10 16.5s-6-3.7-6-8.2A3.3 3.3 0 0 1 10 6.6a3.3 3.3 0 0 1 6 1.7c0 4.5-6 8.2-6 8.2Z'
				fill={filled ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeWidth='1.7'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
