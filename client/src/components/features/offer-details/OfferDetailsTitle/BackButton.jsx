'use client'

import { useRouter } from 'next/navigation'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'

export default function BackButton({ label, fallbackHref }) {
	const router = useRouter()

	const back = () => {
		if (window.history.length > 1) router.back()
		else router.push(fallbackHref)
	}

	return (
		<button
			type='button'
			onClick={back}
			aria-label={label}
			className='flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-page text-ink transition hover:bg-primary-soft hover:text-primary active:scale-90 sm:size-12'
		>
			<ArrowIcon className='rotate-180' />
		</button>
	)
}
