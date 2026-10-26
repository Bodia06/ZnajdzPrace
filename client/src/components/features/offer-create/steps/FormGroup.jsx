import { useId } from 'react'

export default function FormGroup({ number, title, children }) {
	const id = useId()

	return (
		<div
			role='group'
			aria-labelledby={id}
			className='flex min-w-0 flex-col gap-4 border-t border-ink/5 pt-6 first:border-t-0 first:pt-0'
		>
			<div id={id} className='flex items-center gap-3 pb-1'>
				<span className='flex size-7 items-center justify-center rounded-full bg-primary-soft text-xs font-extrabold text-primary'>
					{number}
				</span>
				<span className='text-sm font-extrabold tracking-wide text-ink uppercase'>{title}</span>
			</div>
			{children}
		</div>
	)
}
