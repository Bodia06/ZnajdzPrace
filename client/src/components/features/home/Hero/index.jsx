import HeroBadge from './HeroBadge'
import HeroCards from './cards'
import HeroPerks from './HeroPerks'
import HeroSearch from './HeroSearch'
import HeroTitle from './HeroTitle'
import { HERO_DATA } from '@/constants'

export default function Hero() {
	const { badge, title, description, search, perks, cards } = HERO_DATA

	return (
		<section aria-labelledby='hero-title' className='p-2 sm:p-4'>
			<div className='dot-grid relative flex items-center overflow-hidden rounded-3xl bg-ink px-4 py-7 font-(family-name:--font-jakarta) text-white sm:rounded-[36px] sm:p-10 lg:min-h-[calc(100dvh-64px-69px)] lg:p-12 xl:p-16'>
				<div className='relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 3xl:zoom-[1.25] 4xl:zoom-[1.5] sm:gap-12 lg:flex-row lg:items-center lg:gap-10 2xl:max-w-360'>
					<div className='w-full max-w-xl text-center md:max-w-2xl lg:max-w-xl lg:text-left 2xl:max-w-184'>
						<HeroBadge item={badge} />
						<HeroTitle item={title} description={description} />
						<HeroSearch item={search} className='mt-6 sm:mt-9' />
						<HeroPerks items={perks} />
					</div>
					<HeroCards cards={cards} />
				</div>
			</div>
		</section>
	)
}
