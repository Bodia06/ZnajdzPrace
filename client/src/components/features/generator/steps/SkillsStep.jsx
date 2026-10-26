import { useId, useState } from 'react'
import AddButton from '@/components/features/generator/fields/AddButton'
import EntryCard from '@/components/features/generator/fields/EntryCard'
import LevelSelect from '@/components/features/generator/fields/LevelSelect'
import TextField from '@/components/features/generator/fields/TextField'
import FieldMessage from '@/components/ui/FieldMessage'
import CrossIcon from '@/components/ui/icons/CrossIcon'
import { GENERATOR_LIMITS } from '@/constants'
import { CONTROL } from '@/components/features/generator/fields/styles'

export default function SkillsStep({
	texts,
	skills,
	languages,
	onAddSkill,
	onRemoveSkill,
	onAddLanguage,
	onRemoveLanguage,
	onChangeLanguage,
	fieldProps,
	errorTexts
}) {
	const [draft, setDraft] = useState('')
	const [skillError, setSkillError] = useState(null)
	const skillId = useId()
	const skillMessageId = `${skillId}-message`

	const changeDraft = (value) => {
		setDraft(value)
		setSkillError(null)
	}

	const submitSkill = () => {
		const error = onAddSkill(draft)
		setSkillError(error)
		if (!error) setDraft('')
	}

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-3'>
				<label htmlFor={skillId} className='text-sm font-bold text-ink'>
					{texts.skillsLabel}
				</label>
				<div className='flex gap-2'>
					<input
						id={skillId}
						value={draft}
						placeholder={texts.skillPlaceholder}
						maxLength={GENERATOR_LIMITS.skill}
						aria-invalid={Boolean(skillError) || undefined}
						aria-describedby={skillMessageId}
						onChange={(event) => changeDraft(event.target.value)}
						onKeyDown={(event) => {
							if (event.key !== 'Enter') return
							event.preventDefault()
							submitSkill()
						}}
						className={`${CONTROL} h-12 ${skillError ? 'border-red-500! bg-red-50 focus:bg-white' : ''}`}
					/>
					<button
						type='button'
						onClick={submitSkill}
						className='h-12 shrink-0 cursor-pointer rounded-xl bg-ink px-5 text-sm font-extrabold text-white transition hover:opacity-90 active:scale-[0.98]'
					>
						{texts.addSkill}
					</button>
				</div>
				<FieldMessage
					id={skillMessageId}
					error={skillError && errorTexts[skillError]}
					hint={`${texts.skillHint} (${skills.length}/${GENERATOR_LIMITS.skills})`}
				/>
				{skills.length > 0 && (
					<ul className='flex flex-wrap gap-2'>
						{skills.map((skill) => (
							<li
								key={skill}
								className='flex items-center gap-1 rounded-full bg-primary-soft py-1 pr-1 pl-4 text-sm font-bold text-primary motion-safe:animate-pop'
							>
								{skill}
								<button
									type='button'
									onClick={() => onRemoveSkill(skill)}
									aria-label={`${texts.removeSkill}: ${skill}`}
									className='flex size-7 cursor-pointer items-center justify-center rounded-full transition hover:bg-primary/15'
								>
									<CrossIcon className='size-3' />
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			<div className='flex flex-col gap-4'>
				<h4 className='text-sm font-bold text-ink'>{texts.languagesLabel}</h4>
				{languages.length > 0 && (
					<ul className='flex flex-col gap-3'>
						{languages.map((language, index) => (
							<EntryCard
								key={language.id}
								title={`${texts.languagesLabel} ${index + 1}`}
								removeLabel={texts.removeLanguage}
								onRemove={() => onRemoveLanguage(language.id)}
							>
								<div className='grid gap-4 min-[480px]:grid-cols-[1fr_9rem]'>
									<TextField
										item={texts.languageName}
										value={language.name}
										onChange={(value) => onChangeLanguage(language.id, 'name', value)}
										{...fieldProps(`languages.${language.id}.name`)}
									/>
									<LevelSelect
										label={texts.languageLevel}
										value={language.level}
										onChange={(value) => onChangeLanguage(language.id, 'level', value)}
									/>
								</div>
							</EntryCard>
						))}
					</ul>
				)}
				<AddButton onClick={onAddLanguage}>{texts.addLanguage}</AddButton>
			</div>
		</div>
	)
}
