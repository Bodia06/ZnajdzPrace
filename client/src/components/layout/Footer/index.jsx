import Logo from '@/components/ui/Logo'
import { FOOTER_DATA } from '@/constants'
import FooterBottom from './FooterBottom'
import FooterColumn from './FooterColumn'

export default function Footer() {
	const { description, columns, legal, rights } = FOOTER_DATA

	return (
		<footer className='bg-ink font-(family-name:--font-jakarta) text-white print:hidden'>
			<div className='mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 lg:px-12 2xl:max-w-360'>
				<div className='grid gap-10 text-center sm:text-left lg:grid-cols-[1.6fr_repeat(3,1fr)] lg:gap-12'>
					<div className='flex flex-col items-center gap-4 sm:items-start'>
						<Logo />
						<p className='max-w-xs text-sm leading-relaxed text-pretty text-white/60'>
							{description}
						</p>
					</div>
					<div className='grid gap-8 sm:grid-cols-3 lg:col-span-3'>
						{columns.map((column) => (
							<FooterColumn key={column.id} item={column} />
						))}
					</div>
				</div>
				<div className='mt-12 sm:mt-14'>
					<FooterBottom legal={legal} rights={rights} />
				</div>
			</div>
		</footer>
	)
}
