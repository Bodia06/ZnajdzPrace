export default function Section({ title, children }) {
	return (
		<section className='flex flex-col gap-3 sm:gap-4'>
			<h2 className='text-lg font-extrabold tracking-tight text-ink sm:text-xl'>{title}</h2>
			{children}
		</section>
	)
}
