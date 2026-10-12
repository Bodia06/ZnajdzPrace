import Link from 'next/link'

const VARIANTS = {
	primary:
		'rounded-full bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-85',
	ghost: 'px-2 transition-opacity hover:opacity-70',
	accent:
		'rounded-full bg-accent px-6 py-3 text-ink transition hover:-translate-y-0.5 hover:brightness-110'
}

export default function Button({ href, variant = 'primary', className = '', onClick, children }) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`text-sm font-semibold ${VARIANTS[variant]} ${className}`}
		>
			{children}
		</Link>
	)
}
