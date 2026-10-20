import OfferDetailsAiMatch from './OfferDetailsAiMatch'
import OfferDetailsContent from './OfferDetailsContent'
import OfferDetailsFacts from './OfferDetailsFacts'
import OfferDetailsRecruitment from './OfferDetailsRecruitment'
import OfferDetailsSimilar from './OfferDetailsSimilar'
import OfferDetailsTitle from './OfferDetailsTitle'

export default function OfferDetails({ offer, similar, content }) {
	return (
		<div className='mx-auto flex max-w-360 flex-col gap-4 px-2 pt-2 pb-14 sm:gap-6 sm:px-6 sm:pt-4 sm:pb-20 xl:px-20'>
			<OfferDetailsTitle offer={offer} labels={content.title} />
			<OfferDetailsFacts offer={offer} labels={content.facts} />
			<div
				id='apply'
				className='grid scroll-mt-24 items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]'
			>
				<OfferDetailsContent offer={offer} labels={content.content} />
				<aside className='grid items-start gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1'>
					<OfferDetailsAiMatch labels={content.aiMatch} />
					<OfferDetailsRecruitment steps={offer.recruitment} labels={content.recruitment} />
					<OfferDetailsSimilar offers={similar} labels={content.similar} />
				</aside>
			</div>
		</div>
	)
}
