import SearchIcon from '@/components/ui/icons/SearchIcon'
import { LINKS } from '@/constants'

export default function HeroSearch({ item, className = '' }) {
	const { placeholder, button } = item

	return (
		<form
			role='search'
			action={LINKS.OFFERS}
			className={`flex w-full max-w-xl items-center gap-1 rounded-2xl bg-white p-1 shadow-[0_0_0_4px_rgba(255,255,255,0.12)] transition-shadow focus-within:shadow-[0_0_0_4px_rgba(87,83,240,0.45)] sm:gap-2 sm:rounded-[20px] sm:p-2 2xl:max-w-2xl ${className}`}
		>
			<SearchIcon className='ml-2 size-4 text-primary sm:ml-3 sm:size-5' />
			<input
				type='search'
				name='q'
				placeholder={placeholder}
				aria-label={placeholder}
				className='min-w-0 flex-1 truncate bg-transparent px-1 text-base font-medium text-ink outline-none placeholder:text-subtle'
			/>
			<button
				type='submit'
				className='h-10 shrink-0 cursor-pointer rounded-xl bg-primary px-4 text-[13px] font-bold text-white transition hover:brightness-110 active:scale-[0.98] sm:h-12 sm:rounded-[14px] sm:px-7 sm:text-[15px] 2xl:h-14 2xl:text-base'
			>
				{button}
			</button>
		</form>
	)
}
