export default function Badge({ children }) {
	return (
		<span className='rounded-full bg-lime-300 px-1.5 py-0.5 text-[10px] leading-none font-bold text-foreground'>
			{children}
		</span>
	)
}
