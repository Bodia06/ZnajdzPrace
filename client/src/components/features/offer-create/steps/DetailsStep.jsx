import FormGroup from './FormGroup'
import { OFFER_CREATE_DATA } from '@/constants'

export default function DetailsStep({ renderField, renderList }) {
	const { groups, description, requirements, skills, duties, benefits, recruitment, tags } =
		OFFER_CREATE_DATA.details

	return (
		<div className='flex flex-col gap-6'>
			<FormGroup number={1} title={groups.about}>
				{renderField(description)}
				{renderField(requirements)}
			</FormGroup>
			<FormGroup number={2} title={groups.candidate}>
				<div className='grid gap-4 md:grid-cols-2'>
					{renderList(skills)}
					{renderList(duties)}
				</div>
			</FormGroup>
			<FormGroup number={3} title={groups.offer}>
				<div className='grid gap-4 md:grid-cols-2'>
					{renderList(benefits)}
					{renderList(recruitment)}
				</div>
			</FormGroup>
			<FormGroup number={4} title={groups.tags}>
				{renderList(tags)}
			</FormGroup>
		</div>
	)
}
