import { GENERATOR_LABELS } from '@/constants'
import { periodOf } from '@/lib/generator/cv'

export function CvExperience({ items, inline = false }) {
	return (
		<ul className='flex flex-col gap-3 print:block print:space-y-3'>
			{items.map((entry) => (
				<li key={entry.id} className='text-[11.5px] leading-relaxed print:break-inside-avoid'>
					<p className={inline ? 'flex justify-between gap-4' : undefined}>
						<span>
							<strong>{entry.position}</strong>
							{entry.company && ` · ${entry.company}`}
						</span>
						{inline && (
							<span className='shrink-0 text-ink/55'>
								{periodOf(entry, GENERATOR_LABELS.present)}
							</span>
						)}
					</p>
					{!inline && <p className='text-ink/55'>{periodOf(entry, GENERATOR_LABELS.present)}</p>}
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
					<p className={inline ? 'flex justify-between gap-4' : undefined}>
						<span>
							<strong>{entry.school}</strong>
							{entry.degree && ` · ${entry.degree}`}
						</span>
						{inline && (
							<span className='shrink-0 text-ink/55'>
								{periodOf(entry, GENERATOR_LABELS.present)}
							</span>
						)}
					</p>
					{!inline && <p className='text-ink/55'>{periodOf(entry, GENERATOR_LABELS.present)}</p>}
				</li>
			))}
		</ul>
	)
}
