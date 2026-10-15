import ActiveFilters from './ActiveFilters'
import OfferCard from './OfferCard'
import ResultsEmpty from './ResultsEmpty'
import ResultsHeader from './ResultsHeader'
import ResultsSort from './ResultsSort'
import Pagination from '@/components/ui/Pagination'
import { OFFERS_IDS, OFFERS_LIST, OFFERS_RESULTS_DATA } from '@/constants'
import { formatResultsTitle } from '@/lib/format'
import { getActiveFilters, getPagination, getSortOptions } from '@/lib/offers/url'

export default function OffersResults({ search, filters, sort, page }) {
	const { header, sort: sortData, activeFilters, card, empty, pagination } = OFFERS_RESULTS_DATA
	const state = { search, filters, sort, page }
	const { pages, prevHref, nextHref } = getPagination(state)

	return (
		<section
			aria-labelledby={OFFERS_IDS.resultsTitle}
			className='flex min-w-0 flex-col gap-4 font-(family-name:--font-jakarta)'
		>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6'>
				<ResultsHeader
					id={OFFERS_IDS.resultsTitle}
					title={formatResultsTitle({ ...search, location: filters.location }, header)}
					description={header.description}
				/>
				<ResultsSort item={sortData} value={sort} options={getSortOptions(state)} />
			</div>

			<ActiveFilters
				chips={getActiveFilters(state)}
				label={activeFilters.label}
				removeLabel={activeFilters.remove}
			/>

			{OFFERS_LIST.length === 0 ? (
				<ResultsEmpty title={empty.title} text={empty.text} />
			) : (
				<>
					<ul className='flex flex-col gap-3 sm:gap-4'>
						{OFFERS_LIST.map((offer) => (
							<li key={offer.id}>
								<OfferCard offer={offer} labels={card} />
							</li>
						))}
					</ul>

					<Pagination
						labels={pagination}
						pages={pages}
						prevHref={prevHref}
						nextHref={nextHref}
						className='mt-4 self-center sm:mt-6'
					/>
				</>
			)}
		</section>
	)
}
