import FooterLink from './FooterLink'

export default function FooterColumn({ item }) {
	const { id, title, links } = item

	return (
		<nav aria-labelledby={`footer-${id}`}>
			<h2 id={`footer-${id}`} className='text-sm font-extrabold tracking-wide text-white uppercase'>
				{title}
			</h2>
			<ul className='mt-4 flex flex-col gap-3'>
				{links.map(({ id: linkId, name, link }) => (
					<li key={linkId}>
						<FooterLink href={link}>{name}</FooterLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
