import { AUTH_ROLES } from '@/constants/auth/modes'
import { LINKS } from '@/constants/layout/links'

export const NAVIGATION_ITEMS = [
	{ id: 'offers', name: 'Oferty pracy', link: LINKS.OFFERS },
	{ id: 'analysis', name: 'Analiza CV', link: LINKS.ANALYSIS, badge: 'AI' },
	{ id: 'generator', name: 'Generator CV', link: LINKS.GENERATOR }
]

export const LOGOUT_LABEL = 'Wyloguj się'

export const USER_MENU = {
	label: 'Menu użytkownika',
	items: [
		{ id: 'offer-new', name: 'Dodaj ofertę', link: LINKS.OFFER_NEW, accent: true, role: AUTH_ROLES.employer },
		{ id: 'settings', name: 'Ustawienia', link: LINKS.SETTINGS }
	]
}

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
