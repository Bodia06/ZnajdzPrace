import OfferCreate from '@/components/features/offer-create'
import { OFFER_CREATE_DATA } from '@/constants'

export const metadata = {
	title: OFFER_CREATE_DATA.meta
}

export default function OfferCreatePage() {
	return <OfferCreate />
}
