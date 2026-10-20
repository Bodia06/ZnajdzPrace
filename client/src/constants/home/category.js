import { LINKS } from '@/constants/layout/links'

export const CATEGORY_DATA = {
	badge: 'Kategorie',
	title: 'Oferty z każdej branży',
	button: {
		title: 'Wszystkie oferty',
		link: LINKS.OFFERS
	},
	cards: [
		{
			id: 'it',
			code: 'IT',
			title: 'IT i programowanie',
			link: `${LINKS.OFFERS}?category=it`,
			variant: 'dark'
		},
		{
			id: 'sales',
			code: 'SP',
			title: 'Sprzedaż',
			link: `${LINKS.OFFERS}?category=sprzedaz`,
			variant: 'light'
		},
		{
			id: 'finance',
			code: 'FK',
			title: 'Finanse i księgowość',
			link: `${LINKS.OFFERS}?category=finanse`,
			variant: 'peach'
		},
		{
			id: 'logistics',
			code: 'LM',
			title: 'Logistyka i magazyn',
			link: `${LINKS.OFFERS}?category=logistyka`,
			variant: 'primary'
		}
	]
}
