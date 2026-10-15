export default function ResultsEmpty({ title, text }) {
	return (
		<div role='status' className='rounded-3xl bg-white p-8 text-center ring-1 ring-ink/5 sm:p-12'>
			<p className='text-lg font-extrabold text-ink sm:text-xl'>{title}</p>
			<p className='mt-2 text-sm font-medium text-muted sm:text-base'>{text}</p>
		</div>
	)
}
