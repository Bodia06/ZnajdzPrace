const TITLE =
	'mb-2 border-b pb-1 text-[10px] font-extrabold tracking-[0.14em] uppercase print:break-after-avoid'

export default function CvSection({ title, color, children }) {
	return (
		<div>
			<p className={TITLE} style={{ color, borderColor: `${color}33` }}>
				{title}
			</p>
			{children}
		</div>
	)
}
