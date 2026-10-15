import Logo from '@/components/ui/Logo'
import TickIcon from '@/components/ui/icons/TickIcon'

const FADE = 'absolute inset-0 flex flex-col gap-3.5 transition-[opacity,translate] duration-500'

export default function AuthSide({ texts, isLogin }) {
	const { login, register, score, sent } = texts

	return (
		<aside
			className={`relative hidden flex-[0_0_25rem] flex-col justify-between gap-7 overflow-hidden p-10 text-white transition-colors duration-500 min-[860px]:flex ${
				isLogin ? 'bg-ink' : 'bg-primary'
			}`}
		>
			<span
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[20px_20px]'
			/>

			<div className='relative'>
				<Logo />
			</div>

			<div className='relative min-h-56'>
				<div
					aria-hidden={!isLogin}
					className={`${FADE} ${isLogin ? 'opacity-100' : '-translate-y-4 opacity-0'}`}
				>
					<p className='text-4xl leading-[1.1] font-extrabold tracking-tight xl:text-[42px]'>
						{login.title}
					</p>
					<p className='text-base text-subtle'>{login.text}</p>
				</div>
				<div
					aria-hidden={isLogin}
					className={`${FADE} ${isLogin ? 'translate-y-4 opacity-0' : 'opacity-100'}`}
				>
					<p className='text-4xl leading-[1.1] font-extrabold tracking-tight xl:text-[42px]'>
						{register.before}{' '}
						<span className='mt-1 inline-block rounded-xl bg-accent px-2.5 py-0.5 text-ink'>
							{register.highlight}
						</span>
					</p>
					<p className='text-base text-primary-soft'>{register.text}</p>
				</div>
			</div>

			<div aria-hidden='true' className='relative h-40'>
				<div className='absolute bottom-10 left-0 flex w-56 items-center gap-3.5 rounded-3xl bg-accent p-4 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.3)] motion-safe:animate-float'>
					<span
						style={{
							background: `conic-gradient(#0e0f1a 0 ${score.value}%, rgba(14,15,26,0.15) ${score.value}% 100%)`
						}}
						className='flex size-14 shrink-0 items-center justify-center rounded-full'
					>
						<span className='flex size-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold'>
							{score.value}
						</span>
					</span>
					<span className='flex flex-col leading-snug'>
						<strong className='text-sm'>{score.title}</strong>
						<span className='text-xs font-semibold'>{score.meta}</span>
					</span>
				</div>
				<div className='absolute top-0 right-0 flex rotate-3 items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-[13px] font-bold text-ink shadow-[0_20px_50px_rgba(0,0,0,0.3)]'>
					<span className='flex size-5.5 items-center justify-center rounded-full bg-green-100 text-green-700'>
						<TickIcon className='size-3' />
					</span>
					{sent}
				</div>
			</div>
		</aside>
	)
}
