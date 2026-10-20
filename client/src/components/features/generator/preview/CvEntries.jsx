import { GENERATOR_LABELS } from '@/constants'
import { periodOf } from '@/lib/generator/cv'

export function CvExperience({ items, inline = false }) {
	return (
		<ul className='flex flex-col gap-3 print:block print:space-y-3'>
			{items.map((entry) => (
				<li key={entry.id} className='text-[11.5px] leading-relaxed print:break-inside-avoid'>
					<EntryHead entry={entry} title='position' subtitle='company' inline={inline} />
					{entry.description && <p className='mt-0.5 text-ink/80'>{entry.description}</p>}
				</li>
			))}
		</ul>
	)
}

export function CvEducation({ items, inline = false }) {
	return (
		<ul className='flex flex-col gap-2 print:block print:space-y-2'>
			{items.map((entry) => (
				<li key={entry.id} className='text-[11.5px] leading-relaxed print:break-inside-avoid'>
					<EntryHead entry={entry} title='school' subtitle='degree' inline={inline} />
				</li>
			))}
		</ul>
	)
}

function EntryHead({ entry, title, subtitle, inline }) {
	const period = periodOf(entry, GENERATOR_LABELS.present)

	return (
		<>
			<p className={inline ? 'flex justify-between gap-4' : undefined}>
				<span>
					<strong>{entry[title]}</strong>
					{entry[subtitle] && ` · ${entry[subtitle]}`}
				</span>
				{inline && <span className='shrink-0 text-ink/55'>{period}</span>}
			</p>
			{!inline && <p className='text-ink/55'>{period}</p>}
		</>
	)
}
