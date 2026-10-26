import { useId } from 'react'
import { OFFER_FIELD_BOX, OFFER_FIELD_INPUT, offerFieldBorder } from './styles'
import FieldMessage from '@/components/ui/FieldMessage'

export default function OfferInputField({
	item,
	icon,
	value,
	onChange,
	error,
	className = '',
	...inputProps
}) {
	const id = useId()
	const messageId = `${id}-message`

	return (
		<div className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
			<label htmlFor={id} className='sr-only'>
				{item.label}
			</label>
			<div className={`${OFFER_FIELD_BOX} ${offerFieldBorder(error)}`}>
				<span className='text-primary'>{icon}</span>
				<input
					id={id}
					type={item.type ?? 'text'}
					value={value}
					placeholder={item.placeholder}
					autoComplete={item.autoComplete}
					onChange={(event) => onChange(event.target.value)}
					aria-invalid={Boolean(error) || undefined}
					aria-describedby={error ? messageId : undefined}
					className={OFFER_FIELD_INPUT}
					{...inputProps}
				/>
			</div>
			<FieldMessage id={messageId} error={error} />
		</div>
	)
}
