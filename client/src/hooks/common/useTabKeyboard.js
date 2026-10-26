'use client'

export default function useTabKeyboard({
	ids,
	activeId,
	onChange,
	getTabId = (id) => `tab-${id}`
}) {
	return (event) => {
		const index = ids.indexOf(activeId)
		let next

		if (event.key === 'ArrowRight') next = (index + 1) % ids.length
		else if (event.key === 'ArrowLeft') next = (index - 1 + ids.length) % ids.length
		else if (event.key === 'Home') next = 0
		else if (event.key === 'End') next = ids.length - 1
		else return

		event.preventDefault()
		onChange(ids[next])
		document.getElementById(getTabId(ids[next]))?.focus()
	}
}
