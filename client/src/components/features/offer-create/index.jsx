'use client'

import OfferCreateForm from './OfferCreateForm'
import OfferCreateTitle from './OfferCreateTitle'
import Steps from '@/components/ui/Steps'
import { OFFER_CREATE_DATA } from '@/constants'
import { useOfferCreateForm } from '@/hooks'

export default function OfferCreate() {
	const form = useOfferCreateForm()
	const { title, text, stepsLabel, stepDone } = OFFER_CREATE_DATA

	return (
		<div className='mx-auto flex w-full max-w-4xl flex-col gap-4 px-2 pt-2 pb-14 font-(family-name:--font-jakarta) sm:gap-6 sm:px-6 sm:pt-4 sm:pb-20'>
			<OfferCreateTitle title={title} text={text} />
			<Steps label={stepsLabel} doneLabel={stepDone} steps={form.steps} />
			<OfferCreateForm form={form} />
		</div>
	)
}
