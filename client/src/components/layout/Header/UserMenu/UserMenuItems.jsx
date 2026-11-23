import Link from 'next/link'
import UserMenuTile from '@/components/layout/Header/UserMenu/UserMenuTile'
import LogoutIcon from '@/components/ui/icons/LogoutIcon'
import PlusIcon from '@/components/ui/icons/PlusIcon'
import SettingsIcon from '@/components/ui/icons/SettingsIcon'
import { LOGOUT_LABEL, USER_MENU } from '@/constants'

const ITEM_ICONS = {
	'offer-new': <PlusIcon className='size-4' />,
	settings: <SettingsIcon className='size-4' />
}

const ROW =
	'group flex w-full cursor-pointer items-center gap-3 rounded-2xl px-2.5 py-2 text-left text-sm font-semibold text-ink transition-colors hover:bg-primary-soft hover:text-primary focus-visible:bg-primary-soft'

export default function UserMenuItems({ onNavigate, onSignOut }) {
	return (
		<>
			{USER_MENU.items.map((item) => (
				<li key={item.id}>
					<Link href={item.link} onClick={onNavigate} className={ROW}>
						<UserMenuTile accent={item.accent}>{ITEM_ICONS[item.id]}</UserMenuTile>
						{item.name}
					</Link>
				</li>
			))}
			<li aria-hidden='true' className='mx-2.5 my-1 h-px bg-ink/6' />
			<li>
				<button type='button' onClick={onSignOut} className={ROW}>
					<UserMenuTile>
						<LogoutIcon className='size-4' />
					</UserMenuTile>
					{LOGOUT_LABEL}
				</button>
			</li>
		</>
	)
}
