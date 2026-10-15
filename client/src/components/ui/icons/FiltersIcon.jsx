export default function FiltersIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 20 20'
			className={`size-5 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M3 6h8m4 0h2M3 14h2m4 0h8'
				stroke='currentColor'
				strokeWidth='1.7'
				strokeLinecap='round'
			/>
			<circle cx='13' cy='6' r='2' stroke='currentColor' strokeWidth='1.7' />
			<circle cx='7' cy='14' r='2' stroke='currentColor' strokeWidth='1.7' />
		</svg>
	)
}
