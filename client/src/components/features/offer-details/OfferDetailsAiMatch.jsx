import Button from '@/components/ui/Button'
import { LINKS } from '@/constants'

export default function OfferDetailsAiMatch({ labels }) {
	return (
		<section className='flex flex-col items-start gap-3 rounded-3xl bg-primary p-5 font-(family-name:--font-jakarta) text-white shadow-[0_8px_30px_rgba(87,83,240,0.25)] sm:col-span-2 sm:p-6 lg:col-span-1'>
			<span className='rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-ink'>
				{labels.badge}
			</span>
			<h2 className='text-xl leading-tight font-extrabold tracking-tight text-balance'>
				{labels.title}
			</h2>
			<p className='text-sm leading-relaxed text-white/75'>{labels.text}</p>
			<Button
				href={LINKS.ANALYSIS}
				className='mt-2 w-full rounded-full bg-white py-3.5 text-center text-primary transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-8 lg:w-full'
			>
				{labels.action}
			</Button>
		</section>
	)
}
