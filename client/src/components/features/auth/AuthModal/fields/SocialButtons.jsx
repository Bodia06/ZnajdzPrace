export default function SocialButtons({ divider, providers }) {
	return (
		<>
			<div className='flex items-center gap-3 text-xs font-semibold text-muted'>
				<span aria-hidden='true' className='h-px flex-1 bg-ink/10' />
				{divider}
				<span aria-hidden='true' className='h-px flex-1 bg-ink/10' />
			</div>
			<div className='grid grid-cols-2 gap-2.5'>
				{providers.map((provider) => (
					<button
						key={provider}
						type='button'
						className='min-h-12 cursor-pointer rounded-2xl border-[1.5px] border-ink/10 bg-white text-sm font-bold text-ink transition hover:bg-page active:scale-[0.98]'
					>
						{provider}
					</button>
				))}
			</div>
		</>
	)
}
