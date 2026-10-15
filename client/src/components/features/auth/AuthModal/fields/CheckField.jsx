import FieldError from './FieldError'
import TickIcon from '@/components/ui/icons/TickIcon'

export default function CheckField({ name, checked, onChange, error, children }) {
	return (
		<div className='flex flex-col gap-1.5'>
			<label className='group flex cursor-pointer items-start gap-3 text-sm font-medium text-ink'>
				<input
					type='checkbox'
					name={name}
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
					aria-invalid={Boolean(error) || undefined}
					className='peer sr-only'
				/>
				<span
					className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-[1.5px] bg-white text-white transition peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 [&>svg]:scale-0 [&>svg]:transition-transform peer-checked:[&>svg]:scale-100 ${
						error ? 'border-red-500' : 'border-subtle group-hover:border-primary'
					}`}
				>
					<TickIcon />
				</span>
				<span>{children}</span>
			</label>
			<FieldError message={error} />
		</div>
	)
}
