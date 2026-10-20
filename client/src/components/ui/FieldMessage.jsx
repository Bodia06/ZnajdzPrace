'use client'

import Collapse from '@/components/ui/Collapse'
import { useLastValue } from '@/hooks'

export default function FieldMessage({ id, error, hint }) {
	const message = error || hint
	const last = useLastValue(message)
	const tone = error || !hint ? 'font-semibold text-red-800' : 'font-medium text-muted'

	return (
		<Collapse open={Boolean(message)} offset='-mt-1.5'>
			<p id={id} className={`text-xs ${tone}`}>
				{last}
			</p>
		</Collapse>
	)
}
