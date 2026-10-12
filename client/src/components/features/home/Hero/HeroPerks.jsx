import CheckIcon from '@/components/ui/CheckIcon'

export default function HeroPerks({ items }) {
	return (
		<ul className='mt-5 flex sm:mt-7 max-w-xl flex-wrap 2xl:max-w-2xl gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3'>
			{items.map(({ id, text }) => (
				<li
					key={id}
					className='flex items-center gap-2 text-xs font-semibold sm:gap-2.5 sm:text-sm text-white/90 2xl:text-base'
				>
					<CheckIcon />
					{text}
				</li>
			))}
		</ul>
	)
}
