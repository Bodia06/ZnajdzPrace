import CheckIcon from '@/components/ui/icons/CheckIcon'

export default function HeroPerks({ items }) {
	return (
		<ul className='mt-5 flex max-w-xl flex-wrap gap-x-4 gap-y-2 sm:mt-7 sm:gap-x-6 sm:gap-y-3 2xl:max-w-2xl'>
			{items.map(({ id, text }) => (
				<li
					key={id}
					className='flex items-center gap-2 text-xs font-semibold text-white/90 sm:gap-2.5 sm:text-sm 2xl:text-base'
				>
					<CheckIcon />
					{text}
				</li>
			))}
		</ul>
	)
}
