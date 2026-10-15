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
		apply: 'Aplikuj',
		favoriteAdd: 'Dodaj do ulubionych',
		favoriteRemove: 'Usuń z ulubionych'
	},
	empty: {
		title: 'Brak ofert dla wybranych kryteriów',
		text: 'Zmień wyszukiwanie lub usuń część filtrów.'
	},
	pagination: {
		label: 'Paginacja',
		prev: 'Poprzednia strona',
		next: 'Następna strona',
		page: 'Strona',
		name: 'page',
		totalPages: 3
	}
}
