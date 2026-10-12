import { LINKS } from '../links'

export const FAQ_DATA = {
	badge: 'FAQ',
	title: 'Częste pytania',
	description:
		'Nie ma tu Twojego pytania? Napisz do nas – odpowiemy w ciągu jednego dnia roboczego.',
	button: { title: 'Kontakt', link: LINKS.CONTACT },
	defaultOpenId: 'security',
	items: [
		{
			id: 'free',
			question: 'Czy korzystanie z portalu jest darmowe dla kandydatów?',
			answer:
				'Tak. Przeglądanie ofert, aplikowanie, analiza CV i generator CV są bezpłatne dla kandydatów.'
		},
		{
			id: 'analysis',
			question: 'Jak działa analiza CV z AI?',
			answer:
				'Wgrywasz CV w formacie PDF lub DOCX, a AI ocenia je w kilku kategoriach i podpowiada konkretne poprawki. Możesz też porównać CV z wybraną ofertą.'
		},
		{
			id: 'chat',
			question: 'Kto może rozpocząć czat?',
			answer:
				'Rozmowę rozpoczyna pracodawca – z osobą, która ma konto aplikanta i wysłała aplikację na jego ogłoszenie.'
		},
		{
			id: 'security',
			question: 'Czy moje hasło i dane są bezpieczne?',
			answer:
				'Hasła przechowujemy wyłącznie w postaci zahaszowanej, a funkcje konta są dostępne tylko po zalogowaniu.'
		}
	]
}
