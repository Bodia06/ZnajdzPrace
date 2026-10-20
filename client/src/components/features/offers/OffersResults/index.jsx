import ActiveFilters from './ActiveFilters'
import ResultsEmpty from './ResultsEmpty'
import ResultsHeader from './ResultsHeader'
import ResultsList from './ResultsList'
import ResultsSort from './ResultsSort'
import Pagination from '@/components/ui/Pagination'
import { OFFERS_IDS } from '@/constants'
import { formatResultsTitle } from '@/lib/format'
import { getOffers } from '@/lib/offers/filter'
import { paginate } from '@/lib/offers/pagination'
import { getActiveFilters, getPagination, getSortOptions } from '@/lib/offers/url'

export default function OffersResults({
	offers: allOffers,
	content,
	search,
	filters,
	sort,
	page: requestedPage
}) {
	const { header, sort: sortData, activeFilters, card, empty, pagination } = content.results
	const offers = getOffers(allOffers, { search, filters, sort })
	const { page, totalPages, items, filler } = paginate(offers, requestedPage, pagination.pageSize)
	const state = { search, filters, sort, page }
	const { pages, compactPages, prevHref, nextHref } = getPagination(state, totalPages, content)

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
				<ResultsSort item={sortData} value={sort} options={getSortOptions(state, content)} />
			</div>

			<ActiveFilters
				chips={getActiveFilters(state, content)}
				label={activeFilters.label}
				removeLabel={activeFilters.remove}
			/>

			{offers.length === 0 ? (
				<ResultsEmpty title={empty.title} text={empty.text} />
			) : (
				<>
					<ResultsList items={items} filler={filler} labels={card} />

					{totalPages > 1 && (
						<Pagination
							labels={pagination}
							pages={pages}
							compactPages={compactPages}
							prevHref={prevHref}
							nextHref={nextHref}
							className='mt-4 self-center sm:mt-6'
						/>
					)}
				</>
			)}
		</section>
	)
}
