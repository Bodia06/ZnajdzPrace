import CvEducation from './entries/CvEducation'
import CvExperience from './entries/CvExperience'
import CvSection from './CvSection'
import { GENERATOR_LABELS } from '@/constants'

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
				<CvSection title={GENERATOR_LABELS.summary} color={color}>
					<p className='text-[11.5px] leading-relaxed text-ink/80'>{data.summary}</p>
				</CvSection>
			)}
			{data.experience.length > 0 && (
				<CvSection title={GENERATOR_LABELS.experience} color={color}>
					<CvExperience items={data.experience} inline />
				</CvSection>
			)}
			{data.education.length > 0 && (
				<CvSection title={GENERATOR_LABELS.education} color={color}>
					<CvEducation items={data.education} inline />
				</CvSection>
			)}
			{data.skills.length > 0 && (
				<CvSection title={GENERATOR_LABELS.skills} color={color}>
					<p className='text-[11.5px] leading-relaxed'>{data.skills.join(' · ')}</p>
				</CvSection>
			)}
			{data.languages.length > 0 && (
				<CvSection title={GENERATOR_LABELS.languages} color={color}>
					<p className='text-[11.5px] leading-relaxed'>
						{data.languages.map((language) => `${language.name} – ${language.level}`).join(' · ')}
					</p>
				</CvSection>
			)}
		</div>
	)
}
