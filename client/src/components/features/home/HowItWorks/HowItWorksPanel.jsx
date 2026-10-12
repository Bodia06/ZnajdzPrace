import HowItWorksStep from './HowItWorksStep'

export default function HowItWorksPanel({ id, steps, selected }) {
	return (
		<div
			id={`panel-${id}`}
			role='tabpanel'
			aria-labelledby={`tab-${id}`}
			aria-hidden={!selected}
			inert={!selected}
			className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
				selected ? 'visible opacity-100' : 'invisible opacity-0'
			}`}
		>
			<ol className='grid h-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4'>
				{steps.map((step, index) => (
					<HowItWorksStep key={step.id} item={step} number={index + 1} />
				))}
			</ol>
		</div>
	)
}
