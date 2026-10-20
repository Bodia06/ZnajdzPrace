import Link from 'next/link'
import CompanyLogo from '@/components/features/offers/OffersResults/OfferCard/CompanyLogo'
import { LINKS } from '@/constants'
import { formatSalaryShort } from '@/lib/format'

export default function OfferDetailsSimilar({ offers, labels }) {
	if (offers.length === 0) return null

	return (
		<section className='rounded-3xl bg-white p-5 font-(family-name:--font-jakarta) shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5 sm:p-6'>
			<h2 className='text-base font-extrabold tracking-tight text-ink'>{labels.title}</h2>
			<ul className='mt-4 flex flex-col gap-2'>
				{offers.map(({ id, title, company, tone, salary }) => (
					<li key={id}>
						<Link
							href={`${LINKS.OFFERS}/${id}`}
							className='-mx-2 flex items-center gap-3 rounded-2xl p-2 transition hover:bg-page'
						>
							<CompanyLogo name={company} tone={tone} className='size-11! rounded-xl! text-base!' />
							<span className='flex min-w-0 flex-col gap-0.5'>
								<span className='truncate text-sm font-extrabold text-ink'>{title}</span>
								<span className='truncate text-xs font-medium text-muted'>
									{company} · {formatSalaryShort(salary, labels)}
								</span>
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
