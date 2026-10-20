import ColorSwatches from '@/components/features/generator/fields/ColorSwatches'
import { GENERATOR_COLORS, GENERATOR_TEMPLATE_IDS, GENERATOR_TEMPLATES } from '@/constants'

export default function TemplateStep({ texts, cv, onTemplate, onColor }) {
	return (
		<div className='flex flex-col gap-7'>
			<fieldset>
				<legend className='sr-only'>{texts.label}</legend>
				<div className='grid gap-3 min-[480px]:grid-cols-3'>
					{GENERATOR_TEMPLATES.map((template) => {
						const active = template.id === cv.template

						return (
							<label key={template.id} className='cursor-pointer'>
								<input
									type='radio'
									name='cv-template'
									value={template.id}
									checked={active}
									onChange={() => onTemplate(template.id)}
									className='peer sr-only'
								/>
								<span
									className={`flex h-full flex-row items-center gap-4 rounded-2xl border-[1.5px] p-3 transition peer-focus-visible:ring-4 peer-focus-visible:ring-primary/30 min-[480px]:flex-col min-[480px]:items-stretch min-[480px]:gap-3 ${
										active
											? 'border-primary bg-primary-soft'
											: 'border-ink/10 hover:border-primary/40'
									}`}
								>
									<span
										aria-hidden='true'
										className='flex aspect-3/4 w-20 shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-ink/10 min-[480px]:w-full'
									>
										<TemplateThumb id={template.id} />
									</span>
									<span className='flex flex-col gap-0.5'>
										<strong className='text-sm text-ink'>{template.name}</strong>
										<span className='text-xs leading-snug font-medium text-muted'>
											{template.text}
										</span>
									</span>
								</span>
							</label>
						)
					})}
				</div>
			</fieldset>
			<ColorSwatches
				label={texts.colorLabel}
				colors={GENERATOR_COLORS}
				value={cv.color}
				onChange={onColor}
			/>
		</div>
	)
}

function Line({ className = '' }) {
	return <span className={`block h-1 rounded-full bg-ink/15 ${className}`} />
}

function TemplateThumb({ id }) {
	if (id === GENERATOR_TEMPLATE_IDS.sidebar) {
		return (
			<span className='flex w-full'>
				<span className='w-1/3 bg-ink' />
				<span className='flex flex-1 flex-col gap-1.5 p-2.5'>
					<Line className='h-1.5 w-2/3 bg-ink/60' />
					<Line className='w-full' />
					<Line className='w-5/6' />
					<Line className='mt-1 w-full' />
					<Line className='w-3/4' />
				</span>
			</span>
		)
	}

	if (id === GENERATOR_TEMPLATE_IDS.banner) {
		return (
			<span className='flex w-full flex-col'>
				<span className='h-1/4 bg-ink' />
				<span className='flex flex-1 gap-2 p-2.5'>
					<span className='flex flex-1 flex-col gap-1.5'>
						<Line className='w-full' />
						<Line className='w-5/6' />
						<Line className='mt-1 w-full' />
						<Line className='w-2/3' />
					</span>
					<span className='flex w-1/3 flex-col gap-1.5'>
						<Line className='bg-primary/40' />
						<Line className='bg-primary/40' />
					</span>
				</span>
			</span>
		)
	}

	return (
		<span className='flex w-full flex-col gap-1.5 p-3'>
			<Line className='h-1.5 w-1/2 bg-ink/60' />
			<span className='block h-px bg-ink/40' />
			<Line className='mt-1 w-full' />
			<Line className='w-5/6' />
			<Line className='mt-1 w-full' />
			<Line className='w-2/3' />
			<Line className='mt-1 w-3/4' />
		</span>
	)
}
