import CvBanner from './CvBanner'
import CvMinimal from './CvMinimal'
import CvSidebar from './CvSidebar'
import { GENERATOR_TEMPLATE_IDS } from '@/constants'

export const CV_TEMPLATES = {
	[GENERATOR_TEMPLATE_IDS.sidebar]: CvSidebar,
	[GENERATOR_TEMPLATE_IDS.banner]: CvBanner,
	[GENERATOR_TEMPLATE_IDS.minimal]: CvMinimal
}

export const DEFAULT_CV_TEMPLATE = CvSidebar
