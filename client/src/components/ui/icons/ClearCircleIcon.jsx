export default function ClearCircleIcon({ className = '' }) {
	return (
		<svg viewBox='0 0 20 20' className={`shrink-0 ${className}`} aria-hidden='true'>
			<circle cx='10' cy='10' r='10' fill='currentColor' />
			<path
				d='m6.8 6.8 6.4 6.4m0-6.4-6.4 6.4'
				stroke='white'
				strokeWidth='1.8'
				strokeLinecap='round'
			/>
		</svg>
	)
}
