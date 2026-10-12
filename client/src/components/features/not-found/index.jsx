import Button from '@/components/ui/Button'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import { NOT_FOUND_DATA } from '@/constants'
import NotFoundCards from './NotFoundCards'
import NotFoundCode from './NotFoundCode'
import NotFoundStage from './NotFoundStage'

const rise = (delay) => ({ animationDelay: `${delay}ms` })

export default function NotFound() {
	const { title, description, button, cards } = NOT_FOUND_DATA

	return (
		<NotFoundStage>
			<NotFoundCards item={cards} />
			<div className='relative mx-auto flex w-full max-w-2xl flex-col items-center text-center'>
				<NotFoundCode />
				<h2
					id='not-found-title'
					style={rise(150)}
					className='mt-4 animate-rise text-3xl leading-[1.05] font-extrabold tracking-[-0.04em] text-balance motion-reduce:animate-none sm:mt-6 sm:text-5xl lg:text-6xl'
				>
					{title.before}{' '}
					<span className='inline-block -rotate-1 rounded-[0.25em] bg-accent px-[0.18em] pb-[0.04em] text-ink'>
						{title.highlight}
					</span>{' '}
					{title.after}
				</h2>
				<p
					style={rise(300)}
					className='mt-4 max-w-md animate-rise text-sm leading-relaxed text-pretty text-subtle motion-reduce:animate-none sm:text-base'
				>
					{description}
				</p>
				<div style={rise(450)} className='mt-8 animate-rise motion-reduce:animate-none'>
					<Button href={button.link} variant='accent' className='inline-flex items-center gap-2'>
						<ArrowIcon className='rotate-180' />
						{button.name}
					</Button>
				</div>
			</div>
		</NotFoundStage>
	)
}
