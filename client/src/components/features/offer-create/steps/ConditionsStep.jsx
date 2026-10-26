import FormGroup from './FormGroup'
import { CONTRACT_ICONS, LEVEL_ICONS, MODE_ICONS, WORKLOAD_ICONS } from '../fields/choiceIcons'
import { OFFER_CREATE_DATA } from '@/constants'

export default function ConditionsStep({ renderChoice }) {
	const { contracts, mode, levels, workload } = OFFER_CREATE_DATA.conditions

	return (
		<div className='flex flex-col gap-6'>
			<FormGroup number={1} title={contracts.label}>
				{renderChoice('checkbox', contracts, {
					icons: CONTRACT_ICONS,
					columns: 'grid-cols-1 sm:grid-cols-3'
				})}
			</FormGroup>
			<FormGroup number={2} title={mode.label}>
				{renderChoice('radio', mode, { icons: MODE_ICONS, columns: 'grid-cols-1 sm:grid-cols-3' })}
			</FormGroup>
			<FormGroup number={3} title={levels.label}>
				{renderChoice('checkbox', levels, {
					icons: LEVEL_ICONS,
					columns: 'grid-cols-1 sm:grid-cols-4'
				})}
			</FormGroup>
			<FormGroup number={4} title={workload.label}>
				{renderChoice('radio', workload, {
					icons: WORKLOAD_ICONS,
					columns: 'grid-cols-1 sm:max-w-md sm:grid-cols-2'
				})}
			</FormGroup>
		</div>
	)
}
