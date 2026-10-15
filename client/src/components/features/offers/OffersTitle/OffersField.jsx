export default function OffersField({
	icon,
	name,
	autoComplete,
	placeholder,
	value,
	onChange,
	clearLabel,
	clearIcon,
	onFocus,
	busy = false,
	className = '',
	inputProps,
	children
}) {
	return (
		<div className='relative min-w-0'>
			<div
				className={`flex h-12 min-w-0 items-center gap-3 rounded-xl px-3 sm:h-14 sm:px-4 ${className}`}
			>
				<label className='flex min-w-0 flex-1 items-center gap-3'>
					{icon}
					<input
						onFocus={onFocus}
						aria-busy={busy}
						type='text'
						name={name}
						autoComplete={autoComplete}
						enterKeyHint='search'
						value={value}
						onChange={(e) => onChange(e.target.value)}
						placeholder={placeholder}
						aria-label={placeholder}
						{...inputProps}
						className='min-w-0 flex-1 truncate bg-transparent text-base font-semibold text-ink outline-none! placeholder:text-subtle'
					/>
				</label>
				{clearLabel && value && (
					<button
						type='button'
						onClick={() => onChange('')}
						aria-label={clearLabel}
						className='-mr-1 cursor-pointer p-1 text-muted transition hover:text-ink'
					>
						{clearIcon}
					</button>
				)}
			</div>
			{children}
		</div>
	)
}
