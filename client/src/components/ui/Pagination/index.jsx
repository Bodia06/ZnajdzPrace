import PaginationBtn from './PaginationBtn'
import PaginationPages from './PaginationPages'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function Pagination({
	labels,
	pages,
	compactPages = pages,
	prevHref,
	nextHref,
	className = ''
}) {
	return (
		<nav aria-label={labels.label} className={className}>
			<ul className='flex items-center justify-center gap-1.5 sm:gap-3'>
				<li>
					<PaginationBtn href={prevHref} label={labels.prev}>
						<ArrowIcon className='size-4 rotate-180' />
					</PaginationBtn>
				</li>
				<PaginationPages labels={labels} pages={compactPages} className='sm:hidden' />
				<PaginationPages labels={labels} pages={pages} className='hidden sm:flex' />
				<li>
					<PaginationBtn href={nextHref} label={labels.next}>
						<ArrowIcon className='size-4' />
					</PaginationBtn>
				</li>
			</ul>
		</nav>
	)
}
