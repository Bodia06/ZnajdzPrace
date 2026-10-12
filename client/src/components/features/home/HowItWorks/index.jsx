'use client'

import { useState } from 'react'

import { HOW_IT_WORKS_DATA } from '@/constants'
import HowItWorksPanel from './HowItWorksPanel'
import HowItWorksTabs from './HowItWorksTabs'
import HowItWorksTitle from './HowItWorksTitle'

export default function HowItWorks() {
	const { badge, tabs } = HOW_IT_WORKS_DATA
	const [activeId, setActiveId] = useState(tabs[0].id)

	return (
		<section
			aria-labelledby={`how-it-works-title-${activeId}`}
			className='px-4 font-(family-name:--font-jakarta) sm:px-6 lg:px-12'
		>
			<div className='mx-auto max-w-7xl rounded-3xl bg-white p-5 sm:rounded-[36px] sm:p-8 lg:p-14 2xl:max-w-360'>
				<div className='flex flex-col items-center gap-x-10 gap-y-6 text-center xl:flex-row xl:items-end xl:justify-between xl:text-left'>
					<HowItWorksTitle badge={badge} items={tabs} activeId={activeId} />
					<HowItWorksTabs tabs={tabs} activeId={activeId} onChange={setActiveId} />
				</div>
				<div className='mt-6 grid sm:mt-8'>
					{tabs.map(({ id, steps }) => (
						<HowItWorksPanel key={id} id={id} steps={steps} selected={id === activeId} />
					))}
				</div>
			</div>
		</section>
	)
}
