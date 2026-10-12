import ChatCard from '@/components/ui/ChatCard'
import AppliedCard from './AppliedCard'
import CvScoreCard from './CvScoreCard'
import JobCard from './JobCard'

export default function HeroCards({ cards }) {
	return (
		<div
			aria-hidden='true'
			className='flex w-full max-w-76 flex-col self-center sm:max-w-md lg:self-auto xl:max-w-md 2xl:max-w-136'
		>
			<JobCard item={cards.job} />
			<CvScoreCard item={cards.cvScore} />
			<ChatCard
				item={cards.chat}
				className='relative z-10 mt-4 ml-auto w-52 rotate-2 animate-float border border-white/10 [animation-delay:-4s] [animation-duration:8s] motion-reduce:animate-none sm:mt-5 sm:w-64 2xl:w-72'
			/>
			<AppliedCard item={cards.applied} />
		</div>
	)
}
