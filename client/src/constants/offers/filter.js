export const OFFERS_FILTER_DATA = {
	title: 'Filtry',
	clear: 'Wyczyść',
	submit: 'Pokaż wyniki',
	toggle: { open: 'Pokaż filtry', close: 'Ukryj filtry' },
	location: {
		label: 'Lokalizacja',
		placeholder: 'Cała Polska',
		autoComplete: 'address-level2'
	},
	contracts: {
		name: 'contract',
		label: 'Rodzaj umowy',
		options: [
			{ value: 'employment', label: 'Umowa o pracę' },
			{ value: 'b2b', label: 'B2B' },
			{ value: 'mandate', label: 'Umowa zlecenie' },
			{ value: 'specific-task', label: 'Umowa o dzieło' },
			{ value: 'internship', label: 'Staż / praktyki' }
		]
	},
	modes: {
		name: 'mode',
		label: 'Tryb pracy',
		options: [
			{ value: 'office', label: 'Biuro' },
			{ value: 'hybrid', label: 'Hybryda' },
			{ value: 'remote', label: 'Zdalnie' }
		]
	},
	levels: {
		name: 'level',
		label: 'Poziom doświadczenia',
		options: [
			{ value: 'trainee', label: 'Stażysta' },
			{ value: 'junior', label: 'Junior' },
			{ value: 'mid', label: 'Mid' },
			{ value: 'senior', label: 'Senior' }
		]
	},
	salary: {
		name: 'salary',
		label: 'Wynagrodzenie od (brutto/mies.)',
		unit: 'zł',
		step: 500,
		decrease: 'Zmniejsz kwotę',
		increase: 'Zwiększ kwotę',
		placeholder: '0'
	}
}
