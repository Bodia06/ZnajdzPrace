export default function ToolsTitle({ badge, title, description }) {
	return (
		<div className='text-center sm:text-left'>
			<p className='text-xs font-bold tracking-wide text-primary uppercase sm:text-sm'>{badge}</p>
			<h2
				id='tools-title'
				className='mt-2 max-w-3xl text-3xl leading-[1.05] font-extrabold tracking-[-0.04em] text-balance text-ink sm:text-5xl lg:text-6xl'
			>
				{title}
			</h2>
			<p className='mt-3 text-sm text-muted sm:text-base'>{description}</p>
		</div>
	)
}
