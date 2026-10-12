export default function HowItWorksStep({ item, number }) {
	const { title, text } = item
	const first = number === 1

	return (
		<li className='flex flex-col items-center rounded-3xl bg-page p-5 text-center sm:items-start sm:p-7 sm:text-left'>
			<span
				aria-hidden='true'
				className={`flex size-12 items-center justify-center rounded-xl text-lg font-extrabold ${
					first ? 'bg-primary text-white' : 'bg-white text-ink'
				}`}
			>
				{String(number).padStart(2, '0')}
			</span>
			<h3 className='mt-6 text-lg font-extrabold tracking-tight text-ink sm:mt-8'>{title}</h3>
			<p className='mt-2 text-sm leading-relaxed text-muted sm:text-[15px]'>{text}</p>
		</li>
	)
}
