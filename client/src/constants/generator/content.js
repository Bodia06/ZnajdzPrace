import { GENERATOR_STEP_IDS, GENERATOR_TEMPLATE_IDS } from './ids'

export const GENERATOR_STEPS = [
	{ id: GENERATOR_STEP_IDS.template, label: 'Szablon' },
	{ id: GENERATOR_STEP_IDS.personal, label: 'Dane osobowe' },
	{ id: GENERATOR_STEP_IDS.experience, label: 'Doświadczenie' },
	{ id: GENERATOR_STEP_IDS.education, label: 'Edukacja' },
	{ id: GENERATOR_STEP_IDS.skills, label: 'Umiejętności' }
]

export const GENERATOR_TEMPLATES = [
	{
		id: GENERATOR_TEMPLATE_IDS.sidebar,
		name: 'Klasyczny',
		text: 'Kolorowy pasek boczny z kontaktem i umiejętnościami.'
	},
	{
		id: GENERATOR_TEMPLATE_IDS.banner,
		name: 'Nowoczesny',
		text: 'Wyraźny nagłówek i dwie kolumny z treścią.'
	},
	{
		id: GENERATOR_TEMPLATE_IDS.minimal,
		name: 'Minimalistyczny',
		text: 'Czysty układ w jednej kolumnie, idealny do ATS.'
	}
]

export const GENERATOR_COLORS = [
	{ id: 'ink', name: 'Grafitowy', value: '#0e0f1a' },
	{ id: 'primary', name: 'Fioletowy', value: '#5753f0' },
	{ id: 'green', name: 'Zielony', value: '#1d6650' },
	{ id: 'red', name: 'Ceglasty', value: '#9a2f1f' }
]

export const GENERATOR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'ojczysty']

export const GENERATOR_DATA = {
	meta: 'Generator CV',
	title: {
		heading: 'Generator CV',
		text: 'Uzupełnij dane – podgląd aktualizuje się na bieżąco.',
		draft: 'Zapisz szkic',
		draftSaved: 'Szkic zapisany',
		download: 'Pobierz PDF'
	},
	stepsLabel: 'Kroki generatora CV',
	stepWord: 'Krok',
	of: 'z',
	nav: { back: 'Wstecz', next: 'Dalej', finish: 'Pobierz PDF' },
	preview: {
		label: 'Podgląd CV',
		title: 'Podgląd na żywo',
		format: 'A4',
		zoom: 'Powiększ',
		zoomLabel: 'Powiększ podgląd',
		close: 'Zamknij'
	},
	template: {
		title: 'Wybierz szablon',
		text: 'Układ możesz zmienić w każdej chwili – dane zostaną zachowane.',
		label: 'Szablon CV',
		colorLabel: 'Kolor szablonu'
	},
	personal: {
		title: 'Dane osobowe',
		text: 'Te informacje pojawią się w nagłówku CV.',
		fields: {
			firstName: { label: 'Imię', placeholder: 'Anna', autoComplete: 'given-name' },
			lastName: { label: 'Nazwisko', placeholder: 'Kowalska', autoComplete: 'family-name' },
			jobTitle: { label: 'Stanowisko', placeholder: 'Frontend Developer' },
			email: {
				label: 'Adres e-mail',
				placeholder: 'anna.kowalska@poczta.pl',
				type: 'email',
				autoComplete: 'email'
			},
			phone: {
				label: 'Telefon',
				placeholder: '+48 600 000 000',
				type: 'tel',
				autoComplete: 'tel'
			},
			city: { label: 'Miasto', placeholder: 'Warszawa', autoComplete: 'address-level2' },
			summary: {
				label: 'Krótki opis',
				placeholder: 'Kilka zdań o Twoim doświadczeniu i celach zawodowych.',
				multiline: true
			}
		}
	},
	experience: {
		title: 'Doświadczenie zawodowe',
		text: 'Zacznij od ostatniego miejsca pracy.',
		item: 'Stanowisko',
		remove: 'Usuń',
		add: 'Dodaj kolejne stanowisko',
		fields: {
			position: { label: 'Stanowisko', placeholder: 'Junior Frontend Developer' },
			company: { label: 'Firma', placeholder: 'Webly sp. z o.o.' },
			from: { label: 'Od', placeholder: '03.2025' },
			to: { label: 'Do', placeholder: 'obecnie' },
			description: {
				label: 'Opis obowiązków',
				placeholder: 'Opisz, czym się zajmowałeś i jakie osiągnięcia masz na koncie.',
				multiline: true
			}
		}
	},
	education: {
		title: 'Edukacja',
		text: 'Dodaj szkoły, uczelnie i kursy.',
		item: 'Szkoła',
		remove: 'Usuń',
		add: 'Dodaj kolejną szkołę',
		fields: {
			school: { label: 'Uczelnia lub szkoła', placeholder: 'Politechnika Warszawska' },
			degree: { label: 'Kierunek i tytuł', placeholder: 'Informatyka, inż.' },
			from: { label: 'Od', placeholder: '2022' },
			to: { label: 'Do', placeholder: '2026' }
		}
	},
	skills: {
		title: 'Umiejętności i języki',
		text: 'Wpisz umiejętność i naciśnij Enter, aby ją dodać.',
		skillsLabel: 'Umiejętności',
		skillPlaceholder: 'np. React, TypeScript',
		addSkill: 'Dodaj',
		removeSkill: 'Usuń umiejętność',
		languagesLabel: 'Języki',
		languageName: { label: 'Język', placeholder: 'Angielski' },
		languageLevel: 'Poziom',
		addLanguage: 'Dodaj język',
		removeLanguage: 'Usuń język'
	}
}

export const GENERATOR_LABELS = {
	contact: 'Kontakt',
	skills: 'Umiejętności',
	languages: 'Języki',
	summary: 'Profil',
	experience: 'Doświadczenie',
	education: 'Edukacja',
	present: 'obecnie'
}

export const GENERATOR_SAMPLE = {
	firstName: 'Anna',
	lastName: 'Kowalska',
	jobTitle: 'Frontend Developer',
	email: 'anna.kowalska@poczta.pl',
	phone: '+48 600 000 000',
	city: 'Warszawa',
	summary:
		'Frontend developerka z rocznym doświadczeniem w React. Lubię dopracowane interfejsy i czysty kod.',
	experience: [
		{
			position: 'Junior Frontend Developer',
			company: 'Webly sp. z o.o.',
			from: '03.2025',
			to: 'obecnie',
			description:
				'Tworzenie komponentów w React i TypeScript. Współpraca z zespołem UX. Wdrożenie testów jednostkowych.'
		},
		{
			position: 'Stażystka Web Developer',
			company: 'Kreo Agency',
			from: '07.2024',
			to: '02.2025',
			description: 'Strony w WordPress, poprawki CSS, wdrożenia.'
		}
	],
	education: [
		{ school: 'Politechnika Warszawska', degree: 'Informatyka, inż.', from: '2022', to: '2026' }
	],
	skills: ['React', 'TypeScript', 'HTML / CSS', 'Git', 'REST API', 'Figma'],
	languages: [
		{ name: 'Polski', level: 'ojczysty' },
		{ name: 'Angielski', level: 'B2' }
	]
}
