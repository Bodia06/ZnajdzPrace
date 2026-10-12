import Hero from '@/components/features/home/Hero'
import Category from '@/components/features/home/Category'
import HowItWorks from '@/components/features/home/HowItWorks'

export default function HomePage() {
	return (
		<div className='px-0 py-2 sm:px-6 sm:py-4 lg:px-12 xl:px-20 xl:py-5'>
			<Hero />
			<Category />
			<HowItWorks />
		</div>
	)
}
