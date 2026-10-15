import TickIcon from '@/components/ui/icons/TickIcon'
import { OFFERS_IDS } from '@/constants'

export default function FilterCheckbox({ name, option, checked, onChange }) {
	return (
		<label className='group -mx-2 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-page'>
			<input
				type='checkbox'
				name={name}
				form={OFFERS_IDS.form}
				value={option.value}
				checked={checked}
				onChange={() => onChange(option.value)}
				className='peer sr-only'
			/>
			<span className='flex size-5 shrink-0 items-center justify-center rounded-md border-[1.5px] border-subtle bg-white text-white shadow-sm transition group-hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 [&>svg]:scale-0 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:[&>svg]:scale-100'>
				<TickIcon />
			</span>
			<span className='text-sm font-semibold text-muted transition peer-checked:text-ink'>
				{option.label}
			</span>
		</label>
	)
}
