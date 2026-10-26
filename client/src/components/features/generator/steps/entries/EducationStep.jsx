import { GENERATOR_SECTIONS } from '@/constants'
import EntriesStep from './EntriesStep'

const FIELDS = [
	{ name: 'school', wide: true },
	{ name: 'degree', wide: true },
	{ name: 'from' },
	{ name: 'to' }
]

export default function EducationStep(props) {
	return (
		<EntriesStep
			{...props}
			section={GENERATOR_SECTIONS.education}
			fields={FIELDS}
			summaryFields={['school', 'degree']}
		/>
	)
}
