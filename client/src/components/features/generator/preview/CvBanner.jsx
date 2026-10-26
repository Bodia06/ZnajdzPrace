import CvEducation from './entries/CvEducation'
import CvExperience from './entries/CvExperience'
import { GENERATOR_LABELS } from '@/constants'

const TITLE = 'mb-2 text-[10px] font-extrabold tracking-[0.14em] uppercase print:break-after-avoid'

export default function CvBanner({ data, color }) {
	return (
		<div className='flex min-h-280.75 flex-col text-ink'>
			<header style={{ backgroundColor: color }} className='px-10 py-9 text-white'>
				<p className='text-4xl leading-none font-extrabold tracking-tight'>{data.fullName}</p>
				{data.jobTitle && <p className='mt-2 text-sm font-bold text-white/80'>{data.jobTitle}</p>}
				{data.contacts.length > 0 && (
					<ul className='mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-white/85'>
						{data.contacts.map((contact) => (
							<li key={contact}>{contact}</li>
						))}
					</ul>
				)}
			</header>
			<div className='flex flex-1 gap-8 p-10'>
				<div className='flex min-w-0 flex-1 flex-col gap-5 print:block print:space-y-5'>
					{data.summary && (
						<div>
							<p className={TITLE} style={{ color }}>
								{GENERATOR_LABELS.summary}
							</p>
							<p className='text-[11.5px] leading-relaxed text-ink/80'>{data.summary}</p>
						</div>
					)}
					{data.experience.length > 0 && (
						<div>
							<p className={TITLE} style={{ color }}>
								{GENERATOR_LABELS.experience}
							</p>
							<CvExperience items={data.experience} />
						</div>
					)}
					{data.education.length > 0 && (
						<div>
							<p className={TITLE} style={{ color }}>
								{GENERATOR_LABELS.education}
							</p>
							<CvEducation items={data.education} />
						</div>
					)}
				</div>
				{(data.skills.length > 0 || data.languages.length > 0) && (
					<aside className='flex w-48 shrink-0 flex-col gap-5'>
						{data.skills.length > 0 && (
							<div>
								<p className={TITLE} style={{ color }}>
									{GENERATOR_LABELS.skills}
								</p>
								<ul className='flex flex-wrap gap-1.5'>
									{data.skills.map((skill) => (
										<li
											key={skill}
											style={{ backgroundColor: `${color}1a`, color }}
											className='rounded-full px-2.5 py-1 text-[10.5px] font-bold'
										>
											{skill}
										</li>
									))}
								</ul>
							</div>
						)}
						{data.languages.length > 0 && (
							<div>
								<p className={TITLE} style={{ color }}>
									{GENERATOR_LABELS.languages}
								</p>
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
				)}
			</div>
		</div>
	)
}
