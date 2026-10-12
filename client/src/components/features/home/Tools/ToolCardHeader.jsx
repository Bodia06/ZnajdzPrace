const TONES = {
	dark: { badge: 'text-accent', title: 'text-white' },
	primary: { badge: 'text-white/80', title: 'text-white' },
	light: { badge: 'text-primary', title: 'text-ink' },
	accent: { badge: 'text-ink', title: 'text-ink' }
}

export default function ToolCardHeader({ badge, title, tone = 'light', children }) {
	const styles = TONES[tone]

	return (
		<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4'>
			<div className='min-w-0'>
				<p className={`text-xs font-extrabold tracking-wide uppercase sm:text-sm ${styles.badge}`}>
					{badge}
				</p>
				<h3
					className={`mt-1 text-xl leading-tight font-extrabold tracking-[-0.03em] text-balance sm:text-2xl ${styles.title}`}
				>
					{title}
				</h3>
			</div>
			{children}
		</div>
	)
}
