import Collapse from '@/components/ui/Collapse'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function EntryCard({
	title,
	summary,
	collapsed = false,
	onToggle,
	removeLabel,
	onRemove,
	children
}) {
	const collapsible = Boolean(onToggle)

	return (
		<li className='flex flex-col gap-4 rounded-2xl border border-ink/10 p-4 transition-colors sm:p-5'>
			<div className='flex items-center justify-between gap-3'>
				{collapsible ? (
					<button
						type='button'
						onClick={onToggle}
						aria-expanded={!collapsed}
						className='group -m-1 flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-xl p-1 text-left'
					>
						<span className='flex min-w-0 flex-1 flex-col'>
							<span className='truncate text-base font-extrabold text-ink'>{title}</span>
							{collapsed && summary && (
								<span className='truncate text-sm font-medium text-muted motion-safe:animate-fade-down'>
									{summary}
								</span>
							)}
						</span>
						<span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-page text-ink transition-colors group-hover:bg-primary-soft'>
							<ArrowIcon
								className={`size-3.5 transition-transform duration-300 ${
									collapsed ? 'rotate-90' : '-rotate-90'
								}`}
							/>
						</span>
					</button>
				) : (
					<h4 className='text-base font-extrabold text-ink'>{title}</h4>
				)}
				{onRemove && (
					<button
						type='button'
						onClick={onRemove}
						className='shrink-0 cursor-pointer rounded-lg px-2 py-1 text-sm font-bold text-red-800 transition hover:bg-red-50'
					>
						{removeLabel}
					</button>
				)}
			</div>
			{collapsible ? (
				<Collapse open={!collapsed} offset='-mt-4'>
					<div className='flex flex-col gap-4 px-1 pb-1'>{children}</div>
				</Collapse>
			) : (
				children
			)}
		</li>
	)
}
