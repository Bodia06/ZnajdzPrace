const TONES = {
	light: { box: 'bg-white', title: 'text-muted' },
	dark: { box: 'bg-ink', title: 'text-white/60' }
}

export default function ToolPanel({ title, tone = 'light', className = '', children }) {
	const styles = TONES[tone]

	return (
		<div className={`flex min-h-48 flex-col gap-2 rounded-2xl p-4 ${styles.box} ${className}`}>
			<h4 className={`text-sm font-bold ${styles.title}`}>{title}</h4>
			{children}
		</div>
	)
}
