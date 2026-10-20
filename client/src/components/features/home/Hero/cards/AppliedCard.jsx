import CheckIcon from '@/components/ui/icons/CheckBadgeIcon'

export default function AppliedCard({ item }) {
	return (
		<div className='relative z-20 mt-4 ml-3 flex w-fit items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-xs font-bold text-ink shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] [animation-delay:-1s] [animation-duration:5s] motion-reduce:animate-none sm:mt-5 sm:ml-10 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-sm md:animate-float 2xl:text-base'>
			<CheckIcon className='bg-emerald-100 text-emerald-600' />
			{item.text}
		</div>
	)
}
