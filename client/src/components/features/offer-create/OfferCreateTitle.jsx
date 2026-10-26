import { OFFER_CREATE_IDS } from '@/constants'

export default function OfferCreateTitle({ title, text }) {
	return (
		<section
			aria-labelledby={OFFER_CREATE_IDS.title}
			className='dot-grid relative rounded-3xl bg-ink px-4 py-6 text-center text-white sm:rounded-4xl sm:px-8 sm:py-9 sm:text-left lg:px-12 lg:py-10'
		>
			<h1
				id={OFFER_CREATE_IDS.title}
				className='text-3xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl'
			>
				{title.before}{' '}
				<span className='inline-block -rotate-1 rounded-[0.25em] bg-accent px-[0.18em] pb-[0.04em] text-ink'>
					{title.highlight}
				</span>{' '}
				{title.after}
			</h1>
			<p className='mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:mx-0 sm:text-base'>
				{text}
			</p>
		</section>
	)
}
