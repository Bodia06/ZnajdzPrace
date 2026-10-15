export default function DownloadIcon({ className = '' }) {
	return (
		<svg
			viewBox='0 0 16 16'
			className={`size-4 shrink-0 ${className}`}
			fill='none'
			aria-hidden='true'
		>
			<path
				d='M8 2v8m0 0L4.8 6.8M8 10l3.2-3.2M2.5 13.5h11'
				stroke='currentColor'
				strokeWidth='1.8'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
