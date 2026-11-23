import UserIcon from '@/components/ui/icons/UserIcon'

export default function UserPanelDivider() {
	return (
		<div className='flex items-center gap-3' aria-hidden='true'>
			<span className='h-px flex-1 bg-foreground/10' />
			<span className='flex size-9 items-center justify-center rounded-full bg-primary text-white'>
				<UserIcon className='size-4.5' />
			</span>
			<span className='h-px flex-1 bg-foreground/10' />
		</div>
	)
}
