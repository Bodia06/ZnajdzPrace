import EducationStep from './steps/EducationStep'
import ExperienceStep from './steps/ExperienceStep'
import PersonalStep from './steps/PersonalStep'
import SkillsStep from './steps/SkillsStep'
import TemplateStep from './steps/TemplateStep'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import {
	GENERATOR_DATA,
	GENERATOR_IDS,
	GENERATOR_PANEL_HEIGHT,
	GENERATOR_STEP_IDS,
	GENERATOR_STEPS
} from '@/constants'

export default function GeneratorForm({ builder }) {
	const { cv, stepIndex, isFirst, isLast, back, next, download } = builder
	const step = GENERATOR_STEPS[stepIndex]
	const nextStep = GENERATOR_STEPS[stepIndex + 1]
	const texts = GENERATOR_DATA[step.id]
	const { nav, stepWord, of } = GENERATOR_DATA

	return (
		<section
			aria-labelledby={GENERATOR_IDS.panel(step.id)}
			className={`flex ${GENERATOR_PANEL_HEIGHT} flex-col gap-5 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-ink/5 sm:gap-6 sm:p-8`}
		>
			<header className='shrink-0 px-1 sm:px-0'>
				<p className='hidden text-xs font-extrabold tracking-wide text-primary uppercase sm:block'>
					{stepWord} {stepIndex + 1} {of} {GENERATOR_STEPS.length}
				</p>
				<h3
					id={GENERATOR_IDS.panel(step.id)}
					className='text-2xl font-extrabold tracking-tight text-ink sm:text-3xl'
				>
					{texts.title}
				</h3>
				<p className='mt-1 text-sm text-muted sm:mt-1.5 sm:text-base'>{texts.text}</p>
			</header>

			<div
				key={step.id}
				className='-mx-1 min-h-0 flex-1 overflow-y-auto overscroll-contain mask-[linear-gradient(to_bottom,black_calc(100%-1.5rem),transparent)] px-1 pt-1 pb-6 motion-safe:animate-fade-down'
			>
				{step.id === GENERATOR_STEP_IDS.template && (
					<TemplateStep
						texts={texts}
						cv={cv}
						onTemplate={builder.setTemplate}
						onColor={builder.setColor}
					/>
				)}
				{step.id === GENERATOR_STEP_IDS.personal && (
					<PersonalStep
						texts={texts}
						personal={cv.personal}
						onChange={builder.setPersonal}
						fieldProps={builder.fieldProps}
					/>
				)}
				{step.id === GENERATOR_STEP_IDS.experience && (
					<ExperienceStep
						texts={texts}
						entries={cv.experience}
						onAdd={() => builder.addEntry('experience')}
						onRemove={(id) => builder.removeEntry('experience', id)}
						onChange={(id, name, value) => builder.setEntry('experience', id, name, value)}
						fieldProps={builder.fieldProps}
						isInvalid={builder.isInvalid}
					/>
				)}
				{step.id === GENERATOR_STEP_IDS.education && (
					<EducationStep
						texts={texts}
						entries={cv.education}
						onAdd={() => builder.addEntry('education')}
						onRemove={(id) => builder.removeEntry('education', id)}
						onChange={(id, name, value) => builder.setEntry('education', id, name, value)}
						fieldProps={builder.fieldProps}
						isInvalid={builder.isInvalid}
					/>
				)}
				{step.id === GENERATOR_STEP_IDS.skills && (
					<SkillsStep
						texts={texts}
						skills={cv.skills}
						languages={cv.languages}
						onAddSkill={builder.addSkill}
						onRemoveSkill={builder.removeSkill}
						onAddLanguage={builder.addLanguage}
						onRemoveLanguage={builder.removeLanguage}
						onChangeLanguage={builder.setLanguage}
						fieldProps={builder.fieldProps}
						errorTexts={GENERATOR_DATA.errors}
					/>
				)}
			</div>

			<div className='flex shrink-0 items-center justify-between gap-3 border-t border-ink/10 pt-4 sm:pt-5'>
				<button
					type='button'
					onClick={back}
					disabled={isFirst}
					className='flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-ink ring-1 ring-ink/15 transition hover:bg-page active:scale-[0.98] disabled:invisible'
				>
					<ArrowIcon className='rotate-180' />
					{nav.back}
				</button>
				<button
					type='button'
					onClick={isLast ? download : next}
					className='flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:opacity-90 active:scale-[0.98]'
				>
					{isLast ? (
						nav.finish
					) : (
						<span>
							{nav.next}
							<span className='hidden sm:inline'>: {nextStep.label}</span>
						</span>
					)}
					{!isLast && <ArrowIcon />}
				</button>
			</div>
		</section>
	)
}
