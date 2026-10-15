import BriefcaseIcon from '@/components/ui/icons/BriefcaseIcon'
import UserIcon from '@/components/ui/icons/UserIcon'
import { AUTH_ROLES } from '@/constants'

const ICONS = {
	[AUTH_ROLES.candidate]: UserIcon,
	[AUTH_ROLES.employer]: BriefcaseIcon
}

export default function RoleSwitch({ label, roles, value, onChange }) {
	const index = roles.findIndex((role) => role.value === value)

	return (
		<div
			role='radiogroup'
			aria-label={label}
			className='relative grid grid-cols-2 rounded-2xl bg-page p-1.5'
		>
			<span
				aria-hidden='true'
				style={{ transform: `translateX(${index * 100}%)` }}
				className='absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-xl bg-white shadow-[0_4px_14px_rgba(14,15,26,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]'
			/>
			{roles.map((role) => {
				const Icon = ICONS[role.value]
				const active = role.value === value

				return (
					<label key={role.value} className='relative cursor-pointer'>
						<input
							type='radio'
							name='role'
							value={role.value}
							checked={active}
							onChange={() => onChange(role.value)}
							className='peer sr-only'
						/>
						<span className='flex items-center gap-2.5 rounded-xl p-2.5 text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 sm:p-3'>
							<span
								className={`flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
									active ? 'bg-ink text-accent' : 'bg-ink/10 text-muted'
								}`}
							>
								<Icon className='size-4.5' />
							</span>
							<span className='flex min-w-0 flex-col leading-tight'>
								<strong className='text-sm'>{role.title}</strong>
								<span className='text-xs font-medium text-muted'>{role.text}</span>
							</span>
						</span>
					</label>
				)
			})}
		</div>
	)
}
