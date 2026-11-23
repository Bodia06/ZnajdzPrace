export default function LogoutIcon({ className = '' }) {
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
			<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
			<path d='m16 17 5-5-5-5' />
			<path d='M21 12H9' />
		</svg>
	)
}
