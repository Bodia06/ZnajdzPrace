import TemplateThumb from '@/components/features/generator/fields/TemplateThumb'
import ColorSwatches from '@/components/features/generator/fields/ColorSwatches'
import { GENERATOR_COLORS, GENERATOR_TEMPLATES } from '@/constants'

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
