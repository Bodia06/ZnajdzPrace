import { formatSalary } from '@/lib/format'

export default function OfferSalary({ salary, unit, period }) {
	return (
		<p className='flex flex-wrap items-baseline gap-x-2 min-[750px]:block min-[750px]:text-right'>
			<span className='text-xl font-extrabold tracking-tight whitespace-nowrap text-ink min-[750px]:block min-[750px]:text-2xl'>
				{formatSalary(salary, unit)}
			</span>
			<span className='text-xs font-medium text-muted min-[750px]:mt-0.5 min-[750px]:block min-[750px]:text-sm'>
				{period}
			</span>
		</p>
	)
}
