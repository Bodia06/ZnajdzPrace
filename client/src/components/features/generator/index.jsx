'use client'

import GeneratorForm from './GeneratorForm'
import GeneratorResult from './GeneratorResult'

import GeneratorTitle from './GeneratorTitle'
import CvPrint from './preview/CvPrint'
import Steps from '@/components/ui/Steps'
import { GENERATOR_DATA, GENERATOR_IDS } from '@/constants'
import { useCvBuilder } from '@/hooks'

export default function Generator() {
	const builder = useCvBuilder()
	const { title, stepsLabel, preview } = GENERATOR_DATA

	return (
		<section
			aria-labelledby={GENERATOR_IDS.title}
			className='mx-auto flex max-w-360 flex-col gap-5 px-3 pt-4 pb-14 font-(family-name:--font-jakarta) sm:gap-6 sm:px-6 sm:pt-8 sm:pb-20 xl:px-20 print:max-w-none print:p-0'
		>
			<GeneratorTitle
				texts={title}
				saved={builder.saved}
				onSave={builder.saveDraft}
				onDownload={builder.download}
			/>
			<Steps label={stepsLabel} steps={builder.steps} />
			<div className='grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-2 print:hidden'>
				<GeneratorForm builder={builder} />
				<GeneratorResult texts={preview} cv={builder.cv} />
			</div>
			<CvPrint cv={builder.cv} label={preview.label} />
		</section>
	)
}
