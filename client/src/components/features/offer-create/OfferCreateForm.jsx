import BasicsStep from './steps/BasicsStep'
import ConditionsStep from './steps/ConditionsStep'
import DetailsStep from './steps/DetailsStep'
import SalaryStep from './steps/SalaryStep'
import OfferCreateHeader from './OfferCreateHeader'
import OfferCityField from './fields/OfferCityField'
import OfferInputField from './fields/OfferInputField'
import OfferChoiceField from './fields/OfferChoiceField'
import OfferListField from './fields/OfferListField'
import OfferTextareaField from './fields/OfferTextareaField'
import FormAlert from '@/components/features/auth/fields/FormAlert'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import {
	OFFER_CREATE_DATA,
	OFFER_CREATE_IDS,
	OFFER_CREATE_STEP_IDS,
	OFFER_CREATE_STEPS
} from '@/constants'

export default function OfferCreateForm({ form }) {
	const { values, error, submitting, stepIndex, isLast, goBack, submit } = form
	const { stepWord, of, nav, errors: messages } = OFFER_CREATE_DATA
	const step = OFFER_CREATE_STEPS[stepIndex]
	const texts = OFFER_CREATE_DATA[step.id]

	const renderField = (item, extra) => (
		<OfferTextareaField
			key={item.name}
			item={item}
			value={values[item.name]}
			onChange={form.setValue(item.name)}
			error={form.fieldError(item.name)}
			{...extra}
		/>
	)

	const renderInput = (item, icon, extra) => (
		<OfferInputField
			key={item.name}
			item={item}
			icon={icon}
			value={values[item.name]}
			onChange={form.setValue(item.name)}
			error={form.fieldError(item.name)}
			{...extra}
		/>
	)

	const renderCity = (item, icon) => (
		<OfferCityField
			key={item.name}
			item={item}
			icon={icon}
			value={values[item.name]}
			onChange={form.setValue(item.name)}
			error={form.fieldError(item.name)}
		/>
	)

	const renderList = (item) => (
		<OfferListField
			key={item.name}
			item={item}
			items={values[item.name]}
			empty={OFFER_CREATE_DATA.details.empty}
			onAdd={form.addItem(item.name)}
			onRemove={form.removeItem(item.name)}
		/>
	)

	const renderChoice = (type, item, { emptyHint, icons, columns } = {}) => (
		<OfferChoiceField
			key={item.name}
			type={type}
			{...item}
			emptyHint={emptyHint}
			icons={icons}
			columns={columns}
			value={values[item.name]}
			onChange={type === 'checkbox' ? form.toggleValue(item.name) : form.setValue(item.name)}
			error={form.fieldError(item.name)}
		/>
	)

	const panels = {
		[OFFER_CREATE_STEP_IDS.basics]: () => (
			<BasicsStep
				values={values}
				setValue={form.setValue}
				renderInput={renderInput}
				renderCity={renderCity}
			/>
		),
		[OFFER_CREATE_STEP_IDS.conditions]: () => <ConditionsStep renderChoice={renderChoice} />,
		[OFFER_CREATE_STEP_IDS.salary]: () => (
			<SalaryStep
				values={values}
				setValue={form.setValue}
				fieldError={form.fieldError}
				renderChoice={renderChoice}
			/>
		),
		[OFFER_CREATE_STEP_IDS.details]: () => (
			<DetailsStep renderField={renderField} renderList={renderList} />
		)
	}

	return (
		<form
			onSubmit={submit}
			noValidate
			aria-labelledby={OFFER_CREATE_IDS.panel(step.id)}
			className='flex flex-col gap-5 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-ink/5 sm:gap-6 sm:p-8'
		>
			<OfferCreateHeader
				step={step}
				index={stepIndex}
				total={OFFER_CREATE_STEPS.length}
				stepWord={stepWord}
				of={of}
				title={texts.title}
				text={texts.text}
			/>

			<FormAlert message={error ? messages[error] : undefined} />

			<div key={step.id}>{panels[step.id]()}</div>

			<div className='flex items-center justify-between gap-3 border-t border-ink/10 pt-4 sm:pt-5'>
				{stepIndex > 0 ? (
					<button
						type='button'
						onClick={goBack}
						className='flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-extrabold text-ink transition hover:border-primary/40 active:scale-[0.98]'
					>
						<ArrowIcon className='rotate-180' />
						{nav.prev}
					</button>
				) : (
					<span />
				)}
				{isLast ? (
					<button
						type='submit'
						disabled={submitting}
						className='min-h-12 cursor-pointer rounded-full bg-primary px-6 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(87,83,240,0.35)] transition hover:brightness-110 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70'
					>
						{submitting ? nav.submitting : nav.submit}
					</button>
				) : (
					<button
						type='submit'
						className='flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:opacity-90 active:scale-[0.98]'
					>
						{nav.next}
						<ArrowIcon />
					</button>
				)}
			</div>
		</form>
	)
}
