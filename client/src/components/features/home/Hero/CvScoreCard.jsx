export default function CvScoreCard({ item }) {
	const { score, title, tips } = item

	return (
		<div className='relative z-20 mt-5 w-56 animate-float [animation-delay:-2s] [animation-duration:7s] motion-reduce:animate-none sm:mt-7 sm:-ml-8 sm:w-72 2xl:w-80 rotate-[-5deg] rounded-3xl bg-accent px-4 py-3 sm:rounded-[28px] sm:px-6 sm:py-5 text-ink shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]'>
			<div className='flex items-center gap-3 sm:gap-4'>
				<div
					className='flex size-12 shrink-0 sm:size-16 items-center justify-center rounded-full'
					style={{
						background: `conic-gradient(var(--color-ink) 0 ${score}%, rgb(14 15 26 / 0.15) ${score}% 100%)`
					}}
				>
					<span className='flex size-9.5 items-center justify-center rounded-full bg-accent text-sm sm:size-13 sm:text-lg font-extrabold'>
						{score}
					</span>
				</div>
				<div className='leading-tight'>
					<p className='text-sm font-extrabold sm:text-base 2xl:text-lg'>{title}</p>
					<p className='mt-0.5 text-xs font-semibold sm:text-[13px] text-ink/70 2xl:text-sm'>{tips}</p>
				</div>
			</div>
		</div>
	)
}
