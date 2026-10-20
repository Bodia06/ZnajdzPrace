export default function AuthSwitch({ text, action, onSwitch }) {
	return (
		<p className='text-center text-sm text-muted sm:text-base'>
			{text}{' '}
			<button
				type='button'
				onClick={onSwitch}
				className='cursor-pointer p-1 font-extrabold text-primary hover:underline'
			>
				{action}
			</button>
		</p>
	)
}
