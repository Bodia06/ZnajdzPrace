import { LINKS } from '@/constants/layout/links'
import { OFFERS_DATA } from '@/constants/offers/search'

const searchLink = (query) =>
	`${LINKS.OFFERS}?${new URLSearchParams({ [OFFERS_DATA.search.query.name]: query })}`

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
			link: searchLink('IT'),
			variant: 'dark'
		},
		{
			id: 'sales',
			code: 'SP',
			title: 'Sprzedaż',
			link: searchLink('Sprzedaż'),
			variant: 'light'
		},
		{
			id: 'finance',
			code: 'FK',
			title: 'Finanse i księgowość',
			link: searchLink('Finanse'),
			variant: 'peach'
		},
		{
			id: 'logistics',
			code: 'LM',
			title: 'Logistyka i magazyn',
			link: searchLink('Logistyka'),
			variant: 'primary'
		}
	]
}
