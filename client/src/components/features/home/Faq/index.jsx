import { FAQ_DATA } from '@/constants'
import FaqIntro from './FaqIntro'
import FaqList from './FaqList'

export default function Faq() {
	const { badge, title, description, button, items, defaultOpenId } = FAQ_DATA

	return (
		<section
			aria-labelledby='faq-title'
			className='px-4 font-(family-name:--font-jakarta) sm:px-6 lg:px-12'
		>
			<div className='mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16 2xl:max-w-360'>
				<FaqIntro badge={badge} title={title} description={description} button={button} />
				<FaqList items={items} defaultOpenId={defaultOpenId} />
			</div>
		</section>
	)
}
