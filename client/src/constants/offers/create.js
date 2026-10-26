import { LINKS } from '@/constants/layout/links'
import { OFFERS_FILTER_DATA } from '@/constants/offers/filter'

const { contracts, modes, levels } = OFFERS_FILTER_DATA

export const OFFER_CREATE_INITIAL_VALUES = {
	title: '',
	company: '',
	location: '',
	description: '',
	requirements: '',
	contracts: [],
	mode: '',
	levels: [],
	workload: '',
	salaryFrom: '',
	salaryTo: '',
	salaryContract: '',
	validUntil: '',
	skills: [],
	duties: [],
	benefits: [],
	recruitment: [],
	tags: []
}

export const OFFER_CREATE_STEP_IDS = {
	basics: 'basics',
	conditions: 'conditions',
	salary: 'salary',
	details: 'details'
}

export const OFFER_CREATE_STEPS = [
	{
		id: OFFER_CREATE_STEP_IDS.basics,
		label: 'Podstawy',
		fields: ['title', 'company', 'location', 'validUntil']
	},
	{
		id: OFFER_CREATE_STEP_IDS.conditions,
		label: 'Warunki pracy',
		fields: ['contracts', 'mode', 'levels', 'workload']
	},
	{
		id: OFFER_CREATE_STEP_IDS.salary,
		label: 'Wynagrodzenie',
		fields: ['salaryFrom', 'salaryTo', 'salaryContract']
	},
	{
		id: OFFER_CREATE_STEP_IDS.details,
		label: 'Opis oferty',
		fields: ['description', 'requirements', 'skills', 'duties', 'benefits', 'recruitment', 'tags']
	}
]

