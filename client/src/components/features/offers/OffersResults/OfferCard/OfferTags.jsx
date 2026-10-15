export default function OfferTags({ tags }) {
	return (
		<ul className='flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<li
					key={tag.label}
					className={`rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap sm:text-[13px] ${
						tag.accent ? 'bg-primary-soft text-primary' : 'bg-page text-ink'
					}`}
				>
					{tag.label}
				</li>
			))}
		</ul>
	)
}
