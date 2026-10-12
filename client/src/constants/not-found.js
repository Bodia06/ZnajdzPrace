import { LINKS } from './links'

export const NOT_FOUND_DATA = {
	title: {
		before: 'Ups, tej strony',
		highlight: 'nie ma',
		after: 'w portalu.'
	},
	description:
		'Adres mógł się zmienić albo strona nigdy nie istniała. Wróć na stronę główną – oferty wciąż na Ciebie czekają.',
	button: { name: 'Wróć na stronę główną', link: LINKS.HOME },
	cards: {
		search: { query: 'strona-ktorej-szukasz', result: '0 wyników' },
		chat: { sender: 'ZnajdzPrace', time: 'teraz', message: 'Zgubiłeś się? Wracaj do ofert!' },
		offers: { title: 'Oferty czekają', text: 'Wróć i znajdź swoją pracę' }
	}
}
