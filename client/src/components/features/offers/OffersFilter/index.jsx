'use client'

import FilterFields from './FilterFields'
import FilterHeader from './FilterHeader'
import FilterTrigger from './FilterTrigger'
import ArrowIcon from '@/components/ui/icons/ArrowIcon'
import { OFFERS_FILTER_DATA, OFFERS_IDS } from '@/constants'
import { useFilterSheet, useOffersFilter } from '@/hooks'

const PARAM_NAMES = ['location', 'contracts', 'modes', 'levels', 'salary'].map(
	(key) => OFFERS_FILTER_DATA[key].name
)

export default function OffersFilter({ initialFilters }) {
	const { title, clear, submit, toggle } = OFFERS_FILTER_DATA
	const { filters, activeCount, setField, toggleField, reset } = useOffersFilter(
		initialFilters,
		PARAM_NAMES
	)
	const { open, show, hide, panelRef, triggerRef } = useFilterSheet()

	return (
		<aside className='font-(family-name:--font-jakarta) lg:sticky lg:top-20'>
			<FilterTrigger
				ref={triggerRef}
				title={title}
				label={toggle.open}
				count={activeCount}
				open={open}
				controls={OFFERS_IDS.filterPanel}
				onClick={show}
			/>

			<div
				onClick={hide}
				aria-hidden='true'
				className={`fixed inset-0 z-55 bg-ink/50 transition-opacity duration-300 lg:hidden ${
					open ? 'opacity-100' : 'pointer-events-none opacity-0'
				}`}
			/>

			<section
				ref={panelRef}
				id={OFFERS_IDS.filterPanel}
				tabIndex={-1}
				aria-label={title}
				role={open ? 'dialog' : undefined}
				aria-modal={open || undefined}
				className={`fixed inset-x-0 bottom-0 z-60 mx-auto flex max-h-[90dvh] max-w-3xl flex-col rounded-t-3xl bg-white shadow-[0_-12px_40px_rgba(14,15,26,0.2)] transition-[translate,visibility] duration-300 ease-out outline-none lg:visible lg:static lg:max-h-none lg:max-w-none lg:translate-y-0 lg:rounded-3xl lg:shadow-[0_12px_40px_rgba(14,15,26,0.06)] lg:ring-1 lg:ring-ink/5 lg:motion-safe:animate-rise ${
					open ? 'visible translate-y-0' : 'invisible translate-y-full'
				}`}
			>
				<FilterHeader
					title={title}
					count={activeCount}
					clearLabel={clear}
					closeLabel={toggle.close}
					onClear={reset}
					onClose={hide}
				/>

				<div className='min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 lg:overflow-visible'>
					<FilterFields
						data={OFFERS_FILTER_DATA}
						filters={filters}
						setField={setField}
						toggleField={toggleField}
					/>
				</div>

				<div className='shrink-0 border-t border-ink/5 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 lg:border-0 lg:pt-1 lg:pb-6'>
					<button
						type='submit'
						form={OFFERS_IDS.form}
						className='group flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-ink text-base font-bold text-white shadow-[0_8px_20px_rgba(14,15,26,0.18)] transition hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.98]'
					>
						{submit}
						<ArrowIcon className='transition-transform duration-200 group-hover:translate-x-1' />
					</button>
				</div>
			</section>
		</aside>
	)
}
