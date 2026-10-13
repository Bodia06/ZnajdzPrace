'use client'

import NavLink from '@/components/layout/Header/NavLink'
import BurgerButton from '@/components/layout/Header/BurgerButton'
import Button from '@/components/ui/Button'
import { AUTH_ITEMS, NAVIGATION_ITEMS } from '@/constants'
import { useMobileMenu } from '@/hooks'

export default function MobileMenu() {
	const { open, close, toggle } = useMobileMenu()

	return (
		<div className='nav:hidden'>
			<BurgerButton open={open} onClick={toggle} controls='mobile-menu' />

			<div
				onClick={close}
				aria-hidden='true'
				className={`fixed inset-x-0 top-16 bottom-0 bg-foreground/20 backdrop-blur-md transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
					open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
				}`}
			/>

			<div
				id='mobile-menu'
				inert={!open}
				className={`absolute inset-x-0 top-full border-b border-foreground/10 bg-background px-4 pt-4 pb-8 shadow-lg transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
					open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
				}`}
			>
				<nav aria-label='Menu mobilne' className='mx-auto max-w-sm'>
					<ul className='flex flex-col items-center'>
						{NAVIGATION_ITEMS.map((item) => (
							<li key={item.id} className='w-full'>
								<NavLink
									href={item.link}
									name={item.name}
									badge={item.badge}
									onClick={close}
									className='w-full justify-center border-b border-foreground/5 py-4 text-base'
								/>
							</li>
						))}
					</ul>
				</nav>

				<div className='mx-auto mt-6 flex max-w-sm flex-col items-center gap-3'>
					{AUTH_ITEMS.map((item) => (
						<Button
							key={item.id}
							href={item.link}
							variant={item.variant}
							onClick={close}
							className='block w-full py-3 text-center text-base'
						>
							{item.name}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}
