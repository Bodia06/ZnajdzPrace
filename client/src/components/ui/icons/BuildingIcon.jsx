export default function BuildingIcon({ className = '' }) {
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
			<path d='M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16' />
			<path d='M16 10h2a2 2 0 0 1 2 2v9' />
			<path d='M2 21h20' />
			<path d='M8 7h4M8 11h4M8 15h4' />
		</svg>
	)
}
