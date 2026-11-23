'use client'

import AuthActions from '@/components/layout/Header/AuthActions'
import NavLink from '@/components/layout/Header/NavLink'
import BurgerButton from '@/components/layout/Header/BurgerButton'
import { NAVIGATION_ITEMS } from '@/constants'
import { useMobileMenu } from '@/hooks'

export default function MobileMenu() {
	const { open, instant, close, closeNow, toggle } = useMobileMenu()

	return (
		<div className='nav:hidden'>
			<BurgerButton open={open} onClick={toggle} controls='mobile-menu' />

			<div
				onClick={close}
				aria-hidden='true'
				className={`fixed inset-x-0 top-16 bottom-0 bg-foreground/20 backdrop-blur-md ${
					instant
						? 'transition-none'
						: 'transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none'
				} ${open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
			/>

			<div
				id='mobile-menu'
				inert={!open}
				className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-foreground/10 bg-background px-4 pt-4 pb-8 shadow-lg ${
					instant
						? 'transition-none'
						: 'transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none'
				} ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`}
			>
				<div className='mx-auto grid max-w-sm gap-6 sm:max-w-3xl sm:grid-cols-2 sm:items-start sm:gap-10'>
					<nav aria-label='Menu mobilne'>
						<ul className='flex flex-col items-center'>
							{NAVIGATION_ITEMS.map((item) => (
								<li key={item.id} className='w-full'>
									<NavLink
										href={item.link}
										name={item.name}
										badge={item.badge}
										onClick={close}
										className='min-h-14 w-full justify-center border-b border-foreground/5 py-4 text-base'
									/>
								</li>
							))}
						</ul>
					</nav>

					<div className='flex flex-col items-center gap-3'>
						<AuthActions
							mobile
							onAction={closeNow}
							buttonClassName='block w-full py-3 text-center text-base'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
