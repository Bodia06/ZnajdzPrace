export default function HeroTitle({ item, description }) {
	const { before, highlight, after } = item

	return (
		<>
			<h2
				id='hero-title'
				className='mt-4 text-[2rem] leading-[1.02] font-extrabold tracking-[-0.04em] text-white sm:mt-7 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem]'
			>
				{before}{' '}
				<span className='inline-block -rotate-1 rounded-[0.25em] bg-accent px-[0.18em] pb-[0.04em] text-ink'>
					{highlight}
				</span>{' '}
				{after}
			</h2>
			<p className='mt-3 max-w-136 text-sm leading-relaxed text-[#9b9db3] sm:mt-6 sm:text-base sm:text-[17px] 2xl:max-w-160 2xl:text-xl'>
				{description}
			</p>
		</>
	)
}
