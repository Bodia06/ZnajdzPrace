import { HTTP_STATUS, OFFERS_SIMILAR_LIMIT } from '@/constants'
import NotFound from '@/components/features/not-found'
import OfferDetails from '@/components/features/offer-details'
import { toOffer, toOffers } from '@/services/sources/offersAdapter'
import { getOfferPageContent } from '@/services/sources/offers'
import { getOffer, getOffers } from '@/services/api/offers'

export default async function OfferPage({ params }) {
	const { id } = await params
	const [offer, list] = await Promise.all([
		getOffer(id).catch((error) => {
			if (error.status === HTTP_STATUS.notFound || error.status === HTTP_STATUS.badRequest)
				return null
			throw error
		}),
		getOffers({ cache: 'no-store' }).catch(() => [])
	])

	if (!offer) return <NotFound />

	const similar = toOffers(list)
		.filter((item) => item.id !== id)
		.slice(0, OFFERS_SIMILAR_LIMIT)

	return <OfferDetails offer={toOffer(offer)} similar={similar} content={getOfferPageContent()} />
}
