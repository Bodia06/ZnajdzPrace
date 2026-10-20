import OfferMap from './OfferMap'
import Section from './Section'
import PinIcon from '@/components/ui/icons/PinIcon'
import TickIcon from '@/components/ui/icons/TickIcon'
import { formatYears } from '@/lib/format'

const CARD =
	'rounded-3xl bg-white p-5 font-(family-name:--font-jakarta) shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5 sm:p-8'
const BODY = 'text-sm leading-relaxed text-ink/80 sm:text-[15px]'

function skillLabel({ name, required, years }, labels) {
	if (!required) return `${labels.niceToHave} ${name}`
	return years ? `${name} · ${labels.minimum} ${formatYears(years)}` : name
}

export default function OfferDetailsContent({ offer, labels }) {
	const {
		description,
		duties,
		skills,
		requirementsNote,
		benefits,
		address,
		location,
		coordinates
	} = offer
	const mapsUrl = coordinates
		? `https://www.google.com/maps/search/?api=1&query=${coordinates.join(',')}`
		: ''
	const required = skills.filter((skill) => skill.required)
	const optional = skills.filter((skill) => !skill.required)

	return (
		<article className={`flex min-w-0 flex-col gap-8 sm:gap-10 ${CARD}`}>
			<Section title={labels.about}>
				<p className={BODY}>{description}</p>
			</Section>

			{duties.length > 0 && (
				<Section title={labels.duties}>
					<ul className='flex flex-col gap-3'>
						{duties.map((duty) => (
							<li key={duty} className='flex items-start gap-3 text-sm text-ink/80 sm:text-[15px]'>
								<span className='mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary'>
									<TickIcon />
								</span>
								{duty}
							</li>
						))}
					</ul>
				</Section>
			)}

			{skills.length > 0 && (
				<Section title={labels.requirements}>
					<ul className='flex flex-wrap gap-2'>
						{[...required, ...optional].map((skill) => (
							<li
								key={skill.name}
								className={`rounded-full px-3.5 py-2 text-xs font-bold sm:text-[13px] ${
									skill.required ? 'bg-ink text-white' : 'bg-page text-muted'
								}`}
							>
								{skillLabel(skill, labels)}
							</li>
						))}
					</ul>
					{requirementsNote && <p className={BODY}>{requirementsNote}</p>}
				</Section>
			)}

			{benefits.length > 0 && (
				<Section title={labels.benefits}>
					<ul className='grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4'>
						{benefits.map((benefit) => (
							<li
								key={benefit}
								className='flex items-center rounded-2xl bg-page px-4 py-3.5 text-sm font-semibold text-ink'
							>
								{benefit}
							</li>
						))}
					</ul>
				</Section>
			)}

			<Section title={labels.place}>
				{coordinates ? (
					<div className='flex flex-col gap-3'>
						<div className='relative isolate h-64 overflow-hidden rounded-2xl ring-1 ring-ink/10 sm:h-80'>
							<OfferMap coordinates={coordinates} label={labels.mapLabel} />
							<a
								href={mapsUrl}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={labels.mapOpen}
								tabIndex={-1}
								className='absolute inset-0 hidden pointer-coarse:block'
							/>
						</div>
						<a
							href={mapsUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='self-start text-sm font-bold text-primary transition hover:underline'
						>
							{labels.mapOpen}
						</a>
					</div>
				) : (
					<p className='flex items-center gap-2 text-sm font-semibold text-ink'>
						<PinIcon className='size-4 text-primary' />
						{address || location}
					</p>
				)}
			</Section>
		</article>
	)
}
