export default function ScoreRing({
	value,
	fill,
	track,
	innerClassName = '',
	className = '',
	children
}) {
	return (
		<div
			className={`flex shrink-0 items-center justify-center rounded-full ${className}`}
			style={{ background: `conic-gradient(${fill} 0 ${value}%, ${track} ${value}% 100%)` }}
		>
			<div
				className={`flex size-[78%] flex-col items-center justify-center rounded-full ${innerClassName}`}
			>
				{children}
			</div>
		</div>
	)
}
