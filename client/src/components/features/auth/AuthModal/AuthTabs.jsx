import { AUTH_IDS, AUTH_MODES } from '@/constants'

export default function AuthTabs({ texts, mode, onLogin, onRegister }) {
	const isLogin = mode === AUTH_MODES.login
	const tabs = [
		{ mode: AUTH_MODES.login, label: texts.login, onClick: onLogin },
		{ mode: AUTH_MODES.register, label: texts.register, onClick: onRegister }
	]

	const onKeyDown = (event) => {
		const target = { ArrowLeft: tabs[0], ArrowRight: tabs[1] }[event.key]
		if (!target) return

		event.preventDefault()
		target.onClick()
		document.getElementById(AUTH_IDS.tabs[target.mode])?.focus()
	}

	return (
		<div
			role='tablist'
			aria-label={texts.label}
			onKeyDown={onKeyDown}
			className='relative grid w-72 max-w-[calc(100%-3.5rem)] grid-cols-2 rounded-full bg-page p-1.5'
		>
			<span
				aria-hidden='true'
				className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-ink shadow-[0_4px_14px_rgba(14,15,26,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
					isLogin ? 'translate-x-0' : 'translate-x-full'
				}`}
			/>
			{tabs.map((tab) => {
				const selected = tab.mode === mode

				return (
					<button
						key={tab.mode}
						type='button'
						role='tab'
						tabIndex={selected ? 0 : -1}
						id={AUTH_IDS.tabs[tab.mode]}
						aria-selected={selected}
						aria-controls={AUTH_IDS.panels[tab.mode]}
						onClick={tab.onClick}
						className={`relative cursor-pointer rounded-full py-2.5 text-sm font-extrabold transition-colors duration-300 ${
							selected ? 'text-white' : 'text-muted hover:text-ink'
						}`}
					>
						{tab.label}
					</button>
				)
			})}
		</div>
	)
}
