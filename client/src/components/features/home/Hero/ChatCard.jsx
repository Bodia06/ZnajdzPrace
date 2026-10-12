export default function ChatCard({ item }) {
	const { sender, time, message } = item

	return (
		<div className='relative z-10 mt-4 ml-auto animate-float [animation-delay:-4s] [animation-duration:8s] motion-reduce:animate-none sm:mt-5 w-52 sm:w-64 2xl:w-72 rotate-2 rounded-2xl border border-white/10 bg-[#171826] p-3 sm:rounded-[22px] sm:p-3.5 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.7)]'>
			<p className='mb-2 px-0.5 text-[10px] sm:mb-2.5 sm:text-[11px] font-semibold text-[#8f91a8]'>
				{sender} · {time}
			</p>
			<p className='rounded-2xl bg-primary px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-[13px] leading-snug 2xl:text-sm font-bold text-white'>
				{message}
			</p>
		</div>
	)
}
