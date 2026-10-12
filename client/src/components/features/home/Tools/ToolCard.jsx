import ToolCardHeader from './ToolCardHeader'

const TONES = {
	dark: 'bg-ink',
	primary: 'bg-primary',
	light: 'bg-white',
	accent: 'bg-accent'
}

export default function ToolCard({ tone = 'light', badge, title, control, className = '', children }) {
	return (
		<article className={`flex flex-col rounded-[28px] p-5 sm:rounded-4xl sm:p-7 lg:p-8 ${TONES[tone]} ${className}`}>
			<ToolCardHeader tone={tone} badge={badge} title={title}>
				{control}
			</ToolCardHeader>
			{children}
		</article>
	)
}
