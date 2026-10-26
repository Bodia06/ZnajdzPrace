import ChatPanel from './panels/ChatPanel'
import FavoritesPanel from './panels/FavoritesPanel'
import HistoryPanel from './panels/HistoryPanel'
import ToolCard from '@/components/features/home/Tools/shared/ToolCard'
import ToolLink from '@/components/features/home/Tools/shared/ToolLink'

export default function CandidatePanelCard({ item, className }) {
	const { badge, title, chat, history, favorites, button } = item

	return (
		<ToolCard tone='accent' badge={badge} title={title} className={className}>
			<div className='mt-5 grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3'>
				<ChatPanel item={chat} />
				<HistoryPanel item={history} />
				<FavoritesPanel item={favorites} />
			</div>
			<ToolLink href={button.link} className='mt-5'>
				{button.title}
			</ToolLink>
		</ToolCard>
	)
}
