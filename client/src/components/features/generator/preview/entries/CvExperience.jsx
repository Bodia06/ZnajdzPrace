import CvEntryHead from './CvEntryHead'

export default function CvExperience({ items, inline = false }) {
	return (
		<ul className='flex flex-col gap-3 print:block print:space-y-3'>
			{items.map((entry) => (
				<li key={entry.id} className='text-[11.5px] leading-relaxed print:break-inside-avoid'>
					<CvEntryHead entry={entry} title='position' subtitle='company' inline={inline} />
					{entry.description && <p className='mt-0.5 text-ink/80'>{entry.description}</p>}
				</li>
			))}
		</ul>
	)
}
