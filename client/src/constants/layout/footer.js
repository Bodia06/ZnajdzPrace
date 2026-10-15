import { LINKS } from '../links'

export const FOOTER_DATA = {
	description:
		'Łączymy kandydatów z pracodawcami. Szukaj ofert, popraw CV z pomocą AI i rozmawiaj z rekruterem na czacie.',
	columns: [
		{
			id: 'candidates',
			title: 'Dla kandydatów',
			links: [
				{ id: 'offers', name: 'Oferty pracy', link: LINKS.OFFERS },
				{ id: 'analysis', name: 'Analiza CV', link: LINKS.ANALYSIS },
				{ id: 'generator', name: 'Generator CV', link: LINKS.GENERATOR },
				{ id: 'registration', name: 'Załóż konto', link: LINKS.REGISTRATION }
			]
		},
		{
			id: 'employers',
			title: 'Dla pracodawców',
			links: [
				{ id: 'company-account', name: 'Załóż konto firmy', link: LINKS.REGISTRATION },
				{ id: 'login', name: 'Zaloguj się', link: LINKS.LOGIN }
			]
		},
		{
			id: 'company',
			title: 'Firma',
			links: [{ id: 'contact', name: 'Kontakt', link: LINKS.CONTACT }]
		}
	],
	legal: [
		{ id: 'privacy', name: 'Polityka prywatności', link: LINKS.PRIVACY },
		{ id: 'terms', name: 'Regulamin', link: LINKS.TERMS }
	],
	rights: 'Wszelkie prawa zastrzeżone.'
}
