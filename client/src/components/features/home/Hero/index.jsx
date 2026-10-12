import HeroBadge from './HeroBadge'
import HeroCards from './HeroCards'
import HeroPerks from './HeroPerks'
import HeroSearch from './HeroSearch'
import HeroTitle from './HeroTitle'
import { HERO_DATA } from '@/constants'

export default function Hero() {
	const { badge, title, description, search, perks, cards } = HERO_DATA

	return (
		<section aria-labelledby='hero-title' className='p-2 sm:p-4'>
			<div className="relative flex items-center overflow-hidden rounded-3xl bg-ink px-4 py-7 font-(family-name:--font-jakarta) text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(#52525b_1px,transparent_1px)] before:bg-size-[24px_24px] before:opacity-30 before:content-[''] sm:rounded-[36px] sm:p-10 lg:h-[calc(100dvh-64px-69px)] lg:p-16">
				<div className='relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 3xl:zoom-[1.25] 4xl:zoom-[1.5] sm:gap-12 lg:flex-row lg:items-center lg:gap-10 2xl:max-w-360'>
					<div className='w-full max-w-xl 2xl:max-w-184'>
						<HeroBadge item={badge} />
						<HeroTitle item={title} description={description} />
						<HeroSearch item={search} />
						<HeroPerks items={perks} />
					</div>
					<HeroCards cards={cards} />
				</div>
			</div>
		</section>
	)
}
