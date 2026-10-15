export default function ResultsHeader({ id, title, description }) {
	return (
		<div className='min-w-0'>
			<h2 id={id} className='text-2xl font-extrabold tracking-tight text-ink sm:text-3xl'>
				{title.main}
				{title.place && (
					<>
						{' '}
						<span className='inline-block font-semibold whitespace-nowrap text-muted'>
							{title.place}
						</span>
					</>
				)}
			</h2>
			<p className='mt-1 text-sm font-medium text-muted sm:text-base'>{description}</p>
		</div>
	)
}
