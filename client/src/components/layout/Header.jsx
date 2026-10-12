import Image from 'next/image'
import Link from 'next/link'

import MobileMenu from '@/components/layout/MobileMenu'
import NavLink from '@/components/layout/NavLink'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { AUTH_ITEMS, LINKS, NAVIGATION_ITEMS } from '@/constants'

export default function Header() {
	return (
		<header className='relative border-b border-foreground/10 bg-background'>
			<div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 nav:grid nav:grid-cols-[1fr_auto_1fr]'>
				<Link
					href={LINKS.HOME}
					className='flex items-center gap-2.5 justify-self-start'
				>
					<Image
						src='/images/logo.svg'
						alt=''
						width={36}
						height={36}
						priority
					/>
					<span className='text-lg font-bold tracking-tight'>
						{siteConfig.name}
					</span>
				</Link>

				<nav aria-label='Główna nawigacja' className='hidden nav:block'>
					<ul className='flex items-center gap-7'>
						{NAVIGATION_ITEMS.map((item) => (
							<li key={item.id}>
								<NavLink href={item.link} name={item.name} badge={item.badge} />
							</li>
						))}
					</ul>
				</nav>

				<div className='hidden items-center gap-3 justify-self-end nav:flex'>
					{AUTH_ITEMS.map((item) => (
						<Button key={item.id} href={item.link} variant={item.variant}>
							{item.name}
						</Button>
					))}
				</div>

				<MobileMenu />
			</div>
		</header>
	)
}
