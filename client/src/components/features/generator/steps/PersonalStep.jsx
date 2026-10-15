import TextField from '../fields/TextField'

export default function PersonalStep({ texts, personal, onChange }) {
	const { fields } = texts
	const field = (name, className) => (
		<TextField
			item={fields[name]}
			value={personal[name]}
			onChange={(value) => onChange(name, value)}
			className={className}
		/>
	)

	return (
		<div className='grid gap-4 min-[480px]:grid-cols-2'>
			{field('firstName')}
			{field('lastName')}
			{field('jobTitle', 'min-[480px]:col-span-2')}
			{field('email')}
			{field('phone')}
			{field('city', 'min-[480px]:col-span-2')}
			{field('summary', 'min-[480px]:col-span-2')}
		</div>
	)
}
