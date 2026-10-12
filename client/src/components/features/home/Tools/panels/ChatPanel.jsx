import ToolPanel from '../ToolPanel'

export default function ChatPanel({ item }) {
	const { title, incoming, outgoing } = item

	return (
		<ToolPanel title={title}>
			<p className='w-fit max-w-full rounded-xl bg-page px-3 py-2 text-sm font-semibold text-ink'>
				{incoming}
			</p>
			<p className='ml-auto w-fit max-w-full rounded-xl bg-primary px-3 py-2 text-sm font-bold text-white'>
				{outgoing}
			</p>
		</ToolPanel>
	)
}
