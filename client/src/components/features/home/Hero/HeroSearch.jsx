import SearchIcon from '@/components/ui/SearchIcon'
import { LINKS } from '@/constants'

export default function HeroSearch({ item }) {
	const { placeholder, button } = item

	return (
		<form
			role='search'
			action={LINKS.OFFERS}
			className='mt-6 sm:mt-9 flex max-w-xl 2xl:max-w-2xl items-center gap-1 rounded-2xl bg-white p-1 sm:gap-2 sm:rounded-[20px] sm:p-2 shadow-[0_0_0_4px_rgba(255,255,255,0.12)] transition-shadow focus-within:shadow-[0_0_0_4px_rgba(87,83,240,0.45)]'
		>
			<SearchIcon className='ml-2 size-4 text-primary sm:ml-3 sm:size-5' />
			<input
				type='search'
				name='q'
				placeholder={placeholder}
				aria-label={placeholder}
				className='min-w-0 flex-1 truncate bg-transparent px-1 text-base font-medium text-ink outline-none placeholder:text-[#9b9db3]'
			/>
			<button
				type='submit'
				className='h-10 shrink-0 sm:h-12 2xl:h-14 cursor-pointer rounded-xl bg-primary px-4 text-[13px] sm:rounded-[14px] sm:px-7 sm:text-[15px] font-bold text-white 2xl:text-base transition hover:brightness-110 active:scale-[0.98]'
			>
				{button}
			</button>
		</form>
	)
}
