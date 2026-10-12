export default function ColorPicker({ label, colors, value, onChange }) {
	return (
		<div role='group' aria-label={label} className='flex gap-2'>
			{colors.map((color) => {
				const selected = color.id === value

				return (
					<button
						key={color.id}
						type='button'
						aria-label={color.label}
						aria-pressed={selected}
						onClick={() => onChange(color.id)}
						className={`size-7 cursor-pointer rounded-full border-2 border-white transition-shadow ${
							selected ? 'shadow-[0_0_0_2px_var(--color-accent)]' : 'shadow-[0_0_0_1px_rgba(14,15,26,0.12)]'
						}`}
						style={{ backgroundColor: color.value }}
					/>
				)
			})}
		</div>
	)
}
