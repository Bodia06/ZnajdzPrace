export default function FilterBadge({ count }) {
	if (count === 0) return null

	return (
		<span
			key={count}
			className='flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-white motion-safe:animate-pop'
		>
			{count}
		</span>
	)
}
