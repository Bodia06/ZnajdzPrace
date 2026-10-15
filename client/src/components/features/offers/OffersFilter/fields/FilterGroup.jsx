import { useId } from 'react'

export default function FilterGroup({ label, children }) {
	const id = useId()

	return (
		<div role='group' aria-labelledby={id} className='min-w-0'>
			<div id={id} className='mb-3 text-sm font-bold text-ink'>
				{label}
			</div>
			{children}
		</div>
	)
}
