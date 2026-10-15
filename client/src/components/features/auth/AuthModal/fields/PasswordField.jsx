import AuthField from './AuthField'
import EyeIcon from '@/components/ui/icons/EyeIcon'
import EyeOffIcon from '@/components/ui/icons/EyeOffIcon'
import LockIcon from '@/components/ui/icons/LockIcon'
import { usePasswordVisibility } from '@/hooks'

export default function PasswordField({ texts, showLabel, hideLabel, labelAside, ...props }) {
	const { visible, type, toggle } = usePasswordVisibility()
	const Icon = visible ? EyeOffIcon : EyeIcon

	return (
		<AuthField
			label={texts.label}
			labelAside={labelAside}
			icon={<LockIcon className='text-primary' />}
			type={type}
			name={texts.name}
			placeholder={texts.placeholder}
			autoComplete={texts.autoComplete}
			trailing={
				<button
					type='button'
					onClick={toggle}
					aria-label={visible ? hideLabel : showLabel}
					aria-pressed={visible}
					className='flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl text-muted transition hover:text-ink'
				>
					<Icon />
				</button>
			}
			{...props}
		/>
	)
}
