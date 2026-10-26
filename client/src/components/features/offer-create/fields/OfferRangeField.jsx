import { useId } from 'react'
import { offerFieldBorder } from './styles'
import FieldMessage from '@/components/ui/FieldMessage'

const NO_SPINNER =
	'[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'

function RangeInput({ item, caption, currency, value, onChange, error, messageId }) {
	const id = useId()

	return (
		<label
			htmlFor={id}
			className='flex min-w-0 flex-1 cursor-text flex-col items-center gap-1 px-5 py-4 text-center transition hover:bg-primary/3 sm:items-stretch sm:text-left'
		>
			<span className='text-xs font-extrabold tracking-wide text-primary uppercase'>{caption}</span>
			<span className='flex items-baseline justify-center gap-2 sm:justify-start'>
				<input
					id={id}
					type={item.type ?? 'text'}
					inputMode='numeric'
					min={0}
					value={value}
					placeholder={item.placeholder}
					aria-label={item.label}
					aria-invalid={Boolean(error) || undefined}
					aria-describedby={error ? messageId : undefined}
					onChange={(event) => onChange(event.target.value)}
					className={`min-w-0 flex-1 bg-transparent text-center text-2xl font-extrabold text-ink tabular-nums outline-none placeholder:text-ink/20 sm:text-left ${NO_SPINNER}`}
				/>
				<span className='text-base font-bold text-muted'>{currency}</span>
			</span>
		</label>
	)
}

export default function OfferRangeField({
	from,
	to,
	prefix,
	currency,
	hint,
	values,
	onChange,
	fromError,
	toError
}) {
	const id = useId()
	const error = fromError || toError

	return (
		<div className='flex flex-col gap-1.5'>
			<div
				className={`flex flex-col divide-ink/10 overflow-hidden rounded-2xl border-[1.5px] bg-page/70 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 hover:border-primary/30 sm:flex-row sm:divide-x ${offerFieldBorder(error)}`}
			>
				<RangeInput
					item={from}
					caption={prefix.from}
					currency={currency}
					value={values[from.name]}
					onChange={onChange(from.name)}
					error={fromError}
					messageId={`${id}-message`}
				/>
				<RangeInput
					item={to}
					caption={prefix.to}
					currency={currency}
					value={values[to.name]}
					onChange={onChange(to.name)}
					error={toError}
					messageId={`${id}-message`}
				/>
			</div>
			<FieldMessage id={`${id}-message`} error={error} hint={hint} />
		</div>
	)
}
