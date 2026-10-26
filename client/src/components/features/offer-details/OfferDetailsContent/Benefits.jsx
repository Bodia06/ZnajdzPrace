import SparkIcon from '@/components/ui/icons/SparkIcon'

export default function Benefits({ items }) {
	return (
		<ul className='flex flex-col divide-y divide-ink/5 overflow-hidden rounded-2xl bg-page ring-1 ring-ink/5'>
			{items.map((benefit) => (
				<li key={benefit} className='flex items-center gap-3.5 px-4 py-3.5 sm:px-5 sm:py-4'>
					<span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/15'>
						<SparkIcon className='size-4.5' />
					</span>
					<span className='text-sm font-semibold text-ink sm:text-[15px]'>{benefit}</span>
				</li>
			))}
		</ul>
	)
}
