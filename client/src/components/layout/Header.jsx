import { siteConfig } from '@/config/site'

export default function Header() {
	return (
		<header className=''>
			<div className='mx-auto flex h-16 max-w-6xl items-center gap-3 px-4'>
				<span className='text-lg font-semibold'>{siteConfig.name}</span>
			</div>
		</header>
	)
}
