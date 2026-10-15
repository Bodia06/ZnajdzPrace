'use client'

import { useRef } from 'react'
import CvSheet from './preview/CvSheet'
import CrossIcon from '@/components/ui/icons/CrossIcon'
import { useModalFocus, useScrollLock } from '@/hooks'

export default function PreviewZoom({ texts, cv, onClose }) {
	const dialogRef = useRef(null)

	useScrollLock()
	useModalFocus(dialogRef, onClose)

	return (
		<div
			ref={dialogRef}
			tabIndex={-1}
			role='dialog'
			aria-modal='true'
			aria-label={texts.title}
			className='fixed inset-0 z-60 flex flex-col bg-ink/80 backdrop-blur-sm outline-none motion-safe:animate-fade-in print:hidden'
		>
			<div className='flex shrink-0 items-center justify-between gap-3 px-4 py-3'>
				<p className='text-base font-extrabold text-white'>{texts.title}</p>
				<button
					type='button'
					onClick={onClose}
					aria-label={texts.close}
					className='flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-ink transition hover:bg-primary-soft'
				>
					<CrossIcon className='size-4' />
				</button>
			</div>
			<div className='min-h-0 flex-1 overflow-auto overscroll-contain px-4 pb-6'>
				<div className='mx-auto w-fit motion-safe:animate-modal-in'>
					<CvSheet cv={cv} label={texts.label} fixedScale={1} />
				</div>
			</div>
		</div>
	)
}
