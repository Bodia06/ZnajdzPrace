import Link from 'next/link'

export default function FooterLink({ href, children }) {
	return (
		<Link href={href} className='text-sm text-white/70 transition-colors hover:text-white'>
			{children}
		</Link>
	)
}
