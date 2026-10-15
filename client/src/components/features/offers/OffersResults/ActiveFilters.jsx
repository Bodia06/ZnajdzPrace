import Link from 'next/link'
import CrossIcon from '@/components/ui/icons/CrossIcon'

export default function ActiveFilters({ chips, label, removeLabel }) {
	if (chips.length === 0) return null

	return (
		<ul
			aria-label={label}
			className='scrollbar-hidden -mx-2 -my-1 flex scrollbar-none gap-2 overflow-x-auto px-2 py-1 sm:m-0 sm:flex-wrap sm:overflow-visible sm:p-0'
		>
			{chips.map((chip) => (
				<li key={chip.id} className='shrink-0'>
					<Link
						href={chip.href}
						scroll={false}
						aria-label={`${removeLabel}: ${chip.label}`}
						className='flex h-10 items-center gap-2 rounded-full bg-white pr-2.5 pl-4 text-sm font-bold whitespace-nowrap text-ink ring-1 ring-ink/10 transition hover:bg-primary-soft hover:ring-primary/30'
					>
						{chip.label}
						<span className='flex size-5 items-center justify-center rounded-full bg-page text-muted'>
							<CrossIcon className='size-2.5' />
						</span>
					</Link>
				</li>
			))}
		</ul>
	)
}
