import AppliedCard from './Hero/AppliedCard'
import ChatCard from './Hero/ChatCard'
import CvScoreCard from './Hero/CvScoreCard'
import HeroBadge from './Hero/HeroBadge'
import HeroPerks from './Hero/HeroPerks'
import HeroSearch from './Hero/HeroSearch'
import HeroTitle from './Hero/HeroTitle'
import JobCard from './Hero/JobCard'
import { HERO_DATA } from '@/constants'

export default function Hero() {
	const { badge, title, description, search, perks, cards } = HERO_DATA

	return (
		<section aria-labelledby='hero-title' className='p-2 sm:p-4'>
			<div className="relative flex font-(family-name:--font-jakarta) items-center overflow-hidden rounded-3xl bg-ink px-4 py-7 text-white sm:rounded-[36px] sm:p-10 lg:h-[calc(100dvh-64px-69px)] lg:p-16 before:pointer-events-none before:absolute before:inset-0 before:opacity-30 before:content-[''] before:bg-[radial-gradient(#52525b_1px,transparent_1px)] before:bg-size-[24px_24px]">
				<div className='relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-10 2xl:max-w-360 3xl:zoom-[1.25] 4xl:zoom-[1.5]'>
					<div className='w-full max-w-xl 2xl:max-w-184'>
						<HeroBadge item={badge} />
						<HeroTitle item={title} description={description} />
						<HeroSearch item={search} />
						<HeroPerks items={perks} />
					</div>
					<div aria-hidden='true' className='flex w-full max-w-76 flex-col self-center sm:max-w-md lg:self-auto xl:max-w-md 2xl:max-w-136'>
						<JobCard item={cards.job} />
						<CvScoreCard item={cards.cvScore} />
						<ChatCard item={cards.chat} />
						<AppliedCard item={cards.applied} />
					</div>
				</div>
			</div>
		</section>
	)
}
