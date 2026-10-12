export default function ToggleGroup({ label, options, value, onChange }) {
	return (
		<div role='group' aria-label={label} className='flex w-full shrink-0 gap-1 rounded-full bg-white/10 p-1 sm:w-auto'>
			{options.map(({ id, label: text }) => {
				const selected = id === value

				return (
					<button
						key={id}
						type='button'
						aria-pressed={selected}
						onClick={() => onChange(id)}
						className={`flex-1 cursor-pointer rounded-full px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-colors sm:flex-none sm:px-4 sm:text-sm ${
							selected ? 'bg-accent text-ink' : 'text-white/80 hover:text-white'
						}`}
					>
						{text}
					</button>
				)
			})}
		</div>
	)
}
