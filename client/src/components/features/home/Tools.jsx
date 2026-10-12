import Tilt from '@/components/ui/Tilt'
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
			className='font-(family-name:--font-jakarta) px-4 sm:px-6 lg:px-12'
		>
			<div className='mx-auto max-w-7xl 2xl:max-w-360'>
				<ToolsTitle badge={badge} title={title} description={description} />
				<div className='mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-12'>
					<Tilt className='rounded-4xl lg:col-span-7'>
						<CvAnalysisCard item={cvAnalysis} className='h-full' />
					</Tilt>
					<Tilt className='rounded-4xl lg:col-span-5'>
						<OfferMatchCard item={offerMatch} className='h-full' />
					</Tilt>
					<Tilt className='rounded-4xl lg:col-span-5'>
						<CvGeneratorCard item={cvGenerator} className='h-full' />
					</Tilt>
					<Tilt className='rounded-4xl lg:col-span-7'>
						<CandidatePanelCard item={candidatePanel} className='h-full' />
					</Tilt>
				</div>
			</div>
		</section>
	)
}
