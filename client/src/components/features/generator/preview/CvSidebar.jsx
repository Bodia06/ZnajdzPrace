import { CvEducation, CvExperience } from './CvEntries'
import { GENERATOR_LABELS } from '@/constants'

const SIDE_TITLE =
	'mb-1.5 text-[9px] font-extrabold tracking-[0.14em] text-white/60 uppercase print:break-after-avoid'
const MAIN_TITLE =
	'mb-2 text-[10px] font-extrabold tracking-[0.14em] uppercase print:break-after-avoid'

export default function CvSidebar({ data, color }) {
	return (
		<div className='flex min-h-280.75'>
			<aside
				style={{ backgroundColor: color }}
				className='flex w-60 shrink-0 flex-col gap-6 p-7 text-white'
			>
				{data.initials && (
					<span className='flex size-20 items-center justify-center rounded-full bg-white/20 text-3xl font-extrabold'>
						{data.initials}
					</span>
				)}
				{data.contacts.length > 0 && (
					<div>
						<p className={SIDE_TITLE}>{GENERATOR_LABELS.contact}</p>
						<ul className='flex flex-col gap-1 text-[11.5px] break-words'>
							{data.contacts.map((contact) => (
								<li key={contact}>{contact}</li>
							))}
						</ul>
					</div>
				)}
				{data.skills.length > 0 && (
					<div>
						<p className={SIDE_TITLE}>{GENERATOR_LABELS.skills}</p>
						<ul className='flex flex-col gap-1 text-[11.5px]'>
							{data.skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
				)}
				{data.languages.length > 0 && (
					<div>
						<p className={SIDE_TITLE}>{GENERATOR_LABELS.languages}</p>
						<ul className='flex flex-col gap-1 text-[11.5px]'>
							{data.languages.map((language) => (
								<li key={language.id}>
									{language.name} – {language.level}
								</li>
							))}
						</ul>
					</div>
				)}
			</aside>
			<div className='flex min-w-0 flex-1 flex-col gap-5 p-8 text-ink print:block print:space-y-5'>
				<header>
					<p className='text-[30px] leading-none font-extrabold tracking-tight'>{data.fullName}</p>
					{data.jobTitle && (
						<p className='mt-1.5 text-[13px] font-bold' style={{ color }}>
							{data.jobTitle}
						</p>
					)}
				</header>
				{data.summary && (
					<div>
						<p className={MAIN_TITLE} style={{ color }}>
							{GENERATOR_LABELS.summary}
						</p>
						<p className='text-[11.5px] leading-relaxed text-ink/80'>{data.summary}</p>
					</div>
				)}
				{data.experience.length > 0 && (
					<div>
						<p className={MAIN_TITLE} style={{ color }}>
							{GENERATOR_LABELS.experience}
						</p>
						<CvExperience items={data.experience} />
					</div>
				)}
				{data.education.length > 0 && (
					<div>
						<p className={MAIN_TITLE} style={{ color }}>
							{GENERATOR_LABELS.education}
						</p>
						<CvEducation items={data.education} />
					</div>
				)}
			</div>
		</div>
	)
}
