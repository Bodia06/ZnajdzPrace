import Link from 'next/link'
import RoleGate from '@/components/features/auth/RoleGate'
import NavLink from '@/components/layout/Header/NavLink'
import UserPanelDivider from '@/components/layout/Header/UserPanel/UserPanelDivider'
import LogoutIcon from '@/components/ui/icons/LogoutIcon'
import PlusIcon from '@/components/ui/icons/PlusIcon'
import { LOGOUT_LABEL, USER_MENU } from '@/constants'

export default function UserPanel({ onSignOut, onNavigate }) {
	const primary = USER_MENU.items.filter((item) => item.accent)
	const secondary = USER_MENU.items.filter((item) => !item.accent)

	return (
		<nav aria-label={USER_MENU.label} className='flex w-full flex-col gap-3'>
			<UserPanelDivider />

			<ul className='flex flex-col'>
				{primary.map((item) => (
					<RoleGate key={item.id} role={item.role}>
						<li className='pb-3'>
							<Link
								href={item.link}
								onClick={onNavigate}
								className='flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-ink transition hover:brightness-110 active:scale-[0.99]'
							>
								<PlusIcon className='size-3.5' />
								{item.name}
							</Link>
						</li>
					</RoleGate>
				))}
				{secondary.map((item) => (
					<li key={item.id}>
						<NavLink
							href={item.link}
							name={item.name}
							onClick={onNavigate}
							className='min-h-14 w-full justify-center border-b border-foreground/5 py-4 text-base'
						/>
					</li>
				))}
				<li className='pt-3'>
					<button
						type='button'
						onClick={onSignOut}
						className='flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-base font-semibold text-background transition-opacity hover:opacity-85'
					>
						<LogoutIcon className='size-4' />
						{LOGOUT_LABEL}
					</button>
				</li>
			</ul>
		</nav>
	)
}
