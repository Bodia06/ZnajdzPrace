import { useId } from 'react'
import { CONTROL } from '@/components/features/generator/fields/styles'
import FieldMessage from '@/components/ui/FieldMessage'

const INVALID = 'border-red-500! bg-red-50 focus:bg-white focus:ring-red-500/15!'

export default function TextField({
	item,
	value,
	onChange,
	onBlur,
	error,
	className = '',
	...props
}) {
	const id = useId()
	const messageId = `${id}-message`
	const { label, placeholder, multiline, hint, maxLength, ...rest } = item
	const control = `${CONTROL} ${error ? INVALID : ''}`
	const shared = {
		id,
		value,
		placeholder,
		maxLength,
		onBlur,
		onChange: (event) => onChange(event.target.value),
		'aria-invalid': Boolean(error) || undefined,
		'aria-describedby': error || hint ? messageId : undefined
	}

	return (
		<div className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
			<div className='flex items-baseline justify-between gap-2'>
				<label htmlFor={id} className='text-sm font-bold text-ink'>
					{label}
				</label>
				{multiline && maxLength && (
					<span className='text-xs font-medium text-subtle tabular-nums'>
						{value.length}/{maxLength}
					</span>
				)}
			</div>
			{multiline ? (
				<textarea
					rows={4}
					className={`${control} resize-y py-3 leading-relaxed`}
					{...shared}
					{...props}
				/>
			) : (
				<input
					type={rest.type ?? 'text'}
					autoComplete={rest.autoComplete}
					className={`${control} h-12`}
					{...shared}
					{...props}
				/>
			)}
			<FieldMessage id={messageId} error={error} hint={hint} />
		</div>
	)
}
