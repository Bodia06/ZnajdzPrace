const LINE = 'block h-0.5 rounded-full'

export default function CvPreview({ item, color }) {
	const { initials, name, role } = item

	return (
		<div className='flex flex-1 items-end justify-center rounded-2xl bg-page px-4 pt-6 sm:pt-8'>
			<div
				aria-hidden='true'
				className='flex h-56 w-44 overflow-hidden rounded-t-md bg-white shadow-[0_12px_30px_-10px_rgba(14,15,26,0.3)] sm:h-64 sm:w-56'
			>
				<div
					className='w-[34%] shrink-0 space-y-1.5 p-2.5 transition-colors duration-300 motion-reduce:transition-none'
					style={{ backgroundColor: color }}
				>
					<span className='mb-1.5 flex size-8 items-center justify-center rounded-full bg-white/25 text-[10px] font-extrabold text-white'>
						{initials}
					</span>
					<span className={`${LINE} w-full bg-white/40`} />
					<span className={`${LINE} w-3/4 bg-white/40`} />
					<span className={`${LINE} w-2/3 bg-white/40`} />
				</div>
				<div className='flex-1 space-y-1.5 p-3'>
					<div className='mb-3'>
						<p className='text-[11px] font-extrabold text-ink'>{name}</p>
						<p className='mt-0.5 text-[10px] leading-tight font-bold text-ink'>{role}</p>
					</div>
					<span className={`${LINE} w-full bg-ink/10`} />
					<span className={`${LINE} w-4/5 bg-ink/10`} />
					<span className={`${LINE} mt-3 w-1/3 bg-ink`} />
					<span className={`${LINE} w-full bg-ink/10`} />
					<span className={`${LINE} w-3/5 bg-ink/10`} />
				</div>
			</div>
		</div>
	)
}
