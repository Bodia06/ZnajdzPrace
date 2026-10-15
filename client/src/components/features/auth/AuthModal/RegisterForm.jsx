import RegisterSuccess from './RegisterSuccess'
import AuthField from './fields/AuthField'
import CheckField from './fields/CheckField'
import FormAlert from './fields/FormAlert'
import PasswordStrength from './fields/PasswordStrength'
import RoleSwitch from './fields/RoleSwitch'
import Link from 'next/link'
import { AUTH_IDS, AUTH_ROLES } from '@/constants'
import { useRegisterForm } from '@/hooks'

export default function RegisterForm({ texts, onSwitch }) {
	const { role, values, errors, status, strength, setRole, setValue, submit } = useRegisterForm()
	const { fields } = texts
	const isCandidate = role === AUTH_ROLES.candidate
	const suffix = texts.roles.find((item) => item.value === role).suffix
	const submitting = status === 'submitting'

	const field = (name, extra = {}) => ({
		label: fields[name].label,
		name: fields[name].name,
		value: values[name],
		onChange: (e) => setValue(name)(e.target.value),
		autoComplete: fields[name].autoComplete,
		inputMode: fields[name].inputMode,
		placeholder: fields[name].placeholder,
		error: errors[name] && texts.errors[errors[name]],
		...extra
	})

	if (status === 'done') {
		return <RegisterSuccess texts={texts.success} email={values.email} onLogin={onSwitch} />
	}

	return (
		<form onSubmit={submit} noValidate className='flex flex-col gap-4'>
			<div className='flex flex-col gap-1'>
				<h2
					id={AUTH_IDS.registerTitle}
					className='text-2xl font-extrabold tracking-tight text-ink sm:text-3xl'
				>
					{texts.title}
				</h2>
				<p className='text-sm text-muted sm:text-base'>{texts.text}</p>
			</div>

			<RoleSwitch label={texts.rolesLabel} roles={texts.roles} value={role} onChange={setRole} />

			<FormAlert message={status === 'failed' ? texts.errors.server : undefined} />

			{isCandidate ? (
				<div className='grid gap-3 motion-safe:animate-fade-down min-[480px]:grid-cols-2'>
					<AuthField {...field('firstName')} type='text' />
					<AuthField {...field('lastName')} type='text' />
				</div>
			) : (
				<div className='grid gap-3 motion-safe:animate-fade-down min-[480px]:grid-cols-[3fr_2fr]'>
					<AuthField {...field('companyName')} type='text' />
					<AuthField {...field('nip')} type='text' />
				</div>
			)}

			<AuthField {...field('email')} type='email' />

			<div className='grid gap-3 min-[480px]:grid-cols-2'>
				<AuthField {...field('password')} type='password'>
					{values.password && <PasswordStrength level={strength} labels={texts.strength} />}
				</AuthField>
				<AuthField {...field('confirm')} type='password' />
			</div>

			<CheckField
				name={texts.terms.name}
				checked={values.terms}
				onChange={setValue('terms')}
				error={errors.terms && texts.errors[errors.terms]}
			>
				{texts.terms.before}{' '}
				<Link href={texts.terms.terms.link} className='font-bold text-primary hover:underline'>
					{texts.terms.terms.label}
				</Link>{' '}
				{texts.terms.and}{' '}
				<Link href={texts.terms.privacy.link} className='font-bold text-primary hover:underline'>
					{texts.terms.privacy.label}
				</Link>
			</CheckField>

			<button
				type='submit'
				disabled={submitting}
				className='min-h-14 cursor-pointer rounded-2xl bg-ink text-base font-extrabold text-white shadow-[0_10px_24px_rgba(14,15,26,0.25)] transition hover:opacity-90 active:scale-[0.99] disabled:cursor-wait disabled:opacity-70'
			>
				{submitting ? texts.submitting : `${texts.submit} ${suffix}`}
			</button>

			<p className='text-center text-sm text-muted sm:text-base'>
				{texts.switch.text}{' '}
				<button
					type='button'
					onClick={onSwitch}
					className='cursor-pointer p-1 font-extrabold text-primary hover:underline'
				>
					{texts.switch.action}
				</button>
			</p>
		</form>
	)
}
