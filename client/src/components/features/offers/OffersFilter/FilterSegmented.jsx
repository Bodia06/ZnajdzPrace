import { OFFERS_FORM_ID } from '@/constants'

export default function FilterSegmented({ name, options, value, onChange }) {
	const index = options.findIndex((option) => option.value === value)

	return (
		<div className='relative grid grid-cols-3 gap-1 rounded-xl bg-page p-1'>
			<span
				aria-hidden='true'
				style={{ transform: `translateX(calc(${Math.max(index, 0)} * (100% + 0.25rem)))` }}
				className={`absolute top-1 bottom-1 left-1 w-[calc((100%-1.5rem)/3)] rounded-lg bg-white shadow-[0_2px_8px_rgba(14,15,26,0.1)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
					index < 0 ? 'opacity-0' : 'opacity-100'
				}`}
			/>
			{options.map((option) => (
				<label key={option.value} className='relative cursor-pointer'>
					<input
						type='radio'
						name={name}
						form={OFFERS_FORM_ID}
						value={option.value}
						checked={value === option.value}
						onChange={() => onChange(option.value)}
						className='peer sr-only'
					/>
					<span className='flex h-10 items-center justify-center rounded-lg text-sm font-semibold text-muted transition-colors peer-checked:font-bold peer-checked:text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 hover:text-ink'>
						{option.label}
					</span>
				</label>
			))}
		</div>
	)
}
