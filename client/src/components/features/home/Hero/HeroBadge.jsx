export default function HeroBadge({ item }) {
	const { label, text } = item

	return (
		<div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-1 pr-3 pl-1 text-[11px] sm:gap-2.5 sm:py-1.5 sm:pr-4 sm:pl-1.5 sm:text-xs font-semibold 2xl:text-sm text-white/90 backdrop-blur'>
			<span className='rounded-full bg-accent px-2 py-0.5 text-[9px] sm:px-2.5 sm:py-1 sm:text-[10px] font-extrabold tracking-wide text-ink uppercase'>
				{label}
			</span>
			{text}
		</div>
	)
}
