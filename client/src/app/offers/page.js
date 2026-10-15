import OffersFilter from '@/components/features/offers/OffersFilter'
import OffersTitle from '@/components/features/offers/OffersTitle'
import { parseOffersParams } from '@/lib/offers-params'

export const metadata = {
	title: 'Oferty pracy'
}

export default async function OffersPage({ searchParams }) {
	const { search, filters } = parseOffersParams(await searchParams)

	return (
		<div className='mx-auto grid max-w-360 gap-3 px-2 pt-2 pb-14 sm:gap-6 sm:px-6 sm:pt-4 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start xl:px-20'>
			<div className='lg:col-span-2'>
				<OffersTitle initial={search} />
			</div>
			<aside>
				<OffersFilter initialFilters={filters} />
			</aside>
		</div>
	)
}
