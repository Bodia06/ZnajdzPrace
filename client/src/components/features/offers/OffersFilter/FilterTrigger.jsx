import FilterBadge from './FilterBadge'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import FiltersIcon from '@/components/ui/icons/FiltersIcon'

export default function FilterTrigger({ ref, title, label, count, open, controls, onClick }) {
	return (
		<button
			ref={ref}
			type='button'
			onClick={onClick}
			aria-haspopup='dialog'
			aria-expanded={open}
			aria-controls={controls}
			aria-label={label}
			className='flex h-14 w-full cursor-pointer items-center gap-3 rounded-2xl bg-white px-5 text-left shadow-[0_12px_40px_rgba(14,15,26,0.06)] ring-1 ring-ink/5 transition active:scale-[0.99] lg:hidden'
		>
			<FiltersIcon className='text-primary' />
			<span className='flex-1 text-base font-extrabold text-ink'>{title}</span>
			<FilterBadge count={count} />
			<ArrowIcon className='size-3.5 rotate-90 text-muted' />
		</button>
	)
}
