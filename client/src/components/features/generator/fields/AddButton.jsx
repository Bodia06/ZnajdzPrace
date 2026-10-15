import PlusIcon from '@/components/ui/icons/PlusIcon'

export default function AddButton({ onClick, children }) {
	return (
		<button
			type='button'
			onClick={onClick}
			className='flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-ink/20 text-sm font-bold text-ink transition hover:border-primary hover:bg-primary-soft hover:text-primary'
		>
			<PlusIcon />
			{children}
		</button>
	)
}
