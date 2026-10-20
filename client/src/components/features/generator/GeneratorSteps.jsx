import TickIcon from '@/components/ui/icons/TickIcon'

const STATE = {
	active: 'bg-ink text-white',
	done: 'text-emerald-800',
	todo: 'text-muted'
}

const BADGE = {
	active: 'bg-accent text-ink',
	done: 'bg-emerald-100 text-emerald-700',
	todo: 'bg-page text-muted'
}

const BAR = {
	active: 'bg-ink',
	done: 'bg-emerald-500',
	todo: 'bg-ink/10'
}

const stateOf = (step) => {
	if (step.active) return 'active'
	return step.done ? 'done' : 'todo'
}

export default function GeneratorSteps({ label, steps }) {
	const current = steps.find((step) => step.active)
	const activeIndex = steps.findIndex((step) => step.active)

	return (
		<nav
			aria-label={label}
			className='flex flex-col rounded-3xl bg-white p-1.5 shadow-sm ring-1 ring-ink/5 min-[900px]:p-2 print:hidden'
		>
			<div className='flex flex-col gap-1 px-3 pt-2.5 pb-1 min-[900px]:hidden'>
				<p className='flex items-baseline justify-between gap-3'>
					<strong className='truncate text-base font-extrabold text-ink'>{current?.label}</strong>
					<span className='shrink-0 text-sm font-bold text-muted'>
						{activeIndex + 1}/{steps.length}
					</span>
				</p>
				<ol className='flex gap-1.5'>
					{steps.map((step, index) => (
						<li
							key={step.id}
							aria-current={step.active ? 'step' : undefined}
							className='flex-1 py-3'
						>
							<span className='sr-only'>{step.label}</span>
							<span
								aria-hidden='true'
								className={`block h-1.5 w-full rounded-full transition-colors duration-500 ${BAR[stateOf(step)]}`}
							/>
						</li>
					))}
				</ol>
			</div>
			<ol className='hidden items-center gap-1 min-[900px]:flex'>
				{steps.map((step, index) => {
					const state = stateOf(step)

					return (
						<li
							key={step.id}
							aria-current={step.active ? 'step' : undefined}
							className={`flex h-12 min-w-0 grow items-center gap-2.5 rounded-2xl px-4 text-sm font-bold transition-colors duration-300 ${STATE[state]}`}
						>
							<span
								className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold transition-colors duration-300 ${BADGE[state]}`}
							>
								{step.done ? <TickIcon className='size-3.5 motion-safe:animate-pop' /> : index + 1}
							</span>
							<span className='min-w-0 truncate'>{step.label}</span>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
