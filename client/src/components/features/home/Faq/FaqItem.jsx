import MinusIcon from '@/components/ui/MinusIcon'
import PlusIcon from '@/components/ui/PlusIcon'

export default function FaqItem({ item, open, onToggle, ghost = false }) {
	const { id, question, answer } = item
	const ref = (name) => (ghost ? undefined : `faq-${name}-${id}`)
	const Icon = open ? MinusIcon : PlusIcon

	return (
		<li className='rounded-3xl bg-white'>
			<h3>
				<button
					type='button'
					id={ref('question')}
					aria-expanded={open}
					aria-controls={ref('answer')}
					onClick={onToggle}
					className='flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-sm font-extrabold text-balance text-ink sm:px-6 sm:text-base'
				>
					<span>{question}</span>
					<span
						aria-hidden='true'
						className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
							open ? 'bg-primary text-white' : 'bg-page text-ink'
						}`}
					>
						<Icon />
					</span>
				</button>
			</h3>
			<div
				id={ref('answer')}
				role='region'
				aria-labelledby={ref('question')}
				inert={!open}
				className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
					open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
				}`}
			>
				<div className='overflow-hidden'>
					<p className='px-5 pb-5 text-sm leading-relaxed text-pretty text-muted sm:px-6 sm:text-base'>{answer}</p>
				</div>
			</div>
		</li>
	)
}
