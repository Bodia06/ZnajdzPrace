import { useId } from 'react'
import { CONTROL } from '@/components/features/generator/fields/styles'

export default function TextField({ item, value, onChange, className = '', ...props }) {
	const id = useId()
	const { label, placeholder, multiline, ...rest } = item

	return (
		<div className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
			<label htmlFor={id} className='text-sm font-bold text-ink'>
				{label}
			</label>
			{multiline ? (
				<textarea
					id={id}
					rows={4}
					value={value}
					placeholder={placeholder}
					onChange={(event) => onChange(event.target.value)}
					className={`${CONTROL} resize-y py-3 leading-relaxed`}
					{...props}
				/>
			) : (
				<input
					id={id}
					type={rest.type ?? 'text'}
					autoComplete={rest.autoComplete}
					value={value}
					placeholder={placeholder}
					onChange={(event) => onChange(event.target.value)}
					className={`${CONTROL} h-12`}
					{...props}
				/>
			)}
		</div>
	)
}
