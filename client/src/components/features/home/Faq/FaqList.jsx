'use client'

import { useAccordion } from '@/hooks'
import FaqItem from './FaqItem'

const LIST = 'col-start-1 row-start-1 flex flex-col gap-2.5 self-start sm:gap-3'

export default function FaqList({ items, defaultOpenId }) {
	const { isOpen, toggle } = useAccordion(defaultOpenId)

	return (
		<div className='grid'>
			{items.map(({ id: ghostId }) => (
				<ul key={ghostId} aria-hidden='true' inert className={`invisible ${LIST}`}>
					{items.map((item) => (
						<FaqItem key={item.id} item={item} open={item.id === ghostId} ghost />
					))}
				</ul>
			))}
			<ul className={LIST}>
				{items.map((item) => (
					<FaqItem
						key={item.id}
						item={item}
						open={isOpen(item.id)}
						onToggle={() => toggle(item.id)}
					/>
				))}
			</ul>
		</div>
	)
}
