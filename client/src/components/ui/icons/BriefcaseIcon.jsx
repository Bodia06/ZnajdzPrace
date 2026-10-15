export default function BriefcaseIcon({ className = '' }) {
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
			<rect x='3' y='7' width='18' height='13' rx='2' />
			<path d='M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2' />
		</svg>
	)
}
