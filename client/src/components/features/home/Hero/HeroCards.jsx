import AppliedCard from './AppliedCard'
import ChatCard from './ChatCard'
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
			<ChatCard item={cards.chat} />
			<AppliedCard item={cards.applied} />
		</div>
	)
}
