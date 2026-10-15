import AddButton from '../fields/AddButton'
import EntryCard from '../fields/EntryCard'
import TextField from '../fields/TextField'
import { useEntryAccordion } from '@/hooks'

export default function ExperienceStep({ texts, entries, onAdd, onRemove, onChange }) {
	const { fields } = texts
	const { isCollapsed, toggle, add } = useEntryAccordion(entries, onAdd)

	return (
		<div className='flex flex-col gap-4'>
			<ul className='flex flex-col gap-4'>
				{entries.map((entry, index) => {
					const set = (name) => (value) => onChange(entry.id, name, value)

					return (
						<EntryCard
							key={entry.id}
							title={`${texts.item} ${index + 1}`}
							summary={[entry.position, entry.company].filter(Boolean).join(' · ')}
							collapsed={isCollapsed(entry.id)}
							onToggle={() => toggle(entry.id)}
							removeLabel={texts.remove}
							onRemove={entries.length > 1 ? () => onRemove(entry.id) : undefined}
						>
							<div className='grid gap-4 min-[480px]:grid-cols-2'>
								<TextField
									item={fields.position}
									value={entry.position}
									onChange={set('position')}
								/>
								<TextField item={fields.company} value={entry.company} onChange={set('company')} />
								<TextField item={fields.from} value={entry.from} onChange={set('from')} />
								<TextField item={fields.to} value={entry.to} onChange={set('to')} />
								<TextField
									item={fields.description}
									value={entry.description}
									onChange={set('description')}
									className='min-[480px]:col-span-2'
								/>
							</div>
						</EntryCard>
					)
				})}
			</ul>
			<AddButton onClick={add}>{texts.add}</AddButton>
		</div>
	)
}
