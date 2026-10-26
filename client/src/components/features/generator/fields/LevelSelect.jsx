import { useId } from 'react'
import { CONTROL } from './styles'
import { GENERATOR_LEVELS } from '@/constants'

export default function LevelSelect({ label, value, onChange }) {
	const id = useId()

	return (
		<div className='flex flex-col gap-1.5'>
			<label htmlFor={id} className='text-sm font-bold text-ink'>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className={`${CONTROL} h-12 cursor-pointer`}
			>
				{GENERATOR_LEVELS.map((level) => (
					<option key={level} value={level}>
						{level}
					</option>
				))}
			</select>
		</div>
	)
}
