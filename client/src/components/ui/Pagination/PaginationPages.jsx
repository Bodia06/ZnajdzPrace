import PaginationBtn from './PaginationBtn'
import PaginationGap from './PaginationGap'

export default function PaginationPages({ labels, pages, className }) {
	return pages.map((page) =>
		page.gap ? (
			<PaginationGap key={page.key} className={className} />
		) : (
			<li key={page.key} className={className}>
				<PaginationBtn
					href={page.href}
					current={page.current}
					label={`${labels.page} ${page.number}`}
				>
					{page.number}
				</PaginationBtn>
			</li>
		)
	)
}
