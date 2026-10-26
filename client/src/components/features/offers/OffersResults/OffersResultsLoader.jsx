'use client'

import OffersResults from './index'
import ResultsEmpty from './ResultsEmpty'
import useOffers from '@/hooks/offers/useOffers'

export default function OffersResultsLoader({ content, ...props }) {
	const { offers, error, isLoading, reload } = useOffers()

	if (error) {
		return (
			<div className='flex flex-col items-center gap-4'>
				<ResultsEmpty title={content.results.error.title} text={content.results.error.text} />
				<button
					type='button'
					onClick={reload}
					className='cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110'
				>
					{content.results.error.retry}
				</button>
			</div>
		)
	}

	if (isLoading) {
		return (
			<p role='status' className='py-12 text-center text-sm font-medium text-muted'>
				{content.results.loading}
			</p>
		)
	}

	return <OffersResults offers={offers} content={content} {...props} />
}
