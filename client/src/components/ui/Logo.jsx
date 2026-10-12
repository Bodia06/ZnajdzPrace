import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { LINKS } from '@/constants'

export default function Logo() {
	return (
		<Link href={LINKS.HOME} className='flex items-center gap-2.5'>
			<Image src='/images/logo.svg' alt='' width={36} height={36} priority />
			<span className='text-lg font-bold tracking-tight'>{siteConfig.name}</span>
		</Link>
	)
}
