import Fact from './Fact'
import { CARD, LABEL, VALUE } from './styles'
import { formatSalaryShort } from '@/lib/format'

export default function OfferDetailsFacts({ offer, labels }) {
	const { salary, contracts, mode, levels, workload } = offer

	const contract = contracts.map((type) => labels.contract.values[type] ?? type).join(' / ')
	const levelLabel = levels.map((value) => labels.level.values[value] ?? value).join(' / ')
	const salaryNote = salary?.contract
		? ` (${labels.contract.values[salary.contract] ?? salary.contract})`
		: ''

	return (
		<dl
			aria-label={labels.label}
			className='grid grid-cols-2 gap-2.5 font-(family-name:--font-jakarta) sm:grid-cols-4 sm:gap-3 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-4'
		>
			<div className={`${CARD} col-span-2 bg-ink sm:col-span-4 lg:col-span-1`}>
				<dt className={`${LABEL} text-white/60`}>{labels.salary.label}</dt>
				<dd className='text-2xl font-extrabold tracking-tight whitespace-nowrap text-accent sm:text-3xl lg:text-2xl xl:text-[28px]'>
					{salary ? formatSalaryShort(salary, labels.salary) : labels.salary.missing}
				</dd>
				{salary && (
					<dd className='text-xs font-medium text-white/60'>
						{labels.salary.period}
						{salaryNote}
					</dd>
				)}
			</div>
			<Fact label={labels.contract.label}>{contract}</Fact>
			{mode && <Fact label={labels.mode.label}>{labels.mode.values[mode] ?? mode}</Fact>}
			{levels.length > 0 && <Fact label={labels.level.label}>{levelLabel}</Fact>}
			{workload && (
				<Fact label={labels.workload.label}>{labels.workload.values[workload] ?? workload}</Fact>
			)}
		</dl>
	)
}
