import DownloadIcon from '@/components/ui/icons/DownloadIcon'
import { GENERATOR_IDS } from '@/constants'

const BUTTON =
	'min-h-12 cursor-pointer rounded-full px-6 text-sm font-extrabold whitespace-nowrap transition active:scale-[0.98]'

export default function GeneratorTitle({ texts, saved, onSave, onDownload }) {
	return (
		<div className='flex flex-col items-center gap-5 text-center md:flex-row md:items-end md:justify-between md:gap-8 md:text-left print:hidden'>
			<div className='flex min-w-0 flex-col items-center md:items-start'>
				<h2
					id={GENERATOR_IDS.title}
					className='text-[2rem] leading-[1.05] font-extrabold tracking-tight text-ink min-[400px]:text-4xl sm:text-5xl'
				>
					{texts.heading}
				</h2>
				<p className='mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base'>
					{texts.text}
				</p>
			</div>
			<div className='flex w-full max-w-sm flex-col gap-2.5 sm:gap-3 md:w-auto md:max-w-none md:shrink-0 md:flex-row'>
				<button
					type='button'
					onClick={onSave}
					aria-live='polite'
					className={`${BUTTON} grid place-items-center bg-white text-ink shadow-sm ring-1 ring-ink/10 hover:bg-primary-soft`}
				>
					<span className={`[grid-area:1/1] ${saved ? 'invisible' : ''}`}>{texts.draft}</span>
					<span className={`[grid-area:1/1] ${saved ? '' : 'invisible'}`} aria-hidden={!saved}>
						{texts.draftSaved}
					</span>
				</button>
				<button
					type='button'
					onClick={onDownload}
					className={`${BUTTON} flex items-center justify-center gap-2 bg-primary text-white shadow-[0_10px_24px_rgba(87,83,240,0.35)] hover:brightness-110`}
				>
					<DownloadIcon />
					{texts.download}
				</button>
			</div>
		</div>
	)
}
