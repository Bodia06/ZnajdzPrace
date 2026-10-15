import { OFFERS_IDS } from '@/constants'

export default function FilterChips({ name, options, selected, onToggle }) {
	return (
		<div className='flex flex-wrap gap-2'>
			{options.map((option) => (
				<label key={option.value} className='cursor-pointer'>
					<input
						type='checkbox'
						name={name}
						form={OFFERS_IDS.form}
						value={option.value}
						checked={selected.includes(option.value)}
						onChange={() => onToggle(option.value)}
						className='peer sr-only'
					/>
					<span className='flex h-9 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-semibold whitespace-nowrap text-ink transition peer-checked:border-primary/40 peer-checked:bg-primary-soft peer-checked:font-bold peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 hover:border-primary/40 active:scale-95'>
						{option.label}
					</span>
				</label>
			))}
		</div>
	)
}
