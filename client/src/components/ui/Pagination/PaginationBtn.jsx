import Link from 'next/link'

const BASE =
	'flex size-12 items-center justify-center rounded-full text-base font-bold ring-1 transition sm:size-13'

export default function PaginationBtn({ href, current = false, label, children }) {
	if (!href) {
		return (
			<span
				role='link'
				aria-label={label}
				aria-disabled='true'
				className={`${BASE} bg-white text-subtle opacity-50 ring-ink/5`}
			>
				{children}
			</span>
		)
	}

	return (
		<Link
			href={href}
			scroll={false}
			aria-label={label}
			aria-current={current ? 'page' : undefined}
			className={`${BASE} ${
				current
					? 'bg-ink text-white ring-ink'
					: 'bg-white text-ink ring-ink/5 hover:bg-primary-soft hover:text-primary'
			}`}
		>
			{children}
		</Link>
	)
}
