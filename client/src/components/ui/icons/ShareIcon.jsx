export default function ShareIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 20 20'
			className={`size-5 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<circle cx='5' cy='10' r='2.2' stroke='currentColor' strokeWidth='1.6' />
			<circle cx='15' cy='5' r='2.2' stroke='currentColor' strokeWidth='1.6' />
			<circle cx='15' cy='15' r='2.2' stroke='currentColor' strokeWidth='1.6' />
			<path d='m7 9 6-3m-6 5 6 3' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' />
		</svg>
	)
}
