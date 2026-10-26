import { useId, useState } from 'react'
import { LIST_ICONS } from './choiceIcons'
import { OFFER_FIELD_BOX } from './styles'
import FieldMessage from '@/components/ui/FieldMessage'
import CrossIcon from '@/components/ui/icons/CrossIcon'
import PlusIcon from '@/components/ui/icons/PlusIcon'

export default function OfferListField({ item, items, empty, onAdd, onRemove }) {
	const id = useId()
	const messageId = `${id}-message`
	const [draft, setDraft] = useState('')
	const [error, setError] = useState(null)

	const add = () => {
		const name = draft.trim()
		if (!name) return

		if (items.some((entry) => entry.toLowerCase() === name.toLowerCase())) {
			return setError(item.duplicate)
		}

		onAdd(name)
		setDraft('')
		setError(null)
	}

	return (
		<div className='flex min-w-0 flex-col gap-1.5 rounded-2xl bg-page/60 p-4 ring-1 ring-ink/5'>
			<div className='flex items-center gap-3 pb-1.5'>
				<span className='flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-ink/5'>
					{LIST_ICONS[item.name]}
				</span>
				<label htmlFor={id} className='min-w-0 flex-1 text-sm font-bold text-ink'>
					{item.label}
				</label>
				{items.length > 0 && (
					<span className='flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 text-xs font-extrabold text-white tabular-nums'>
						{items.length}
					</span>
				)}
			</div>
			<div
				className={`${OFFER_FIELD_BOX} bg-white! py-1.5 pr-1.5 pl-4 ${
					error ? 'border-red-500' : 'border-ink/10'
				}`}
			>
				<input
					id={id}
					type='text'
					value={draft}
					placeholder={item.placeholder}
					maxLength={item.maxLength}
					aria-invalid={Boolean(error) || undefined}
					aria-describedby={messageId}
					onChange={(event) => {
						setDraft(event.target.value)
						setError(null)
					}}
					onKeyDown={(event) => {
						if (event.key !== 'Enter') return
						event.preventDefault()
						add()
					}}
					className='min-w-0 flex-1 bg-transparent py-2 text-base font-medium text-ink outline-none placeholder:text-subtle'
				/>
				<button
					type='button'
					onClick={add}
					disabled={!draft.trim()}
					aria-label={item.add}
					className='flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-white transition hover:brightness-110 active:scale-[0.96] disabled:cursor-default disabled:bg-ink/10 disabled:text-ink/30'
				>
					<PlusIcon />
				</button>
			</div>
			<FieldMessage id={messageId} error={error} hint={item.hint} />
			{items.length > 0 ? (
				<ul className='mt-1.5 flex flex-wrap gap-2'>
					{items.map((entry) => (
						<li
							key={entry}
							className='flex min-w-0 items-center gap-1 rounded-full bg-white py-1 pr-1 pl-4 text-sm font-bold text-primary ring-1 ring-primary/20 motion-safe:animate-pop'
						>
							<span className='wrap-break-word'>{entry}</span>
							<button
								type='button'
								onClick={() => onRemove(entry)}
								aria-label={`${item.remove}: ${entry}`}
								className='flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition hover:bg-primary/15'
							>
								<CrossIcon className='size-3' />
							</button>
						</li>
					))}
				</ul>
			) : (
				<p className='mt-1.5 text-sm font-medium text-subtle'>{empty}</p>
			)}
		</div>
	)
}
