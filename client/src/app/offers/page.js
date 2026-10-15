import OffersFilter from '@/components/features/offers/OffersFilter'
import OffersResults from '@/components/features/offers/OffersResults'
import OffersTitle from '@/components/features/offers/OffersTitle'
import { parseOffersParams } from '@/lib/offers/params'

export const metadata = {
	title: 'Oferty pracy'
}

export default async function OffersPage({ searchParams }) {
	const { search, filters, sort, page } = parseOffersParams(await searchParams)

	return (
		<div className='mx-auto flex max-w-360 flex-col gap-4 px-2 pt-2 pb-14 sm:gap-6 sm:px-6 sm:pt-4 sm:pb-20 lg:gap-8 xl:px-20'>
			<OffersTitle key={JSON.stringify(search)} initial={search} />
			<div className='grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start lg:gap-8'>
				<OffersFilter key={JSON.stringify(filters)} initialFilters={filters} />
				<OffersResults search={search} filters={filters} sort={sort} page={page} />
			</div>
		</div>
	)
}
