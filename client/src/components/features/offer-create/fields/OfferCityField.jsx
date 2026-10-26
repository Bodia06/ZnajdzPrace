import { useId } from 'react'
import { OFFER_FIELD_BOX, OFFER_FIELD_INPUT, offerFieldBorder } from './styles'
import CitySuggestions from '@/components/features/offers/shared/CitySuggestions'
import FieldMessage from '@/components/ui/FieldMessage'
import { useCitySuggestions, useCombobox } from '@/hooks'

export default function OfferCityField({ item, icon, value, onChange, error }) {
	const id = useId()
	const listId = `${id}-list`
	const messageId = `${id}-message`
	const suggestions = useCitySuggestions(value)
	const { expanded, active, setActive, show, select, getInputProps } = useCombobox(
		suggestions,
		(city) => onChange(city.name)
	)

	return (
		<div className='flex min-w-0 flex-col gap-1.5'>
			<label htmlFor={id} className='sr-only'>
				{item.label}
			</label>
			<div className='relative'>
				<div className={`${OFFER_FIELD_BOX} ${offerFieldBorder(error)}`}>
					<span className='text-primary'>{icon}</span>
					<input
						id={id}
						type='text'
						value={value}
						placeholder={item.placeholder}
						autoComplete={item.autoComplete}
						onChange={(event) => {
							onChange(event.target.value)
							show()
						}}
						onFocus={show}
						aria-invalid={Boolean(error) || undefined}
						aria-describedby={error ? messageId : undefined}
						{...getInputProps(listId)}
						className={OFFER_FIELD_INPUT}
					/>
				</div>
				{expanded && (
					<CitySuggestions
						id={listId}
						label={item.label}
						items={suggestions}
						active={active}
						onSelect={select}
						onHover={setActive}
					/>
				)}
			</div>
			<FieldMessage id={messageId} error={error} />
		</div>
	)
}
