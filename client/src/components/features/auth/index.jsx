'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import AuthSide from './AuthSide'
import AuthTabs from './AuthTabs'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import CrossIcon from '@/components/ui/icons/CrossIcon'
import { AUTH_DATA, AUTH_IDS, AUTH_MODES } from '@/constants'
import { useActivePanelHeight, useAuthMode, useModalFocus, useScrollLock } from '@/hooks'

const PANEL =
	'self-start p-1.5 transition-[opacity,translate,visibility] duration-500 ease-out [grid-area:1/1]'
const ACTIVE = 'visible translate-x-0 opacity-100'

export default function AuthModal({ initialMode, overlay = false }) {
	const router = useRouter()
	const dialogRef = useRef(null)
	const { mode, isLogin, toLogin, toRegister } = useAuthMode(initialMode)
	const { height, bind } = useActivePanelHeight(mode)
	const { close, tabs, side, login, register } = AUTH_DATA

	const dismiss = () => (overlay ? router.back() : router.push(close.link))

	useScrollLock()
	useModalFocus(dialogRef, dismiss)

	return (
		<div
			ref={dialogRef}
			tabIndex={-1}
			role='dialog'
			aria-modal='true'
			aria-labelledby={isLogin ? AUTH_IDS.title : AUTH_IDS.registerTitle}
			className='fixed inset-0 z-60 overflow-hidden overscroll-contain bg-ink/55 font-(family-name:--font-jakarta) backdrop-blur-sm outline-none motion-safe:animate-fade-in print:hidden'
		>
			<div
				onClick={(event) => event.target === event.currentTarget && dismiss()}
				className='flex h-full items-center justify-center p-3 sm:p-4'
			>
				<div className='relative flex max-h-full w-full max-w-250 overflow-hidden rounded-3xl bg-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] motion-safe:animate-modal-in min-[860px]:rounded-4xl'>
					<AuthSide texts={side} isLogin={isLogin} />

					<button
						type='button'
						onClick={dismiss}
						aria-label={close.label}
						className='absolute top-3 right-3 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-page text-ink transition hover:bg-primary-soft sm:top-4 sm:right-4'
					>
						<CrossIcon className='size-4' />
					</button>

					<div className='flex min-h-0 min-w-0 flex-1 flex-col gap-6 overflow-y-auto overscroll-contain p-5 sm:p-8 lg:p-11'>
						<AuthTabs texts={tabs} mode={mode} onLogin={toLogin} onRegister={toRegister} />

						<div
							style={{ height }}
							className='-m-1.5 grid shrink-0 overflow-hidden transition-[height] duration-300 ease-out'
						>
							<div
								ref={bind(AUTH_MODES.login)}
								role='tabpanel'
								id={AUTH_IDS.panels.login}
								aria-labelledby={AUTH_IDS.tabs.login}
								className={`${PANEL} ${isLogin ? ACTIVE : 'invisible -translate-x-8 opacity-0'}`}
							>
								<LoginForm texts={login} onSwitch={toRegister} />
							</div>
							<div
								ref={bind(AUTH_MODES.register)}
								role='tabpanel'
								id={AUTH_IDS.panels.register}
								aria-labelledby={AUTH_IDS.tabs.register}
								className={`${PANEL} ${isLogin ? 'invisible translate-x-8 opacity-0' : ACTIVE}`}
							>
								<RegisterForm texts={register} onSwitch={toLogin} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
