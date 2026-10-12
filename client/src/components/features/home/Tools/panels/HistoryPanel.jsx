import ToolPanel from '../ToolPanel'

const DOT_TONES = {
	accent: 'bg-accent',
	primary: 'bg-primary',
	muted: 'bg-white/50'
}

export default function HistoryPanel({ item }) {
	const { title, items } = item

	return (
		<ToolPanel title={title} tone='dark'>
			<ul className='mt-1 flex flex-col gap-2.5'>
				{items.map(({ id, text, tone }) => (
					<li key={id} className='flex items-center gap-2 text-sm font-bold text-white'>
						<span
							aria-hidden='true'
							className={`size-2 shrink-0 rounded-full ${DOT_TONES[tone]}`}
						/>
						{text}
					</li>
				))}
			</ul>
		</ToolPanel>
	)
}
