import TickIcon from '@/components/ui/icons/TickIcon'

export default function RegisterSuccess({ texts, email, onLogin }) {
	return (
		<div
			role='status'
			className='flex flex-col items-start gap-4 pt-6 motion-safe:animate-fade-down'
		>
			<span className='flex size-20 items-center justify-center rounded-3xl bg-accent text-ink motion-safe:animate-pop'>
				<TickIcon className='size-9' />
			</span>
			<h2 className='text-2xl font-extrabold tracking-tight text-ink sm:text-3xl'>{texts.title}</h2>
			<p className='text-muted'>
				{texts.before} <strong className='wrap-break-word text-ink'>{email}</strong>. {texts.after}
			</p>
			<button
				type='button'
				onClick={onLogin}
				className='min-h-13 cursor-pointer rounded-2xl bg-ink px-6 font-extrabold text-white transition hover:opacity-90 active:scale-[0.98]'
			>
				{texts.action}
			</button>
		</div>
	)
}
