import Link from 'next/link'

import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import Tilt from '@/components/ui/motion/Tilt'

const VARIANTS = {
	dark: { card: 'bg-ink text-white', code: 'bg-accent text-ink' },
	light: { card: 'bg-white text-ink', code: 'bg-primary-soft text-primary' },
	peach: { card: 'bg-white text-ink', code: 'bg-[#fce9de] text-[#b9461c]' },
	primary: { card: 'bg-primary text-white', code: 'bg-white text-primary' }
}

export default function CategoryItem({ item }) {
	const { code, title, link, variant } = item
	const styles = VARIANTS[variant] ?? VARIANTS.light

	return (
		<li>
			<Tilt className='rounded-3xl'>
				<Link
					href={link}
					className={`group flex h-36 flex-col justify-between rounded-3xl p-5 transition hover:shadow-[0_16px_32px_-12px_rgba(14,15,26,0.3)] sm:h-40 sm:p-5.5 ${styles.card}`}
				>
					<span
						aria-hidden='true'
						className={`flex size-11 items-center justify-center rounded-xl text-xs font-extrabold ${styles.code}`}
					>
						{code}
					</span>
					<span className='flex items-center justify-between gap-3 text-base font-bold tracking-tight sm:text-lg'>
						{title}
						<ArrowIcon className='size-5 transition group-hover:translate-x-1' />
					</span>
				</Link>
			</Tilt>
		</li>
	)
}
