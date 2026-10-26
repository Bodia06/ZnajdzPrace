import SparkIcon from '@/components/ui/icons/SparkIcon'
import TickIcon from '@/components/ui/icons/TickIcon'

export default function BasicsTips({ tips }) {
	return (
		<aside className='flex flex-col gap-4 rounded-3xl bg-primary/5 p-5 ring-1 ring-primary/10'>
			<div className='flex items-center gap-2.5'>
				<span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
					<SparkIcon className='size-4' />
				</span>
				<p className='text-xs font-extrabold tracking-wide text-primary uppercase'>{tips.badge}</p>
			</div>
			<h3 className='text-base leading-snug font-extrabold tracking-tight text-balance text-ink'>
				{tips.title}
			</h3>
			<ul className='flex flex-col gap-2.5'>
				{tips.items.map((tip) => (
					<li
						key={tip}
						className='flex items-start gap-2.5 text-sm leading-snug font-medium text-ink/70'
					>
						<span className='mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-primary/15'>
							<TickIcon className='size-3' />
						</span>
						{tip}
					</li>
				))}
			</ul>
		</aside>
	)
}
