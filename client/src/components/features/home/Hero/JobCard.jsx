export default function JobCard({ item }) {
	const { logo, title, company, location, tags, salary, button } = item

	return (
		<div className='relative z-10 animate-float motion-reduce:animate-none rotate-[2.5deg] rounded-3xl bg-white p-4 sm:rounded-[28px] sm:p-6 text-ink 2xl:p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]'>
			<div className='flex items-center gap-3'>
				<span className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-base sm:size-12 sm:rounded-2xl sm:text-lg font-extrabold text-primary'>
					{logo}
				</span>
				<div className='min-w-0'>
					<p className='truncate text-[15px] leading-tight sm:text-[17px] 2xl:text-xl font-extrabold'>
						{title}
					</p>
					<p className='mt-0.5 truncate text-xs sm:text-[13px] font-medium text-[#6b6d82] 2xl:text-sm'>
						{company} · {location}
					</p>
				</div>
			</div>
			<div className='mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2'>
				{tags.map(({ id, text, accent }) => (
					<span
						key={id}
						className={`rounded-full px-3 py-1 text-[11px] sm:px-3.5 sm:py-1.5 sm:text-xs font-bold 2xl:text-sm ${
							accent ? 'bg-primary-soft text-primary' : 'bg-[#efeff4] text-ink'
						}`}
					>
						{text}
					</span>
				))}
			</div>
			<div className='mt-3 flex items-center sm:mt-5 justify-between'>
				<p className='text-base font-extrabold tracking-tight sm:text-lg 2xl:text-2xl'>{salary}</p>
				<span className='rounded-full bg-primary px-5 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-[13px] 2xl:text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(87,83,240,0.7)]'>
					{button}
				</span>
			</div>
		</div>
	)
}
