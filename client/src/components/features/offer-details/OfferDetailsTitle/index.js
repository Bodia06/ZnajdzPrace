import BackButton from './BackButton'
import SaveButton from './SaveButton'
import ShareButton from './ShareButton'
import CompanyLogo from '@/components/features/offers/OffersResults/OfferCard/CompanyLogo'
import Button from '@/components/ui/Button'
import PinIcon from '@/components/ui/icons/PinIcon'
import { LINKS } from '@/constants'
import { formatDate } from '@/lib/format'

export default function OfferDetailsTitle({ offer, labels }) {
	const { title, company, location, posted, validUntil, isNew, isFavorite, tone } = offer

	return (
		<header className='flex flex-col gap-4 rounded-3xl bg-white p-4 font-(family-name:--font-jakarta) shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5 sm:gap-5 sm:p-6 lg:flex-row lg:items-center lg:gap-6 lg:p-8'>
			<div className='flex items-center justify-between gap-3 lg:contents'>
				<span className='flex lg:order-1'>
					<BackButton label={labels.back} fallbackHref={LINKS.OFFERS} />
				</span>
				<div className='flex items-center gap-2 sm:gap-3 lg:order-4 lg:shrink-0'>
					<ShareButton label={labels.share} copiedLabel={labels.shareCopied} />
					<SaveButton initial={isFavorite} label={labels.save} />
				</div>
			</div>

			<div className='flex min-w-0 items-start gap-3 sm:gap-4 lg:order-2 lg:flex-1 lg:items-center'>
				<CompanyLogo name={company} tone={tone} className='shrink-0' />
				<div className='min-w-0 flex-1'>
					<p className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted'>
						{isNew && (
							<span className='rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold tracking-wide whitespace-nowrap text-ink'>
								{labels.newLabel}
							</span>
						)}
						<span>
							{labels.postedPrefix} {posted} · {labels.validUntilPrefix} {formatDate(validUntil)}
						</span>
					</p>
					<h2 className='mt-1.5 text-xl leading-tight font-extrabold tracking-tight text-balance wrap-break-word text-ink min-[400px]:text-2xl sm:text-3xl lg:text-4xl'>
						{title}
					</h2>
					<p className='mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm'>
						<span className='font-bold text-ink'>{company}</span>
						<span className='flex items-center gap-1.5 font-medium text-muted'>
							<PinIcon className='size-4' />
							{location}
						</span>
					</p>
				</div>
			</div>

			<Button
				href='#apply'
				variant='brand'
				className='w-full py-3.5 text-center whitespace-nowrap lg:order-5 lg:w-auto lg:shrink-0'
			>
				{labels.apply}
			</Button>
		</header>
	)
}
