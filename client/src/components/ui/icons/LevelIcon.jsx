const BARS = [
	{ x: 4, y: 15, h: 5 },
	{ x: 9.5, y: 11, h: 9 },
	{ x: 15, y: 7, h: 13 },
	{ x: 20.5, y: 3, h: 17 }
]

export default function LevelIcon({ level = 1, className = '' }) {
	return (
		<svg
			viewBox='0 0 24 24'
			className={`size-5 shrink-0 ${className}`}
			fill='none'
			strokeWidth='3'
			strokeLinecap='round'
			aria-hidden='true'
		>
			{BARS.map((bar, index) => (
				<path
					key={bar.x}
					d={`M${bar.x - 1} ${bar.y + bar.h}v-${bar.h - 1}`}
					stroke='currentColor'
					strokeOpacity={index < level ? 1 : 0.25}
				/>
			))}
		</svg>
	)
}
