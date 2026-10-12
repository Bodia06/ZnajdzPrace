export default function MagnifierIcon({ className = '' }) {
	return (
		<svg viewBox='0 0 100 100' className={className} fill='none' aria-hidden='true'>
			<circle cx='44' cy='44' r='30' stroke='currentColor' strokeWidth='14' />
			<path d='m68 68 22 22' stroke='currentColor' strokeWidth='14' strokeLinecap='round' />
			<path
				d='M30 38a16 16 0 0 1 12-12'
				stroke='white'
				strokeOpacity='0.6'
				strokeWidth='5'
				strokeLinecap='round'
			/>
		</svg>
	)
}
