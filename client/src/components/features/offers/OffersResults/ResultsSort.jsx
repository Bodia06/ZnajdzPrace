'use client'

import { useRouter } from 'next/navigation'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function ResultsSort({ item, value, options }) {
	const router = useRouter()

	const change = (e) => {
		const option = options.find((candidate) => candidate.value === e.target.value)
		if (option) router.push(option.href, { scroll: false })
	}

	return (
		<label className='flex w-full items-center gap-3 sm:w-auto sm:shrink-0'>
			<span className='text-sm font-semibold whitespace-nowrap text-muted'>{item.label}</span>
			<span className='relative block flex-1 sm:flex-none'>
				<select
					name={item.name}
					value={value}
					onChange={change}
					className='h-11 w-full cursor-pointer appearance-none rounded-lg bg-white pr-9 pl-3 text-sm font-bold text-ink ring-1 ring-ink/10 transition outline-none hover:ring-primary/40 focus-visible:ring-2 focus-visible:ring-primary/50 sm:h-10 sm:w-auto sm:min-w-44'
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<ArrowIcon className='pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 rotate-90 text-muted' />
			</span>
		</label>
	)
}
