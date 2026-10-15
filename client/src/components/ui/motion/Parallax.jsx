export default function Parallax({ depth = 20, className = '', children }) {
	return (
		<div
			className={`transition-transform duration-200 ease-out ${className}`}
			style={{
				transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`
			}}
		>
			{children}
		</div>
	)
}
