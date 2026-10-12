'use client'

import { useState } from 'react'

import OfferDetails from '../OfferDetails'
import ToolCard from '../ToolCard'

export default function OfferMatchCard({ item, className }) {
	const { badge, title, offers } = item
	const [activeId, setActiveId] = useState(offers[0].id)

	return (
		<ToolCard tone='primary' badge={badge} title={title} className={className}>
			<div role='group' aria-label={title} className='mt-4 flex flex-wrap gap-2'>
				{offers.map(({ id, label }) => (
					<button
						key={id}
						type='button'
						aria-pressed={id === activeId}
						onClick={() => setActiveId(id)}
						className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition-colors ${
							id === activeId ? 'bg-white text-primary' : 'bg-black/15 text-white hover:bg-black/25'
						}`}
					>
						{label}
					</button>
				))}
			</div>
			<div className='mt-6 grid'>
				{offers.map((offer) => (
					<OfferDetails key={offer.id} item={offer} selected={offer.id === activeId} />
				))}
			</div>
		</ToolCard>
	)
}
