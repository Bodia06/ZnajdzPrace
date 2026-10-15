'use client'

import Collapse from '@/components/ui/Collapse'
import { useLastValue } from '@/hooks'

export default function FieldError({ id, message }) {
	const last = useLastValue(message)

	return (
		<Collapse open={Boolean(message)} offset='-mt-1.5'>
			<p id={id} className='text-xs font-semibold text-red-800'>
				{last}
			</p>
		</Collapse>
	)
}
