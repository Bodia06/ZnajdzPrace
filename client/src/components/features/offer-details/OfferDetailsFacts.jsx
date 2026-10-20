import { formatSalaryShort } from '@/lib/format'

const CARD =
	'flex min-w-0 flex-col justify-center gap-1 rounded-2xl px-4 py-3.5 sm:gap-1.5 sm:rounded-3xl sm:px-5 sm:py-4 lg:px-6 lg:py-5'
const LABEL = 'text-[10px] font-bold tracking-wider text-muted uppercase sm:text-[11px]'
const VALUE =
	'text-[15px] leading-snug font-extrabold tracking-tight text-balance wrap-break-word text-ink sm:text-base lg:text-lg'

function Fact({ label, children }) {
	return (
		<div className={`${CARD} bg-white shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5`}>
			<dt className={LABEL}>{label}</dt>
			<dd className={VALUE}>{children}</dd>
		</div>
	)
}

export default function OfferDetailsFacts({ offer, labels }) {
	const { salary, contracts, mode, level, workload } = offer

	const contract = contracts.map((type) => labels.contract.values[type] ?? type).join(' / ')
	const levelLabel = labels.level.values[level] ?? level

	return (
		<dl
			aria-label={labels.label}
			className='grid grid-cols-2 gap-2.5 font-(family-name:--font-jakarta) sm:grid-cols-4 sm:gap-3 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-4'
		>
			<div className={`${CARD} col-span-2 bg-ink sm:col-span-4 lg:col-span-1`}>
				<dt className={`${LABEL} text-white/60`}>{labels.salary.label}</dt>
				<dd className='text-2xl font-extrabold tracking-tight whitespace-nowrap text-accent sm:text-3xl lg:text-2xl xl:text-[28px]'>
					{formatSalaryShort(salary, labels.salary)}
				</dd>
				<dd className='text-xs font-medium text-white/60'>{labels.salary.period}</dd>
			</div>
			<Fact label={labels.contract.label}>{contract}</Fact>
			<Fact label={labels.mode.label}>{labels.mode.values[mode] ?? mode}</Fact>
			<Fact label={labels.level.label}>{levelLabel}</Fact>
			<Fact label={labels.workload.label}>{labels.workload.values[workload] ?? workload}</Fact>
		</dl>
	)
}
