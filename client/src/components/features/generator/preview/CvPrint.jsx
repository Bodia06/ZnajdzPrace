import { CV_TEMPLATES, DEFAULT_CV_TEMPLATE } from './templates'
import { buildPreview, colorValue } from '@/lib/cv'

export default function CvPrint({ cv, label }) {
	const Template = CV_TEMPLATES[cv.template] ?? DEFAULT_CV_TEMPLATE

	return (
		<article
			aria-label={label}
			className='hidden w-[210mm] bg-white font-(family-name:--font-jakarta) [-webkit-print-color-adjust:exact] [print-color-adjust:exact] print:block'
		>
			<Template data={buildPreview(cv)} color={colorValue(cv.color)} />
		</article>
	)
}
