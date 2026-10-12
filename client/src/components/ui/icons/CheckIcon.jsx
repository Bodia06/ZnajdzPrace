export default function CheckIcon({ className = '' }) {
	return (
		<span
			className={`flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-zinc-900 ${className}`}
		>
			<svg viewBox='0 0 12 12' className='size-3' fill='none' aria-hidden='true'>
				<path
					d='m2.5 6.2 2.2 2.2 4.8-4.8'
					stroke='currentColor'
					strokeWidth='1.8'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</span>
	)
}
