import { useId, useState } from 'react'
import AddButton from '@/components/features/generator/fields/AddButton'
import EntryCard from '@/components/features/generator/fields/EntryCard'
import TextField from '@/components/features/generator/fields/TextField'
import CrossIcon from '@/components/ui/icons/CrossIcon'
import { GENERATOR_LEVELS } from '@/constants'
import { CONTROL } from '@/components/features/generator/fields/styles'

export default function SkillsStep({
	texts,
	skills,
	languages,
	onAddSkill,
	onRemoveSkill,
	onAddLanguage,
	onRemoveLanguage,
	onChangeLanguage
}) {
	const [draft, setDraft] = useState('')
	const skillId = useId()

	const submitSkill = () => {
		if (onAddSkill(draft)) setDraft('')
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
						onChange={(event) => setDraft(event.target.value)}
						onKeyDown={(event) => {
							if (event.key !== 'Enter') return
							event.preventDefault()
							submitSkill()
						}}
						className={`${CONTROL} h-12`}
					/>
					<button
						type='button'
						onClick={submitSkill}
						className='h-12 shrink-0 cursor-pointer rounded-xl bg-ink px-5 text-sm font-extrabold text-white transition hover:opacity-90 active:scale-[0.98]'
					>
						{texts.addSkill}
					</button>
				</div>
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

function LevelSelect({ label, value, onChange }) {
	const id = useId()

	return (
		<div className='flex flex-col gap-1.5'>
			<label htmlFor={id} className='text-sm font-bold text-ink'>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className={`${CONTROL} h-12 cursor-pointer`}
			>
				{GENERATOR_LEVELS.map((level) => (
					<option key={level} value={level}>
						{level}
					</option>
				))}
			</select>
		</div>
	)
}
