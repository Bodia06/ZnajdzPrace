export default function Collapse({ open, offset, children }) {
	return (
		<div
			aria-hidden={!open}
			className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out motion-reduce:transition-none ${
				open ? 'm-0 grid-rows-[1fr] opacity-100' : `grid-rows-[0fr] opacity-0 ${offset}`
			}`}
		>
			<div className='min-h-0 overflow-hidden'>{children}</div>
		</div>
	)
}
