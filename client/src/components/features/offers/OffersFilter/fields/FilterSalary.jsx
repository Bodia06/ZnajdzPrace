import { useId } from 'react'
import MinusIcon from '@/components/ui/icons/MinusIcon'
import PlusIcon from '@/components/ui/icons/PlusIcon'
import { OFFERS_IDS } from '@/constants'
import { canDecreaseSalary, stepSalary } from '@/lib/offers/salary'

const STEP_BUTTON =
	'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-white text-ink shadow-sm transition hover:bg-primary-soft hover:text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-40'

export default function FilterSalary({ item, value, onChange }) {
	const { name, label, unit, step, placeholder } = item
	const id = useId()

	return (
		<div>
			<label htmlFor={id} className='mb-3 block text-sm font-bold text-ink'>
				{label}
			</label>
			<div className='flex h-12 items-center gap-2 rounded-xl border border-transparent bg-page pr-2 pl-4 transition focus-within:border-primary/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 hover:border-primary/30'>
				<input
					id={id}
					type='number'
					name={name}
					form={OFFERS_IDS.form}
					value={value}
					min={0}
					step={step}
					inputMode='numeric'
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					className='appearance-textfield min-w-0 flex-1 bg-transparent text-base font-semibold text-ink outline-none! placeholder:text-subtle [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
				/>
				<span className='text-sm font-semibold text-muted'>{unit}</span>
				<button
					type='button'
					onClick={() => onChange(stepSalary(value, -step))}
					disabled={!canDecreaseSalary(value)}
					aria-label={item.decrease}
					className={STEP_BUTTON}
				>
					<MinusIcon />
				</button>
				<button
					type='button'
					onClick={() => onChange(stepSalary(value, step))}
					aria-label={item.increase}
					className={STEP_BUTTON}
				>
					<PlusIcon />
				</button>
			</div>
		</div>
	)
}
