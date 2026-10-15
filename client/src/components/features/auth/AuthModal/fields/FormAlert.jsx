'use client'

import Collapse from '@/components/ui/Collapse'
import AlertIcon from '@/components/ui/icons/AlertIcon'
import { useLastValue } from '@/hooks'

export default function FormAlert({ message }) {
	const last = useLastValue(message)

	return (
		<Collapse open={Boolean(message)} offset='-mb-4'>
			<div
				role={message ? 'alert' : undefined}
				className='flex items-start gap-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800'
			>
				<AlertIcon className='mt-px' />
				<p>{last}</p>
			</div>
		</Collapse>
	)
}
