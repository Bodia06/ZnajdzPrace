'use client'

import { useState } from 'react'

import ScoreRing from '@/components/features/home/Tools/shared/ScoreRing'
import ToggleGroup from './ToggleGroup'
import ToolCard from '@/components/features/home/Tools/shared/ToolCard'
import ToolLink from '@/components/features/home/Tools/shared/ToolLink'

export default function CvAnalysisCard({ item, className }) {
	const { badge, title, toggleLabel, scoreLabel, modes, results, note, button } = item
	const [mode, setMode] = useState(modes[1].id)
	const { score, metrics } = results[mode]

	return (
		<ToolCard
			tone='dark'
			badge={badge}
			title={title}
			className={className}
			control={<ToggleGroup label={toggleLabel} options={modes} value={mode} onChange={setMode} />}
		>
			<div className='mt-6 flex flex-1 flex-col items-center gap-6 sm:flex-row sm:gap-8'>
				<ScoreRing
					value={score}
					fill='var(--color-accent)'
					track='rgb(255 255 255 / 0.12)'
					innerClassName='bg-ink text-white'
					className='size-36 sm:size-40'
				>
					<span className='text-4xl leading-none font-extrabold sm:text-5xl'>{score}</span>
					<span className='mt-1 text-xs text-white/70 sm:text-sm'>{scoreLabel}</span>
				</ScoreRing>
				<ul className='flex w-full flex-1 flex-col gap-3.5'>
					{metrics.map(({ id, label, value }) => (
						<li key={id}>
							<div className='flex items-center justify-between text-sm font-semibold text-white'>
								<span>{label}</span>
								<span>{value}</span>
							</div>
							<div
								aria-hidden='true'
								className='mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/12'
							>
								<div
									className='h-full rounded-full bg-accent transition-[width] duration-500 motion-reduce:transition-none'
									style={{ width: `${value}%` }}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='mt-6 flex flex-col items-center gap-4 border-t border-white/15 pt-5 sm:flex-row sm:justify-between sm:gap-6'>
				<p className='max-w-sm text-center text-sm text-pretty text-white/65 sm:text-left'>
					{note}
				</p>
				<ToolLink href={button.link} tone='accent'>
					{button.title}
				</ToolLink>
			</div>
		</ToolCard>
	)
}
