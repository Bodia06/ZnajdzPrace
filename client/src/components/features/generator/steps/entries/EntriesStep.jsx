import AddButton from '@/components/features/generator/fields/AddButton'
import EntryCard from '@/components/features/generator/fields/EntryCard'
import TextField from '@/components/features/generator/fields/TextField'
import { useEntryAccordion } from '@/hooks'

const WIDE = 'min-[480px]:col-span-2'

export default function EntriesStep({
	section,
	texts,
	entries,
	fields,
	summaryFields,
	onAdd,
	onRemove,
	onChange,
	fieldProps,
	isInvalid
}) {
	const { isCollapsed, toggle, add } = useEntryAccordion(entries, onAdd)

	return (
		<div className='flex flex-col gap-4'>
			<ul className='flex flex-col gap-4'>
				{entries.map((entry, index) => (
					<EntryCard
						key={entry.id}
						title={`${texts.item} ${index + 1}`}
						summary={summaryFields
							.map((name) => entry[name])
							.filter(Boolean)
							.join(' · ')}
						collapsed={isCollapsed(entry.id) && !isInvalid(`${section}.${entry.id}.`)}
						onToggle={() => toggle(entry.id)}
						removeLabel={texts.remove}
						onRemove={entries.length > 1 ? () => onRemove(entry.id) : undefined}
					>
						<div className='grid gap-4 min-[480px]:grid-cols-2'>
							{fields.map(({ name, wide }) => (
								<TextField
									key={name}
									item={texts.fields[name]}
									value={entry[name]}
									onChange={(value) => onChange(entry.id, name, value)}
									className={wide ? WIDE : ''}
									{...fieldProps(`${section}.${entry.id}.${name}`)}
								/>
							))}
						</div>
					</EntryCard>
				))}
			</ul>
			<AddButton onClick={add}>{texts.add}</AddButton>
		</div>
	)
}
