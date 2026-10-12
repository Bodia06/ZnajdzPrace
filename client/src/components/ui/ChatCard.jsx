export default function ChatCard({ item, className = '' }) {
	const { sender, time, message } = item

	return (
		<div
			className={`rounded-2xl bg-card p-3 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.7)] sm:rounded-[22px] sm:p-3.5 ${className}`}
		>
			<p className='mb-2 px-0.5 text-[10px] font-semibold text-meta sm:mb-2.5 sm:text-[11px]'>
				{sender} · {time}
			</p>
			<p className='rounded-2xl bg-primary px-3 py-2 text-xs leading-snug font-bold text-white sm:px-4 sm:py-3 sm:text-[13px] 2xl:text-sm'>
				{message}
			</p>
		</div>
	)
}
