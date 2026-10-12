import Link from 'next/link'

const TONES = {
	accent: 'bg-accent text-ink',
	dark: 'bg-ink text-white'
}

export default function ToolLink({ href, tone = 'dark', className = '', children }) {
	return (
		<Link
			href={href}
			className={`inline-flex w-fit items-center rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:brightness-110 ${TONES[tone]} ${className}`}
		>
			{children}
		</Link>
	)
}
