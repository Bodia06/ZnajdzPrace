import CvEntryHead from './CvEntryHead'

export default function CvEducation({ items, inline = false }) {
	return (
		<ul className='flex flex-col gap-2 print:block print:space-y-2'>
			{items.map((entry) => (
				<li key={entry.id} className='text-[11.5px] leading-relaxed print:break-inside-avoid'>
					<CvEntryHead entry={entry} title='school' subtitle='degree' inline={inline} />
				</li>
			))}
		</ul>
	)
}
