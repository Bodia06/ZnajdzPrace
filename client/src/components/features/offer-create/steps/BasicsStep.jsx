import FormGroup from './FormGroup'
import BasicsTips from './BasicsTips'
import BasicsValidity from './BasicsValidity'
import BriefcaseIcon from '@/components/ui/icons/BriefcaseIcon'
import BuildingIcon from '@/components/ui/icons/BuildingIcon'
import CalendarIcon from '@/components/ui/icons/CalendarIcon'
import PinIcon from '@/components/ui/icons/PinIcon'
import { OFFER_CREATE_DATA } from '@/constants'

export default function BasicsStep({ values, setValue, renderInput, renderCity }) {
	const { groups, position, company, location, validUntil, presets, tips } =
		OFFER_CREATE_DATA.basics

	return (
		<div className='flex flex-col gap-6'>
			<div className='flex flex-col gap-6'>
				<FormGroup number={1} title={groups.position}>
					{renderInput(position, <BriefcaseIcon />)}
				</FormGroup>
				<FormGroup number={2} title={groups.company}>
					<div className='grid gap-5 sm:grid-cols-2'>
						{renderInput(company, <BuildingIcon />)}
						{renderCity(location, <PinIcon className='size-5' />)}
					</div>
				</FormGroup>
				<FormGroup number={3} title={groups.validity}>
					{renderInput(validUntil, <CalendarIcon />, { className: 'sm:max-w-xs' })}
					<BasicsValidity
						presets={presets}
						value={values.validUntil}
						onChange={setValue('validUntil')}
					/>
				</FormGroup>
			</div>

			<BasicsTips tips={tips} />
		</div>
	)
}
