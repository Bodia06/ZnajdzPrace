'use client'

import { useTabKeyboard } from '@/hooks'

export default function HowItWorksTabs({ tabs, activeId, onChange }) {
	const handleKeyDown = useTabKeyboard({
		ids: tabs.map((tab) => tab.id),
		activeId,
		onChange
	})

	return (
		<div
			role='tablist'
			aria-label='Rodzaj użytkownika'
			onKeyDown={handleKeyDown}
			className='flex w-full shrink-0 gap-1 rounded-full bg-page p-1 sm:w-auto'
		>
			{tabs.map(({ id, label }) => {
				const selected = id === activeId

				return (
					<button
						key={id}
						type='button'
						role='tab'
						id={`tab-${id}`}
						tabIndex={selected ? 0 : -1}
						aria-selected={selected}
						aria-controls={`panel-${id}`}
						onClick={() => onChange(id)}
						className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors sm:flex-none sm:px-6 ${
							selected ? 'bg-ink text-white' : 'text-[#5b5d73] hover:text-ink'
						}`}
					>
						{label}
					</button>
				)
			})}
		</div>
	)
}
