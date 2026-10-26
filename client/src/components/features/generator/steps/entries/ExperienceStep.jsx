import { GENERATOR_SECTIONS } from '@/constants'
import EntriesStep from './EntriesStep'

const FIELDS = [
	{ name: 'position' },
	{ name: 'company' },
	{ name: 'from' },
	{ name: 'to' },
	{ name: 'description', wide: true }
]

export default function ExperienceStep(props) {
	return (
		<EntriesStep
			{...props}
			section={GENERATOR_SECTIONS.experience}
			fields={FIELDS}
			summaryFields={['position', 'company']}
		/>
	)
}
