import OffersFilter from '@/components/features/offers/OffersFilter'
import OffersResultsLoader from '@/components/features/offers/OffersResults/OffersResultsLoader'
import OffersCityProvider from '@/components/features/offers/shared/OffersCityProvider'
import OffersTitle from '@/components/features/offers/OffersTitle'
import { getOffersPageContent } from '@/services/sources/offers'
import { parseOffersParams } from '@/lib/offersParams'

export const metadata = {
	title: 'Oferty pracy'
}

export default async function OffersPage({ searchParams }) {
	const content = await getOffersPageContent()
	const { search, filters, sort, page } = parseOffersParams(await searchParams, content)

	return (
		<OffersCityProvider key={search.city} initialCity={search.city}>
			<div className='mx-auto flex max-w-360 flex-col gap-4 px-2 pt-2 pb-14 sm:gap-6 sm:px-6 sm:pt-4 sm:pb-20 lg:gap-8 xl:px-20'>
				<OffersTitle key={JSON.stringify(search)} data={content.header} initial={search} />
				<div className='grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start lg:gap-8'>
					<OffersFilter
						key={JSON.stringify(filters)}
						data={content.filter}
						initialFilters={filters}
					/>
					<OffersResultsLoader
						content={content}
						search={search}
						filters={filters}
						sort={sort}
						page={page}
					/>
				</div>
			</div>
		</OffersCityProvider>
	)
}
