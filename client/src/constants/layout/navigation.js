import { LINKS } from '@/constants/layout/links'

export const NAVIGATION_ITEMS = [
	{ id: 'offers', name: 'Oferty pracy', link: LINKS.OFFERS },
	{ id: 'offer-new', name: 'Dodaj ofertę', link: LINKS.OFFER_NEW },
	{ id: 'analysis', name: 'Analiza CV', link: LINKS.ANALYSIS, badge: 'AI' },
	{ id: 'generator', name: 'Generator CV', link: LINKS.GENERATOR }
]

export const AUTH_ITEMS = [
	{
		id: 'login',
		name: 'Zaloguj się',
		link: LINKS.LOGIN,
		variant: 'ghost'
	},
	{
		id: 'registration',
		name: 'Załóż konto',
		link: LINKS.REGISTRATION,
		variant: 'primary'
	}
]
