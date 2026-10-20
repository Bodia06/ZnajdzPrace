const TONES = {
	violet: 'bg-primary-soft text-primary',
	dark: 'bg-ink text-accent',
	peach: 'bg-orange-100 text-orange-700',
	solid: 'bg-primary text-white',
	sky: 'bg-sky-100 text-sky-600',
	lime: 'bg-lime-100 text-lime-800'
}

export default function CompanyLogo({ name, tone, className = '' }) {
	return (
		<span
			aria-hidden='true'
			className={`flex size-12 items-center justify-center rounded-2xl text-xl font-extrabold min-[750px]:size-17 min-[750px]:text-2xl ${TONES[tone] ?? TONES.violet} ${className}`}
		>
			{name.charAt(0)}
		</span>
	)
}
