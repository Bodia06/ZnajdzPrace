import ChatCard from '@/components/ui/ChatCard'
import Parallax from '@/components/ui/motion/Parallax'
import TickIcon from '@/components/ui/icons/TickIcon'
import SearchIcon from '@/components/ui/icons/SearchIcon'

const FLOAT = 'animate-float motion-reduce:animate-none'

export default function NotFoundCards({ item }) {
	const { search, chat, offers } = item

	return (
		<div aria-hidden='true' className='pointer-events-none absolute inset-0 hidden xl:block'>
			<Parallax depth={-18} className='absolute top-[16%] left-[5%]'>
				<div
					className={`${FLOAT} -rotate-6 rounded-2xl bg-white p-4 text-ink shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)] [animation-delay:-2s] [animation-duration:7s]`}
				>
					<p className='flex items-center gap-2 text-xs font-bold text-muted'>
						<SearchIcon className='size-4 text-primary' />
						{search.query}
					</p>
					<p className='mt-2 text-lg font-extrabold'>{search.result}</p>
				</div>
			</Parallax>
			<Parallax depth={-30} className='absolute top-[22%] right-[5%]'>
				<ChatCard
					item={chat}
					className={`${FLOAT} w-60 rotate-3 [animation-delay:-4s] [animation-duration:8s]`}
				/>
			</Parallax>
			<Parallax depth={-22} className='absolute bottom-[14%] left-[8%]'>
				<div
					className={`${FLOAT} flex rotate-3 items-center gap-3 rounded-2xl bg-accent px-4 py-3.5 text-ink shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)] [animation-delay:-1s] [animation-duration:6s]`}
				>
					<span className='flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-accent'>
						<TickIcon />
					</span>
					<span>
						<span className='block text-sm font-extrabold'>{offers.title}</span>
						<span className='block text-xs font-semibold text-ink/70'>{offers.text}</span>
					</span>
				</div>
			</Parallax>
		</div>
	)
}
