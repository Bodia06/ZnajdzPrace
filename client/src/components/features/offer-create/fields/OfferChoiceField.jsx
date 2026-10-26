import { useId } from 'react'
import FieldMessage from '@/components/ui/FieldMessage'
import TickIcon from '@/components/ui/icons/TickIcon'

export default function OfferChoiceField({
	type,
	name,
	label,
	options,
	value,
	onChange,
	error,
	hint,
	emptyHint,
	icons,
	columns = 'grid-cols-2 sm:grid-cols-3'
}) {
	const messageId = `${useId()}-message`
	const multiple = type === 'checkbox'
	const isChecked = (option) => (multiple ? value.includes(option) : value === option)

	return (
		<fieldset className='flex min-w-0 flex-col gap-1.5'>
			<legend className='sr-only'>{label}</legend>
			{hint && <p className='pb-1.5 text-sm font-medium text-muted'>{hint}</p>}
			{options.length === 0 ? (
				<p className='text-sm font-medium text-muted'>{emptyHint}</p>
			) : (
				<div className={icons ? `grid gap-3 ${columns}` : 'flex flex-wrap gap-2.5'}>
					{options.map((option) => {
						const checked = isChecked(option.value)

						return (
							<label key={option.value} className='cursor-pointer'>
								<input
									type={type}
									name={name}
									value={option.value}
									checked={checked}
									onChange={() => onChange(option.value)}
									onClick={() => !multiple && checked && onChange('')}
									aria-invalid={Boolean(error) || undefined}
									aria-describedby={error ? messageId : undefined}
									className='peer sr-only'
								/>
								{icons ? (
									<span
										className={`relative flex h-full flex-col items-center gap-2.5 rounded-2xl border-[1.5px] px-2 py-4 text-center text-sm font-semibold text-ink transition peer-checked:border-primary peer-checked:bg-primary-soft peer-checked:font-bold peer-checked:text-primary peer-checked:shadow-[0_8px_20px_rgba(87,83,240,0.15)] peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 hover:border-primary/40 active:scale-[0.98] ${
											error ? 'border-red-500 bg-red-50' : 'border-ink/10 bg-page/70'
										}`}
									>
										<span
											className={`flex size-11 items-center justify-center rounded-full transition ${
												checked ? 'bg-white text-primary' : 'bg-white text-ink/60'
											}`}
										>
											{icons[option.value]}
										</span>
										{option.label}
										{checked && (
											<span className='absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-primary text-white'>
												<TickIcon className='size-3' />
											</span>
										)}
									</span>
								) : (
									<span
										className={`flex h-11 items-center gap-2 rounded-full border bg-white px-5 text-sm font-semibold whitespace-nowrap text-ink transition peer-checked:border-primary/40 peer-checked:bg-primary-soft peer-checked:font-bold peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 hover:border-primary/40 ${
											error ? 'border-red-500' : 'border-zinc-200'
										}`}
									>
										{checked && <TickIcon className='size-3.5' />}
										{option.label}
									</span>
								)}
							</label>
						)
					})}
				</div>
			)}
			<FieldMessage id={messageId} error={error} />
		</fieldset>
	)
}
