'use client'

import { useId } from 'react'
import UserMenuItems from '@/components/layout/Header/UserMenu/UserMenuItems'
import ChevronDownIcon from '@/components/ui/icons/ChevronDownIcon'
import UserIcon from '@/components/ui/icons/UserIcon'
import { USER_MENU } from '@/constants'
import { useUserMenu } from '@/hooks'

export default function UserMenu({ onSignOut }) {
	const panelId = useId()
	const { open, rootRef, triggerRef, close, toggle } = useUserMenu()

	return (
		<div ref={rootRef} className='relative'>
			<button
				ref={triggerRef}
				type='button'
				aria-expanded={open}
				aria-controls={panelId}
				aria-label={USER_MENU.label}
				onClick={toggle}
				className={`flex cursor-pointer items-center gap-1.5 rounded-full border bg-white p-1 pr-2.5 shadow-sm transition ${
					open ? 'border-primary/40 ring-4 ring-primary-soft' : 'border-ink/10 hover:border-primary/40'
				}`}
			>
				<span className='flex size-9 items-center justify-center rounded-full bg-primary text-white'>
					<UserIcon className='size-4.5' />
				</span>
				<ChevronDownIcon
					className={`text-ink/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
				/>
			</button>

			<nav
				id={panelId}
				aria-label={USER_MENU.label}
				inert={!open}
				className={`absolute top-full right-0 z-50 mt-3 max-h-[calc(100dvh-5rem)] w-60 origin-top-right overflow-y-auto overscroll-contain rounded-3xl border border-ink/5 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(14,15,26,0.35)] transition-[opacity,scale,translate,visibility] duration-200 ease-out motion-reduce:transition-none ${
					open ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-2 scale-95 opacity-0'
				}`}
			>
				<ul className='flex flex-col gap-0.5'>
					<UserMenuItems
						onNavigate={close}
						onSignOut={() => {
							close()
							onSignOut()
						}}
					/>
				</ul>
			</nav>
		</div>
	)
}
