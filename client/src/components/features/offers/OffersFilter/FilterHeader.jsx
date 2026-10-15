import FilterBadge from './FilterBadge'
import ClearIcon from '@/components/ui/icons/ClearIcon'

export default function FilterHeader({ title, count, clearLabel, closeLabel, onClear, onClose }) {
	return (
		<div className='flex shrink-0 items-center justify-between gap-3 px-5 pt-5 pb-4 sm:px-6 lg:pb-5'>
			<h2 className='flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink'>
				{title}
				<FilterBadge count={count} />
			</h2>
			<div className='flex items-center gap-2'>
				{count > 0 && (
					<button
						type='button'
						onClick={onClear}
						className='cursor-pointer rounded-full bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary transition hover:brightness-95 motion-safe:animate-pop'
					>
						{clearLabel}
					</button>
				)}
				<button
					type='button'
					onClick={onClose}
					aria-label={closeLabel}
					className='cursor-pointer text-subtle transition hover:text-muted lg:hidden'
				>
					<ClearIcon className='size-8' />
				</button>
			</div>
		</div>
	)
}
