import PaginationBtn from './PaginationBtn'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function Pagination({ labels, pages, prevHref, nextHref, className = '' }) {
	return (
		<nav aria-label={labels.label} className={className}>
			<ul className='flex items-center gap-2 sm:gap-3'>
				<li>
					<PaginationBtn href={prevHref} label={labels.prev}>
						<ArrowIcon className='size-4 rotate-180' />
					</PaginationBtn>
				</li>
				{pages.map((page) => (
					<li key={page.number}>
						<PaginationBtn
							href={page.href}
							current={page.current}
							label={`${labels.page} ${page.number}`}
						>
							{page.number}
						</PaginationBtn>
					</li>
				))}
				<li>
					<PaginationBtn href={nextHref} label={labels.next}>
						<ArrowIcon className='size-4' />
					</PaginationBtn>
				</li>
			</ul>
		</nav>
	)
}