export const OFFER_CREATE_DATA = {
	meta: 'Dodaj ofertę',
	title: { before: 'Dodaj', highlight: 'ofertę pracy', after: 'w kilka minut' },
	text: 'Wypełnij cztery krótkie kroki, a oferta od razu pojawi się na liście.',
	back: { label: 'Wróć do ofert', link: LINKS.OFFERS },
	stepsLabel: 'Kroki dodawania oferty',
	stepDone: 'ukończony',
	stepWord: 'Krok',
	of: 'z',
	nav: { prev: 'Wstecz', next: 'Dalej', submit: 'Opublikuj ofertę', submitting: 'Publikowanie…' },
	errors: {
		required: 'To pole jest wymagane.',
		invalid: 'Sprawdź wpisaną wartość.',
		server: 'Nie udało się dodać oferty. Spróbuj ponownie.',
		unreachable: 'Brak połączenia z serwerem. Spróbuj ponownie.'
	},
	basics: {
		title: 'Podstawowe informacje',
		text: 'Kim jesteście i kogo szukacie.',
		position: { name: 'title', label: 'Stanowisko', placeholder: 'np. Frontend Developer' },
		company: { name: 'company', label: 'Firma', placeholder: 'Nazwa firmy' },
		location: {
			name: 'location',
			label: 'Miasto',
			placeholder: 'np. Warszawa',
			autoComplete: 'address-level2'
		},
		validUntil: { name: 'validUntil', label: 'Ważna do (opcjonalnie)', type: 'date' },
		groups: {
			position: 'Stanowisko',
			company: 'Firma i miejsce pracy',
			validity: 'Ważność oferty'
		},
		presets: { label: 'Szybki wybór:', days: [7, 14, 30], unit: 'dni' },
		tips: {
			badge: 'Wskazówki',
			title: 'Dobra oferta przyciąga więcej kandydatów',
			items: [
				'Nazwij stanowisko tak, jak szukają go kandydaci.',
				'Podaj miasto – oferty z lokalizacją są łatwiej znajdowane.',
				'Ustaw datę ważności, by lista pozostała aktualna.'
			]
		}
	},
	conditions: {
		title: 'Warunki pracy',
		text: 'Umowa, tryb i poziom doświadczenia.',
		contracts: {
			name: 'contracts',
			label: 'Rodzaj umowy',
			hint: 'Możesz wybrać kilka opcji.',
			options: contracts.options
		},
		mode: { name: 'mode', label: 'Tryb pracy', options: modes.options },
		levels: {
			name: 'levels',
			label: 'Poziom',
			hint: 'Możesz wybrać kilka poziomów.',
			options: levels.options
		},
		workload: {
			name: 'workload',
			label: 'Wymiar',
			options: [
				{ value: 'full', label: 'Pełny etat' },
				{ value: 'part', label: 'Część etatu' }
			]
		}
	},
	salary: {
		title: 'Wynagrodzenie',
		text: 'Widełki są opcjonalne, ale zwiększają liczbę zgłoszeń.',
		from: { name: 'salaryFrom', label: 'Od (zł brutto)', placeholder: '8000', type: 'number' },
		to: { name: 'salaryTo', label: 'Do (zł brutto)', placeholder: '12000', type: 'number' },
		contract: { name: 'salaryContract', label: 'Dotyczy umowy' },
		groups: { range: 'Widełki wynagrodzenia', contract: 'Dotyczy umowy' },
		prefix: { from: 'Od', to: 'Do' },
		currency: 'zł',
		unit: 'Kwoty brutto miesięcznie.',
		summary: 'Tak zobaczą to kandydaci:',
		noContracts: 'Najpierw wybierz rodzaj umowy w kroku „Warunki pracy”.'
	},
	details: {
		title: 'Opis oferty',
		text: 'Opisz stanowisko. Listy wpisuj po jednej pozycji w linii.',
		groups: {
			about: 'O stanowisku',
			candidate: 'Czego oczekujecie',
			offer: 'Co oferujecie',
			tags: 'Tagi'
		},
		empty: 'Nic jeszcze nie dodano.',
		description: {
			name: 'description',
			label: 'Opis stanowiska',
			placeholder: 'Czym zajmie się osoba na tym stanowisku?',
			multiline: true
		},
		requirements: {
			name: 'requirements',
			label: 'Podsumowanie wymagań',
			placeholder: 'Krótko o oczekiwaniach wobec kandydata',
			multiline: true
		},
		skills: {
			name: 'skills',
			label: 'Wymagane umiejętności (opcjonalnie)',
			placeholder: 'np. React, TypeScript',
			hint: 'Wpisz pozycję i naciśnij plusik lub Enter',
			add: 'Dodaj umiejętność',
			remove: 'Usuń umiejętność',
			duplicate: 'Ta umiejętność jest już na liście',
			maxLength: 40
		},
		duties: {
			name: 'duties',
			label: 'Zakres obowiązków (opcjonalnie)',
			placeholder: 'np. Tworzenie interfejsów',
			hint: 'Wpisz pozycję i naciśnij plusik lub Enter',
			add: 'Dodaj obowiązek',
			remove: 'Usuń obowiązek',
			duplicate: 'Ten obowiązek jest już na liście',
			maxLength: 120
		},
		benefits: {
			name: 'benefits',
			label: 'Oferujemy (opcjonalnie)',
			placeholder: 'np. Prywatna opieka medyczna',
			hint: 'Wpisz pozycję i naciśnij plusik lub Enter',
			add: 'Dodaj benefit',
			remove: 'Usuń benefit',
			duplicate: 'Ta pozycja jest już na liście',
			maxLength: 120
		},
		recruitment: {
			name: 'recruitment',
			label: 'Etapy rekrutacji (opcjonalnie)',
			placeholder: 'np. Rozmowa wstępna',
			hint: 'Wpisz pozycję i naciśnij plusik lub Enter',
			add: 'Dodaj etap',
			remove: 'Usuń etap',
			duplicate: 'Ten etap jest już na liście',
			maxLength: 80
		},
		tags: {
			name: 'tags',
			label: 'Tagi (opcjonalnie)',
			placeholder: 'np. Remote',
			hint: 'Wpisz pozycję i naciśnij plusik lub Enter',
			add: 'Dodaj tag',
			remove: 'Usuń tag',
			duplicate: 'Ten tag jest już na liście',
			maxLength: 40
		}
	}
}
