export default function OfferDetailsRecruitment({ steps, labels }) {
	if (steps.length === 0) return null

	return (
		<section className='rounded-3xl bg-white p-5 font-(family-name:--font-jakarta) shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5 sm:p-6'>
			<h2 className='text-base font-extrabold tracking-tight text-ink'>{labels.title}</h2>
			<ol className='mt-4 flex flex-col gap-3.5'>
				{steps.map((step, index) => (
					<li key={step} className='flex items-center gap-3 text-sm font-medium text-ink/80'>
						<span className='flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-extrabold text-accent'>
							{index + 1}
						</span>
						{step}
					</li>
				))}
			</ol>
		</section>
	)
}
