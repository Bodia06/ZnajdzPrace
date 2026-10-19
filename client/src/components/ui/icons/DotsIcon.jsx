export default function DotsIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 16 4'
			className={`h-1 w-4 shrink-0 ${className}`}
			fill='currentColor'
			aria-hidden='true'
		>
			<circle cx='2' cy='2' r='1.5' />
			<circle cx='8' cy='2' r='1.5' />
			<circle cx='14' cy='2' r='1.5' />
		</svg>
	)
}
