import Link from 'next/link'

import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function CategoryTitle({ badge, title, button }) {
	return (
		<div className='flex flex-col items-center gap-x-6 gap-y-4 text-center sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:text-left'>
			<div>
				<p className='text-xs font-bold tracking-wide text-primary uppercase'>{badge}</p>
				<h2
					id='category-title'
					className='mt-2 text-3xl leading-[1.05] font-extrabold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl'
				>
					{title}
				</h2>
			</div>
			<Link
				href={button.link}
				className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink shadow-[0_8px_20px_-6px_rgba(14,15,26,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(14,15,26,0.35)]'
			>
				{button.title}
				<ArrowIcon />
			</Link>
		</div>
	)
}
