const BAR =
	'h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-in-out motion-reduce:transition-none'

export default function BurgerButton({ open, onClick, controls }) {
	return (
		<button
			type='button'
			aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
			aria-expanded={open}
			aria-controls={controls}
			onClick={onClick}
			className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-200 hover:bg-foreground/5'
		>
			<span className={`${BAR} ${open ? 'translate-y-2 rotate-45' : ''}`} />
			<span className={`${BAR} ${open ? 'scale-x-0 opacity-0' : ''}`} />
			<span className={`${BAR} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
		</button>
	)
}
