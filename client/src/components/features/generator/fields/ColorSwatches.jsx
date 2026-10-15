import TickIcon from '@/components/ui/icons/TickIcon'

export default function ColorSwatches({ label, colors, value, onChange }) {
	return (
		<fieldset className='flex flex-col gap-3'>
			<legend className='mb-3 text-sm font-bold text-ink'>{label}</legend>
			<div className='flex flex-wrap gap-3'>
				{colors.map((color) => (
					<label key={color.id} className='relative cursor-pointer'>
						<input
							type='radio'
							name='cv-color'
							value={color.id}
							checked={color.id === value}
							onChange={() => onChange(color.id)}
							className='peer sr-only'
						/>
						<span
							style={{ backgroundColor: color.value }}
							title={color.name}
							className='flex size-11 items-center justify-center rounded-full text-white ring-2 ring-transparent ring-offset-2 transition peer-checked:ring-accent peer-focus-visible:ring-primary'
						>
							<TickIcon
								className={`size-4 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${color.id === value ? 'scale-100' : 'scale-0'}`}
							/>
						</span>
						<span className='sr-only'>{color.name}</span>
					</label>
				))}
			</div>
		</fieldset>
	)
}
