export const OFFER_FIELD_BOX =
	'flex items-center gap-3 rounded-2xl border-[1.5px] bg-page/70 pl-4 pr-3 transition focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 hover:border-primary/30'

export const OFFER_FIELD_INPUT =
	'min-w-0 flex-1 bg-transparent py-3.5 text-base font-medium text-ink outline-none placeholder:text-subtle'

export const offerFieldBorder = (invalid) =>
	invalid ? 'border-red-500 bg-red-50' : 'border-ink/10'
