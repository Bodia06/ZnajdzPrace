import { TOOLS_DATA } from '@/constants'
import CandidatePanelCard from './Tools/CandidatePanelCard'
import CvAnalysisCard from './Tools/CvAnalysisCard'
import CvGeneratorCard from './Tools/CvGeneratorCard'
import OfferMatchCard from './Tools/OfferMatchCard'
import ToolsTitle from './Tools/ToolsTitle'

export default function Tools() {
	const { badge, title, description, cvAnalysis, offerMatch, cvGenerator, candidatePanel } = TOOLS_DATA

	return (
		<section
			aria-labelledby='tools-title'
			className='font-(family-name:--font-jakarta) px-4 pb-8 sm:px-6 sm:pb-10 lg:px-12 lg:pb-12'
		>
			<div className='mx-auto max-w-7xl 2xl:max-w-360'>
				<ToolsTitle badge={badge} title={title} description={description} />
				<div className='mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-12'>
					<CvAnalysisCard item={cvAnalysis} className='lg:col-span-7' />
					<OfferMatchCard item={offerMatch} className='lg:col-span-5' />
					<CvGeneratorCard item={cvGenerator} className='lg:col-span-5' />
					<CandidatePanelCard item={candidatePanel} className='lg:col-span-7' />
				</div>
			</div>
		</section>
	)
}
