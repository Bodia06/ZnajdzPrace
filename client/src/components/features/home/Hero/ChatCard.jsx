export default function ChatCard({ item }) {
	const { sender, time, message } = item

	return (
		<div className='relative z-10 mt-4 ml-auto w-52 rotate-2 animate-float rounded-2xl border border-white/10 bg-[#171826] p-3 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.7)] [animation-delay:-4s] [animation-duration:8s] motion-reduce:animate-none sm:mt-5 sm:w-64 sm:rounded-[22px] sm:p-3.5 2xl:w-72'>
			<p className='mb-2 px-0.5 text-[10px] font-semibold text-[#8f91a8] sm:mb-2.5 sm:text-[11px]'>
				{sender} · {time}
			</p>
			<p className='rounded-2xl bg-primary px-3 py-2 text-xs leading-snug font-bold text-white sm:px-4 sm:py-3 sm:text-[13px] 2xl:text-sm'>
				{message}
			</p>
		</div>
	)
}
