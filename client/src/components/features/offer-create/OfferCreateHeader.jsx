import { OFFER_CREATE_IDS } from '@/constants'

export default function OfferCreateHeader({ step, index, total, stepWord, of, title, text }) {
	return (
		<header className='flex items-start justify-between gap-4 border-b border-ink/5 pb-5 sm:pb-6'>
			<div className='flex min-w-0 flex-col items-start'>
				<p className='inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-extrabold tracking-wide text-primary uppercase'>
					<span aria-hidden='true' className='size-1.5 rounded-full bg-primary' />
					{stepWord} {index + 1} {of} {total}
				</p>
				<h2
					id={OFFER_CREATE_IDS.panel(step.id)}
					className='mt-3 text-2xl leading-tight font-extrabold tracking-tight text-balance text-ink sm:text-3xl'
				>
					{title}
				</h2>
				<p className='mt-1.5 min-h-[2lh] max-w-xl text-sm leading-relaxed text-muted sm:text-base'>
					{text}
				</p>
			</div>
			<span
				aria-hidden='true'
				className='hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-2xl font-extrabold text-accent tabular-nums shadow-[0_10px_24px_rgba(14,15,26,0.18)] sm:flex'
			>
				{String(index + 1).padStart(2, '0')}
			</span>
		</header>
	)
}
