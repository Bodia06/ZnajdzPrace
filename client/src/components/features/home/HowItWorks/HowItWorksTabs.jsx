export default function HowItWorksTabs({ tabs, activeId, onChange }) {
	const handleKeyDown = (event) => {
		const index = tabs.findIndex((tab) => tab.id === activeId)
		let next

		if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
		else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
		else if (event.key === 'Home') next = 0
		else if (event.key === 'End') next = tabs.length - 1
		else return

		event.preventDefault()
		onChange(tabs[next].id)
		document.getElementById(`tab-${tabs[next].id}`)?.focus()
	}

	return (
		<div
			role='tablist'
			aria-label='Rodzaj użytkownika'
			onKeyDown={handleKeyDown}
			className='flex w-full shrink-0 gap-1 sm:w-auto rounded-full bg-page p-1'
		>
			{tabs.map(({ id, label }) => {
				const selected = id === activeId

				return (
					<button
						key={id}
						type='button'
						role='tab'
						id={`tab-${id}`}
						tabIndex={selected ? 0 : -1}
						aria-selected={selected}
						aria-controls={`panel-${id}`}
						onClick={() => onChange(id)}
						className={`flex-1 cursor-pointer whitespace-nowrap sm:flex-none rounded-full px-4 py-2.5 text-sm font-bold transition-colors sm:px-6 ${
							selected ? 'bg-ink text-white' : 'text-[#5b5d73] hover:text-ink'
						}`}
					>
						{label}
					</button>
				)
			})}
		</div>
	)
}
