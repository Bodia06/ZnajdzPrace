import Category from '@/components/features/home/Category'
import Faq from '@/components/features/home/Faq'
import Hero from '@/components/features/home/Hero'
import HowItWorks from '@/components/features/home/HowItWorks'
import Tools from '@/components/features/home/Tools'
import Reveal from '@/components/ui/Reveal'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-14 px-0 pt-2 pb-14 sm:gap-20 sm:px-6 sm:pt-4 sm:pb-20 lg:gap-24 lg:pb-24 xl:px-20 xl:pt-5 xl:pb-28'>
			<Hero />
			<Reveal>
				<Category />
			</Reveal>
			<Reveal>
				<HowItWorks />
			</Reveal>
			<Reveal>
				<Tools />
			</Reveal>
			<Reveal>
				<Faq />
			</Reveal>
		</div>
	)
}
