import Link from 'next/link'

export default function FaqIntro({ badge, title, description, button }) {
	return (
		<div className='flex flex-col items-center text-center lg:sticky lg:top-8 lg:items-start lg:text-left'>
			<p className='text-xs font-bold tracking-wide text-primary uppercase sm:text-sm'>{badge}</p>
			<h2
				id='faq-title'
				className='mt-2 text-3xl leading-[1.05] font-extrabold tracking-[-0.04em] text-nowrap text-ink sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'
			>
				{title}
			</h2>
			<Link
				href={button.link}
				className='mt-5 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-125'
			>
				{button.title}
			</Link>
			<p className='mt-5 max-w-md text-sm text-pretty text-muted sm:text-base'>{description}</p>
		</div>
	)
}
