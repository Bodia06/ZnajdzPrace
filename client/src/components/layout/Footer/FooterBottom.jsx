import { siteConfig } from '@/config/site'
import FooterLink from './FooterLink'

export default function FooterBottom({ legal, rights }) {
	return (
		<div className='flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left'>
			<p className='text-sm text-white/50'>
				© {new Date().getFullYear()} {siteConfig.name}. {rights}
			</p>
			<nav aria-label='Informacje prawne'>
				<ul className='flex flex-wrap justify-center gap-x-6 gap-y-2'>
					{legal.map(({ id, name, link }) => (
						<li key={id}>
							<FooterLink href={link}>{name}</FooterLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
