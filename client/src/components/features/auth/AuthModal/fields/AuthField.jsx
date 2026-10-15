import { useId } from 'react'
import FieldError from './FieldError'

const BOX =
	'flex items-center gap-3 rounded-2xl border-[1.5px] bg-page/70 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10'

export default function AuthField({
	label,
	labelAside,
	icon,
	error,
	invalid = false,
	trailing,
	children,
	className = '',
	...inputProps
}) {
	const id = useId()
	const errorId = `${id}-error`
	const hasError = invalid || Boolean(error)

	return (
		<div className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
			<div className='flex items-center justify-between gap-2 text-sm font-bold text-ink'>
				<label htmlFor={id}>{label}</label>
				{labelAside}
			</div>
			<div
				className={`${BOX} ${icon ? 'pl-4' : 'px-4'} ${trailing ? 'pr-1.5' : ''} ${
					hasError ? 'border-red-500 bg-red-50' : 'border-ink/10'
				}`}
			>
				{icon}
				<input
					id={id}
					aria-invalid={hasError || undefined}
					aria-describedby={error ? errorId : undefined}
					className='min-w-0 flex-1 bg-transparent py-3.5 text-base font-medium text-ink outline-none! placeholder:text-subtle'
					{...inputProps}
				/>
				{trailing}
			</div>
			<FieldError id={errorId} message={error} />
			{children}
		</div>
	)
}
