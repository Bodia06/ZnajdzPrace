export default function UserMenuTile({ children, accent = false }) {
	return (
		<span
			className={`flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
				accent
					? 'bg-accent text-ink'
					: 'bg-page text-ink/70 group-hover:bg-white group-hover:text-primary'
			}`}
		>
			{children}
		</span>
	)
}
