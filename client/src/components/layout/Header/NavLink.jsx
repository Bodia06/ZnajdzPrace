import Link from 'next/link'

import Badge from './Badge'

export default function NavLink({ href, name, badge, className = '', onClick }) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground ${className}`}
		>
			{name}
			{badge && <Badge>{badge}</Badge>}
		</Link>
	)
}
