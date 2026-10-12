export default function HowItWorksTitle({ badge, items, activeId }) {
	return (
		<div className='min-w-0'>
			<p className='text-xs font-bold tracking-wide text-primary uppercase'>{badge}</p>
			<div className='mt-2 grid'>
				{items.map(({ id, title }) => {
					const active = id === activeId

					return (
						<h2
							key={id}
							id={`how-it-works-title-${id}`}
							aria-hidden={!active}
							className={`col-start-1 row-start-1 max-w-4xl text-3xl text-balance leading-[1.05] font-extrabold tracking-[-0.04em] text-ink transition-[opacity,visibility] duration-300 motion-reduce:transition-none sm:text-4xl md:text-5xl 2xl:text-6xl ${
								active ? 'visible opacity-100' : 'invisible opacity-0'
							}`}
						>
							{title}
						</h2>
					)
				})}
			</div>
		</div>
	)
}
