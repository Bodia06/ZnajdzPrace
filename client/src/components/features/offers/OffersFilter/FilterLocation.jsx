import { useId } from 'react'
import CitySuggestions from '@/components/ui/CitySuggestions'
import PinIcon from '@/components/ui/icons/PinIcon'
import { OFFERS_FORM_ID } from '@/constants'
import { useCitySuggestions, useCombobox } from '@/hooks'

export default function FilterLocation({ item, value, onChange }) {
	const { name, label, placeholder, autoComplete } = item
	const id = useId()
	const listId = `${id}-list`
	const suggestions = useCitySuggestions(value)
	const { expanded, active, setActive, show, select, getInputProps } = useCombobox(
		suggestions,
		(city) => onChange(city.name)
	)

	return (
		<div>
			<label htmlFor={id} className='mb-3 block text-sm font-bold text-ink'>
				{label}
			</label>
			<div className='relative'>
				<div className='flex h-12 items-center gap-3 rounded-xl border border-transparent bg-page px-4 transition focus-within:border-primary/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 hover:border-primary/30'>
					<PinIcon className='size-4 text-primary' />
					<input
						id={id}
						type='text'
						name={name}
						form={OFFERS_FORM_ID}
						value={value}
						autoComplete={autoComplete}
						placeholder={placeholder}
						onChange={(e) => {
							onChange(e.target.value)
							show()
						}}
						onFocus={show}
						{...getInputProps(listId)}
						className='min-w-0 flex-1 truncate bg-transparent text-base font-semibold text-ink outline-none! placeholder:text-ink'
					/>
				</div>
				{expanded && (
					<CitySuggestions
						id={listId}
						label={label}
						items={suggestions}
						active={active}
						onSelect={select}
						onHover={setActive}
					/>
				)}
			</div>
		</div>
	)
}
