import NotFound from '@/components/features/not-found'
import OfferDetails from '@/components/features/offer-details'
import { getOfferPageData } from '@/lib/offers/data'

export default async function OfferPage({ params }) {
	const { id } = await params
	const data = await getOfferPageData(id)

	if (!data) return <NotFound />

	return <OfferDetails offer={data.offer} similar={data.similar} content={data.content} />
}
