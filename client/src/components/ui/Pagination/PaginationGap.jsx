import DotsIcon from '@/components/ui/icons/DotsIcon'

export default function PaginationGap({ className = '' }) {
	return (
		<li aria-hidden='true' className={className}>
			<span className='flex h-11 w-6 items-end justify-center pb-4 text-subtle sm:h-13 sm:w-8 sm:pb-5'>
				<DotsIcon />
			</span>
		</li>
	)
}
