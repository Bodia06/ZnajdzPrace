'use client'

import { useState } from 'react'
import PreviewZoom from './PreviewZoom'
import CvSheet from './preview/CvSheet'
import ExpandIcon from '@/components/ui/icons/ExpandIcon'
import { GENERATOR_PANEL_HEIGHT_LG } from '@/constants'

export default function GeneratorResult({ texts, cv }) {
	const [zoomed, setZoomed] = useState(false)

	return (
		<aside
			aria-label={texts.title}
			className={`flex flex-col gap-3 rounded-3xl bg-white p-3 shadow-sm ring-1 ring-ink/5 sm:gap-4 sm:p-5 ${GENERATOR_PANEL_HEIGHT_LG} lg:overflow-hidden`}
		>
			<div className='flex shrink-0 items-center justify-between gap-3 px-1'>
				<p className='flex min-w-0 items-center gap-2.5 text-base font-extrabold text-ink sm:text-lg'>
					<span aria-hidden='true' className='relative flex size-2.5 shrink-0'>
						<span className='absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-ping' />
						<span className='relative size-2.5 rounded-full bg-emerald-500' />
					</span>
					<span className='truncate'>{texts.title}</span>
					<span className='hidden shrink-0 rounded-md bg-page px-1.5 py-0.5 text-[11px] font-extrabold text-muted min-[440px]:block'>
						{texts.format}
					</span>
				</p>
				<button
					type='button'
					onClick={() => setZoomed(true)}
					aria-label={texts.zoomLabel}
					className='flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary-soft px-3.5 text-sm font-extrabold text-primary transition hover:brightness-95 active:scale-[0.98] sm:px-4'
				>
					<ExpandIcon />
					{texts.zoom}
				</button>
			</div>
			<div className='rounded-2xl bg-page p-3 sm:p-5 lg:min-h-0 lg:flex-1 lg:overflow-hidden'>
				<CvSheet cv={cv} label={texts.label} />
			</div>
			{zoomed && <PreviewZoom texts={texts} cv={cv} onClose={() => setZoomed(false)} />}
		</aside>
	)
}
