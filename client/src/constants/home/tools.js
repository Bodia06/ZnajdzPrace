import { LINKS } from '../links'

export const TOOLS_DATA = {
	badge: 'Więcej niż ogłoszenia',
	title: 'Narzędzia, które pomagają dostać pracę',
	description: 'Wypróbuj – te karty działają.',
	cvAnalysis: {
		badge: 'Analiza CV · AI',
		title: 'Ocena i konkretne poprawki',
		toggleLabel: 'Wersja CV',
		scoreLabel: 'na 100',
		modes: [
			{ id: 'before', label: 'Przed' },
			{ id: 'after', label: 'Po poprawkach' }
		],
		results: {
			before: {
				score: 61,
				metrics: [
					{ id: 'structure', label: 'Struktura', value: 70 },
					{ id: 'experience', label: 'Doświadczenie', value: 58 },
					{ id: 'keywords', label: 'Słowa kluczowe', value: 42 }
				]
			},
			after: {
				score: 88,
				metrics: [
					{ id: 'structure', label: 'Struktura', value: 92 },
					{ id: 'experience', label: 'Doświadczenie', value: 86 },
					{ id: 'keywords', label: 'Słowa kluczowe', value: 79 }
				]
			}
		},
		note: 'Po dodaniu efektów pracy i słów kluczowych CV jest dużo mocniejsze.',
		button: { title: 'Przeanalizuj CV', link: LINKS.ANALYSIS }
	},
	offerMatch: {
		badge: 'Dopasowanie do oferty',
		title: 'Wybierz ofertę:',
		offers: [
			{
				id: 'frontend',
				label: 'Frontend Developer',
				score: 78,
				verdict: 'Dobre dopasowanie – warto aplikować',
				skills: [
					{ id: 'react', text: 'React', matched: true },
					{ id: 'typescript', text: 'TypeScript', matched: true },
					{ id: 'git', text: 'Git', matched: true },
					{ id: 'nextjs', text: 'Next.js', matched: false },
					{ id: 'tests', text: 'Testy', matched: false }
				]
			},
			{
				id: 'accountant',
				label: 'Księgowa',
				score: 64,
				verdict: 'Średnie dopasowanie – uzupełnij CV',
				skills: [
					{ id: 'excel', text: 'Excel', matched: true },
					{ id: 'reports', text: 'Sprawozdania', matched: true },
					{ id: 'jpk', text: 'JPK', matched: false },
					{ id: 'erp', text: 'Systemy ERP', matched: false }
				]
			},
			{
				id: 'support',
				label: 'Obsługa klienta',
				score: 91,
				verdict: 'Świetne dopasowanie – aplikuj teraz',
				skills: [
					{ id: 'communication', text: 'Komunikacja', matched: true },
					{ id: 'crm', text: 'CRM', matched: true },
					{ id: 'english', text: 'Angielski', matched: true },
					{ id: 'zendesk', text: 'Zendesk', matched: false }
				]
			}
		]
	},
	cvGenerator: {
		badge: 'Generator CV',
		title: 'CV w PDF w 10 minut',
		colorsLabel: 'Kolor szablonu',
		colors: [
			{ id: 'ink', label: 'Grafitowy', value: '#20212b' },
			{ id: 'primary', label: 'Fioletowy', value: '#7c5cfa' },
			{ id: 'teal', label: 'Zielony', value: '#3a7a6c' },
			{ id: 'brown', label: 'Ceglasty', value: '#a8512f' }
		],
		preview: {
			initials: 'AK',
			name: 'Anna Kowalska',
			role: 'Frontend Developer'
		},
		button: { title: 'Stwórz CV', link: LINKS.GENERATOR }
	},
	candidatePanel: {
		badge: 'Panel kandydata',
		title: 'Aplikacje, ulubione i czat w jednym miejscu',
		chat: {
			title: 'Czat z pracodawcą',
			incoming: 'Pasuje czwartek o 10:00?',
			outgoing: 'Tak, pasuje!'
		},
		history: {
			title: 'Historia aplikacji',
			items: [
				{ id: 'invitation', text: 'Zaproszenie', tone: 'accent' },
				{ id: 'viewed', text: 'Wyświetlona', tone: 'primary' },
				{ id: 'sent', text: 'Wysłana', tone: 'muted' }
			]
		},
		favorites: {
			title: 'Ulubione',
			label: 'Zapisz w ulubionych',
			empty: 'Kliknij, by zapisać',
			saved: 'Zapisano w ulubionych'
		},
		button: { title: 'Załóż darmowe konto', link: LINKS.REGISTRATION }
	}
}
