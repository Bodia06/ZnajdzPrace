import Link from 'next/link'
import CompanyLogo from './CompanyLogo'
import FavoriteButton from './FavoriteButton'
import OfferSalary from './OfferSalary'
import OfferTags from './OfferTags'
import Button from '@/components/ui/Button'
import { LINKS } from '@/constants'

export default function OfferCard({ offer, labels }) {
	const { id, title, company, location, posted, isNew, isFavorite, tone, salary, tags } = offer
	const href = `${LINKS.OFFERS}/${id}`

	return (
		<article className='grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-3 rounded-3xl bg-white p-4 shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5 transition hover:shadow-[0_12px_40px_rgba(14,15,26,0.09)] min-[750px]:grid-cols-[auto_1fr_auto] min-[750px]:items-start min-[750px]:gap-x-5 min-[750px]:gap-y-0 min-[750px]:p-6'>
			<CompanyLogo name={company} tone={tone} className='min-[750px]:row-span-2' />

			<div className='flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 min-[750px]:col-start-2 min-[750px]:row-start-1'>
				<h3 className='text-base leading-snug font-extrabold tracking-tight text-ink min-[750px]:text-xl'>
					<Link href={href} className='transition hover:text-primary'>
						{title}
					</Link>
				</h3>
				{isNew && (
					<span className='rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold tracking-wide whitespace-nowrap text-ink'>
						{labels.newLabel}
					</span>
				)}
			</div>

			<div className='col-span-2 min-w-0 min-[750px]:col-span-1 min-[750px]:col-start-2 min-[750px]:row-start-2 min-[750px]:pt-1'>
				<p className='flex flex-col gap-0.5 text-sm'>
					<span className='font-bold text-ink'>{company}</span>
					<span className='font-medium text-muted'>{location}</span>
					<span className='font-medium text-subtle'>{posted}</span>
				</p>
				<div className='mt-3'>
					<OfferTags tags={tags} />
				</div>
			</div>

			<div className='col-span-2 flex flex-col gap-3 border-t border-ink/5 pt-4 min-[750px]:col-span-1 min-[750px]:col-start-3 min-[750px]:row-span-2 min-[750px]:row-start-1 min-[750px]:items-end min-[750px]:justify-between min-[750px]:gap-4 min-[750px]:self-stretch min-[750px]:border-0 min-[750px]:pt-0'>
				<OfferSalary salary={salary} unit={labels.salaryUnit} period={labels.salaryPeriod} />
				<div className='flex items-center gap-3'>
					<FavoriteButton
						initial={isFavorite}
						addLabel={labels.favoriteAdd}
						removeLabel={labels.favoriteRemove}
					/>
					<Button
						href={href}
						aria-label={`${labels.apply}: ${title}`}
						variant='brand'
						className='flex-1 py-3.5 text-center min-[750px]:flex-none'
					>
						{labels.apply}
					</Button>
				</div>
			</div>
		</article>
	)
}
