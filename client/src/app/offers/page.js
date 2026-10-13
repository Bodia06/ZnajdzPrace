import OffersTitle from '@/components/features/offers/OffersTitle'

export const metadata = {
	title: 'Oferty pracy'
}

export default function OffersPage() {
	return (
		<div className='px-2 pt-2 pb-14 sm:px-6 sm:pt-4 xl:px-20'>
			<OffersTitle />
		</div>
	)
}
