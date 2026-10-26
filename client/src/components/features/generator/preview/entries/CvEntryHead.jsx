import { GENERATOR_LABELS } from '@/constants'
import { periodOf } from '@/lib/cv'

export default function CvEntryHead({ entry, title, subtitle, inline }) {
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
