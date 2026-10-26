import { useId } from 'react'
import { LIST_ICONS } from './choiceIcons'
import { offerFieldBorder } from './styles'
import FieldMessage from '@/components/ui/FieldMessage'

export default function OfferTextareaField({ item, value, onChange, error }) {
	const id = useId()
	const messageId = `${id}-message`

	return (
		<div className='flex min-w-0 flex-col gap-1.5'>
			<div
				className={`flex flex-col gap-1 rounded-2xl border-[1.5px] bg-page/70 px-5 pt-4 pb-3 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 hover:border-primary/30 ${offerFieldBorder(error)}`}
			>
				<div className='flex items-center justify-between gap-3'>
					<label
						htmlFor={id}
						className='flex items-center gap-2 text-xs font-extrabold tracking-wide text-primary uppercase'
					>
						{LIST_ICONS[item.name]}
						{item.label}
					</label>
					{item.maxLength && (
						<span className='text-xs font-medium text-subtle tabular-nums'>
							{value.length}/{item.maxLength}
						</span>
					)}
				</div>
				<textarea
					id={id}
					rows={5}
					value={value}
					placeholder={item.placeholder}
					maxLength={item.maxLength}
					aria-invalid={Boolean(error) || undefined}
					aria-describedby={error ? messageId : undefined}
					onChange={(event) => onChange(event.target.value)}
					className='min-h-28 w-full resize-y bg-transparent text-base leading-relaxed font-medium text-ink outline-none placeholder:text-subtle'
				/>
			</div>
			<FieldMessage id={messageId} error={error} />
		</div>
	)
}
