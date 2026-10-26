import { dateInDays } from '@/lib/offerForm'

export default function BasicsValidity({ presets, value, onChange }) {
	return (
		<div className='flex flex-wrap items-center gap-2'>
			<span className='text-sm font-semibold text-muted'>{presets.label}</span>
			{presets.days.map((days) => {
				const date = dateInDays(days)
				const active = value === date

				return (
					<button
						key={days}
						type='button'
						aria-pressed={active}
						onClick={() => onChange(active ? '' : date)}
						className={`flex h-9 cursor-pointer items-center rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition active:scale-95 ${
							active
								? 'border-primary/40 bg-primary-soft font-bold text-primary'
								: 'border-zinc-200 bg-white text-ink hover:border-primary/40'
						}`}
					>
						{days} {presets.unit}
					</button>
				)
			})}
		</div>
	)
}
