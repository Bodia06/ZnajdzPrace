import { CvEducation, CvExperience } from './CvEntries'
import { GENERATOR_LABELS } from '@/constants'

const TITLE =
	'mb-2 border-b pb-1 text-[10px] font-extrabold tracking-[0.14em] uppercase print:break-after-avoid'

function Section({ title, color, children }) {
	return (
		<div>
			<p className={TITLE} style={{ color, borderColor: `${color}33` }}>
				{title}
			</p>
			{children}
		</div>
	)
}

export default function CvMinimal({ data, color }) {
	return (
		<div className='flex min-h-280.75 flex-col gap-5 p-12 text-ink print:block print:space-y-5'>
			<header className='border-b-2 pb-5' style={{ borderColor: color }}>
				<p className='text-4xl leading-none font-extrabold tracking-tight'>{data.fullName}</p>
				{data.jobTitle && (
					<p className='mt-2 text-sm font-bold' style={{ color }}>
						{data.jobTitle}
					</p>
				)}
				{data.contacts.length > 0 && (
					<ul className='mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-ink/70'>
						{data.contacts.map((contact) => (
							<li key={contact}>{contact}</li>
						))}
					</ul>
				)}
			</header>
			{data.summary && (
				<Section title={GENERATOR_LABELS.summary} color={color}>
					<p className='text-[11.5px] leading-relaxed text-ink/80'>{data.summary}</p>
				</Section>
			)}
			{data.experience.length > 0 && (
				<Section title={GENERATOR_LABELS.experience} color={color}>
					<CvExperience items={data.experience} inline />
				</Section>
			)}
			{data.education.length > 0 && (
				<Section title={GENERATOR_LABELS.education} color={color}>
					<CvEducation items={data.education} inline />
				</Section>
			)}
			{data.skills.length > 0 && (
				<Section title={GENERATOR_LABELS.skills} color={color}>
					<p className='text-[11.5px] leading-relaxed'>{data.skills.join(' · ')}</p>
				</Section>
			)}
			{data.languages.length > 0 && (
				<Section title={GENERATOR_LABELS.languages} color={color}>
					<p className='text-[11.5px] leading-relaxed'>
						{data.languages.map((language) => `${language.name} – ${language.level}`).join(' · ')}
					</p>
				</Section>
			)}
		</div>
	)
}
