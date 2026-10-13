export default function PinIcon({ className = '' }) {
	return (
		<svg viewBox='0 0 20 20' className={`shrink-0 ${className}`} fill='none' aria-hidden='true'>
			<path
				d='M10 17.5s5.5-4.6 5.5-9A5.5 5.5 0 0 0 4.5 8.5c0 4.4 5.5 9 5.5 9Z'
				stroke='currentColor'
				strokeWidth='1.7'
				strokeLinejoin='round'
			/>
			<circle cx='10' cy='8.5' r='1.9' stroke='currentColor' strokeWidth='1.7' />
		</svg>
	)
}
