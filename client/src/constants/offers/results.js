export const OFFERS_RESULTS_DATA = {
	header: {
		fallbackTitle: 'Oferty pracy',
		description: 'Wyniki dopasowane do wyszukiwania i filtrów',
		locative: {
			Warszawa: 'Warszawie',
			Kraków: 'Krakowie',
			Wrocław: 'Wrocławiu',
			Poznań: 'Poznaniu',
			Gdańsk: 'Gdańsku',
			Łódź: 'Łodzi',
			Katowice: 'Katowicach',
			Szczecin: 'Szczecinie',
			Lublin: 'Lublinie',
			Białystok: 'Białymstoku'
		}
	},
	sort: {
		name: 'sort',
		label: 'Sortuj',
		options: [
			{ value: 'newest', label: 'Najnowsze' },
			{ value: 'salary-desc', label: 'Najwyższe wynagrodzenie' },
			{ value: 'salary-asc', label: 'Najniższe wynagrodzenie' }
		]
	},
	activeFilters: {
		label: 'Aktywne filtry',
		remove: 'Usuń filtr',
		salaryPrefix: 'od',
		salaryUnit: 'zł'
	},
	card: {
		newLabel: 'NOWA',
		salaryPeriod: 'brutto / mies.',
		salaryUnit: 'zł',
		salaryMissing: 'Do uzgodnienia',
		contracts: {
			employment: 'Umowa o pracę',
			b2b: 'B2B',
			mandate: 'Umowa zlecenie',
			'specific-task': 'Umowa o dzieło',
			internship: 'Staż'
		},
		contractsShort: { employment: 'UoP', mandate: 'UZ', 'specific-task': 'UoD' },
		modes: { office: 'Biuro', hybrid: 'Hybrydowo', remote: 'Zdalnie' },
		apply: 'Aplikuj',
		favoriteAdd: 'Dodaj do ulubionych',
		favoriteRemove: 'Usuń z ulubionych'
	},
	empty: {
		title: 'Brak ofert dla wybranych kryteriów',
		text: 'Zmień wyszukiwanie lub usuń część filtrów.'
	},
	loading: 'Ładowanie ofert…',
	error: {
		title: 'Nie udało się pobrać ofert',
		text: 'Sprawdź połączenie i spróbuj ponownie.',
		retry: 'Spróbuj ponownie'
	},
	pagination: {
		label: 'Paginacja',
		prev: 'Poprzednia strona',
		next: 'Następna strona',
		page: 'Strona',
		name: 'page',
		pageSize: 4
	}
}
