import { CARD, LABEL, VALUE } from './styles'

export default function Fact({ label, children }) {
	return (
		<div className={`${CARD} bg-white shadow-[0_8px_30px_rgba(14,15,26,0.05)] ring-1 ring-ink/5`}>
			<dt className={LABEL}>{label}</dt>
			<dd className={VALUE}>{children}</dd>
		</div>
	)
}
