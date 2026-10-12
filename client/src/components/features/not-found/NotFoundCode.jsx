import Parallax from '@/components/ui/motion/Parallax'
import MagnifierIcon from '@/components/ui/icons/MagnifierIcon'

export default function NotFoundCode() {
	return (
		<div
			aria-hidden='true'
			className='flex animate-rise items-center justify-center text-[7rem] leading-none font-extrabold tracking-[-0.06em] text-white motion-reduce:animate-none sm:text-[11rem] lg:text-[14rem]'
		>
			4
			<Parallax depth={28} className='mx-[0.02em]'>
				<MagnifierIcon className='size-[0.8em] animate-scan text-accent motion-reduce:animate-none' />
			</Parallax>
			4
		</div>
	)
}
