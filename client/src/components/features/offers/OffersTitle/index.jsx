import OffersSearch from './OffersSearch'
import { OFFERS_DATA } from '@/constants'

export default function OffersTitle({ initial }) {
	const { title, search } = OFFERS_DATA

	return (
		<section
			aria-labelledby='offers-title'
			className='dot-grid relative rounded-3xl bg-ink px-4 py-6 font-(family-name:--font-jakarta) text-white sm:rounded-4xl sm:px-8 sm:py-9 lg:px-12 lg:py-10'
		>
			<h2
				id='offers-title'
				className='mb-5 text-3xl font-extrabold tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl'
			>
				{title}
			</h2>
			<OffersSearch item={search} initial={initial} />
		</section>
	)
}
