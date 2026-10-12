import { CATEGORY_DATA } from '@/constants'
import CategoryItem from './Category/CategoryItem'
import CategoryTitle from './Category/CategoryTitle'

export default function Category() {
	const { badge, title, button, cards } = CATEGORY_DATA

	return (
		<section
			aria-labelledby='category-title'
			className='px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12'
		>
			<div className='mx-auto max-w-7xl 2xl:max-w-360'>
				<CategoryTitle badge={badge} title={title} button={button} />
				<ul className='mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4'>
					{cards.map((card) => (
						<CategoryItem key={card.id} item={card} />
					))}
				</ul>
			</div>
		</section>
	)
}
