import OfferCard from './OfferCard'

export default function ResultsList({ items, filler, labels }) {
	return (
		<ul className='flex flex-col gap-3 sm:gap-4'>
			{items.map((offer) => (
				<li key={offer.id}>
					<OfferCard offer={offer} labels={labels} />
				</li>
			))}
			{filler.map((offer) => (
				<li key={`filler-${offer.id}`} aria-hidden='true' inert className='invisible'>
					<OfferCard offer={offer} labels={labels} />
				</li>
			))}
		</ul>
	)
}
