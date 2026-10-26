import {
	OFFERS_DATA,
	OFFERS_FILTER_DATA,
	OFFER_DETAILS_DATA,
	OFFERS_RESULTS_DATA
} from '@/constants'

export async function getOffersPageContent() {
	return {
		header: OFFERS_DATA,
		filter: OFFERS_FILTER_DATA,
		results: OFFERS_RESULTS_DATA
	}
}

export const getOfferPageContent = () => OFFER_DETAILS_DATA
