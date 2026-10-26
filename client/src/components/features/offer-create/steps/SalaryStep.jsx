import FormGroup from './FormGroup'
import { CONTRACT_ICONS } from '../fields/choiceIcons'
import OfferRangeField from '../fields/OfferRangeField'
import { OFFER_CREATE_DATA } from '@/constants'

const format = (value) => Number(value).toLocaleString('pl-PL')

export default function SalaryStep({ values, setValue, fieldError, renderChoice }) {
	const { from, to, contract, groups, prefix, currency, unit, summary, noContracts } =
		OFFER_CREATE_DATA.salary
	const options = OFFER_CREATE_DATA.conditions.contracts.options.filter((option) =>
		values.contracts.includes(option.value)
	)
	const { salaryFrom, salaryTo } = values
	const range = [salaryFrom && format(salaryFrom), salaryTo && format(salaryTo)]
		.filter(Boolean)
		.join(' – ')

	return (
		<div className='flex flex-col gap-6'>
			<FormGroup number={1} title={groups.range}>
				<OfferRangeField
					from={from}
					to={to}
					prefix={prefix}
					currency={currency}
					hint={unit}
					values={values}
					onChange={setValue}
					fromError={fieldError(from.name)}
					toError={fieldError(to.name)}
				/>
				{range && (
					<p className='flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl bg-primary-soft px-4 py-3 text-sm font-semibold text-ink/70'>
						{summary}
						<span className='text-base font-extrabold text-primary'>{range} zł</span>
					</p>
				)}
			</FormGroup>
			<FormGroup number={2} title={groups.contract}>
				{renderChoice(
					'radio',
					{ ...contract, options },
					{
						emptyHint: noContracts,
						icons: CONTRACT_ICONS,
						columns: 'grid-cols-1 sm:grid-cols-3'
					}
				)}
			</FormGroup>
		</div>
	)
}
