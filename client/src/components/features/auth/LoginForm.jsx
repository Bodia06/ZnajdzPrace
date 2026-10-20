import AuthField from './fields/AuthField'
import AuthSwitch from './fields/AuthSwitch'
import FormAlert from './fields/FormAlert'
import PasswordField from './fields/PasswordField'
import CheckField from './fields/CheckField'
import Link from 'next/link'
import MailIcon from '@/components/ui/icons/MailIcon'
import { AUTH_IDS } from '@/constants'
import { useLoginForm } from '@/hooks'

export default function LoginForm({ texts, onSwitch }) {
	const { values, error, submitting, setValue, submit } = useLoginForm()
	const invalid = error === 'invalid'

	return (
		<form onSubmit={submit} noValidate className='flex flex-col gap-4'>
			<div className='flex flex-col gap-1'>
				<h2
					id={AUTH_IDS.title}
					className='text-2xl font-extrabold tracking-tight text-ink sm:text-3xl'
				>
					{texts.title}
				</h2>
				<p className='text-sm text-muted sm:text-base'>{texts.text}</p>
			</div>

			<FormAlert message={error ? texts.errors[error] : undefined} />

			<AuthField
				label={texts.email.label}
				icon={<MailIcon className='text-primary' />}
				type='email'
				name={texts.email.name}
				value={values.email}
				onChange={(e) => setValue('email')(e.target.value)}
				placeholder={texts.email.placeholder}
				autoComplete={texts.email.autoComplete}
				invalid={invalid}
			/>
			<PasswordField
				texts={texts.password}
				showLabel={texts.password.show}
				hideLabel={texts.password.hide}
				labelAside={
					<Link
						href={texts.password.forgot.link}
						className='font-bold text-primary hover:underline'
					>
						{texts.password.forgot.label}
					</Link>
				}
				value={values.password}
				onChange={(e) => setValue('password')(e.target.value)}
				invalid={invalid}
			/>
			<CheckField
				name={texts.remember.name}
				checked={values.remember}
				onChange={setValue('remember')}
			>
				{texts.remember.label}
			</CheckField>

			<button
				type='submit'
				disabled={submitting}
				className='min-h-14 cursor-pointer rounded-2xl bg-primary text-base font-extrabold text-white shadow-[0_10px_24px_rgba(87,83,240,0.35)] transition hover:brightness-110 active:scale-[0.99] disabled:cursor-wait disabled:opacity-70'
			>
				{submitting ? texts.submitting : texts.submit}
			</button>

			<AuthSwitch text={texts.switch.text} action={texts.switch.action} onSwitch={onSwitch} />
		</form>
	)
}
