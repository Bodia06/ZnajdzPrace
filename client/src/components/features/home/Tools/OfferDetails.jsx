import PlusIcon from '@/components/ui/PlusIcon'
import ScoreRing from '@/components/ui/ScoreRing'
import TickIcon from '@/components/ui/TickIcon'

const SKILL_TONES = {
	matched: 'bg-white text-emerald-700',
	missing: 'border-2 border-dashed border-white/50 bg-black/15 text-white'
}

export default function OfferDetails({ item, selected }) {
	const { score, verdict, skills } = item

	return (
		<div
			aria-hidden={!selected}
			inert={!selected}
			className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-300 motion-reduce:transition-none ${
				selected ? 'visible opacity-100' : 'invisible opacity-0'
			}`}
		>
			<div className='flex items-center gap-4 sm:gap-5'>
				<ScoreRing
					value={score}
					fill='var(--color-accent)'
					track='rgb(255 255 255 / 0.25)'
					innerClassName='bg-primary text-white'
					className='size-24 sm:size-28'
				>
					<span className='text-xl font-extrabold sm:text-2xl'>{score}%</span>
				</ScoreRing>
				<p className='text-base leading-snug font-extrabold text-balance text-white sm:text-lg'>{verdict}</p>
			</div>
			<ul className='mt-5 flex flex-wrap gap-2'>
				{skills.map(({ id, text, matched }) => (
					<li
						key={id}
						className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-bold ${
							SKILL_TONES[matched ? 'matched' : 'missing']
						}`}
					>
						{matched ? <TickIcon /> : <PlusIcon />}
						<span>{text}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
