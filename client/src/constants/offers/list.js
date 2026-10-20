export const COMPANIES = [
	{
		id: 101,
		name: 'Nordwave Software'
	},
	{ id: 102, name: 'Kodeo Studio' },
	{ id: 103, name: 'Bankowe Systemy IT' },
	{ id: 104, name: 'Sklepik24' }
]

export const OFFERS_LIST = [
	{
		id: 'frontend-developer-react',
		company_id: 101,
		title: 'Frontend Developer (React)',
		location: 'Warszawa, Mokotów',
		posted_at: '2026-10-20T09:00:00Z',
		valid_until: '2026-10-11',
		tone: 'violet',
		mode: 'hybrid',
		level: 'mid',
		workload: 'full',
		description:
			'Dołącz do zespołu, który rozwija platformę rezerwacji dla sieci klinik w całej Polsce. Będziesz budować nowe widoki aplikacji w React, współpracować z projektantem UX i backendem oraz dbać o jakość kodu w code review.',
		salary_from: 12000,
		salary_to: 16000,
		address: 'ul. Puławska 145, Warszawa',
		latitude: 52.1935,
		longitude: 21.0205,
		requirements_note: 'Komunikatywny język angielski (B2) oraz umiejętność pracy w zespole Scrum.'
	},
	{
		id: 'junior-frontend-developer',
		company_id: 102,
		title: 'Junior Frontend Developer',
		location: 'Kraków',
		posted_at: '2026-10-18T09:00:00Z',
		valid_until: '2026-11-15',
		tone: 'dark',
		mode: 'remote',
		level: 'junior',
		workload: 'full',
		description: 'Dołącz do zespołu produktowego i rozwijaj interfejsy aplikacji webowych.',
		salary_from: 7000,
		salary_to: 9000,
		address: '',
		requirements_note: ''
	},
	{
		id: 'ui-developer-angular',
		company_id: 103,
		title: 'UI Developer / Angular',
		location: 'Wrocław',
		posted_at: '2026-10-17T09:00:00Z',
		valid_until: '2026-11-20',
		tone: 'peach',
		mode: 'hybrid',
		level: 'mid',
		workload: 'full',
		description: 'Rozwijaj panele bankowości internetowej w Angularze.',
		salary_from: 11000,
		salary_to: 14500,
		address: '',
		requirements_note: ''
	},
	{
		id: 'fullstack-developer-nextjs',
		company_id: 104,
		title: 'Fullstack Developer (Next.js)',
		location: 'Gdańsk',
		posted_at: '2026-10-16T09:00:00Z',
		valid_until: '2026-11-25',
		tone: 'solid',
		mode: 'remote',
		level: 'senior',
		workload: 'full',
		description: 'Buduj sklepy internetowe w Next.js i Node.js od interfejsu po API.',
		salary_from: 15000,
		salary_to: 20000,
		address: '',
		requirements_note: ''
	}
]

export const OFFER_CONTRACTS = [
	{ offer_id: 'frontend-developer-react', contract_type: 'b2b' },
	{ offer_id: 'frontend-developer-react', contract_type: 'employment' }
]

export const OFFER_ITEMS = [
	{
		offer_id: 'frontend-developer-react',
		category: 'duty',
		label: 'Tworzenie i rozwój komponentów interfejsu w React i TypeScript'
	},
	{
		offer_id: 'frontend-developer-react',
		category: 'duty',
		label: 'Integracja z REST API i obsługa stanów aplikacji'
	},
	{
		offer_id: 'frontend-developer-react',
		category: 'duty',
		label: 'Pisanie testów jednostkowych i udział w code review'
	},
	{ offer_id: 'frontend-developer-react', category: 'benefit', label: 'Prywatna opieka medyczna' },
	{ offer_id: 'frontend-developer-react', category: 'benefit', label: 'Karta sportowa' },
	{ offer_id: 'frontend-developer-react', category: 'benefit', label: 'Budżet szkoleniowy' },
	{
		offer_id: 'frontend-developer-react',
		category: 'benefit',
		label: '2 dni pracy z biura w tygodniu'
	},
	{ offer_id: 'frontend-developer-react', category: 'recruitment', label: 'Krótka rozmowa z HR' },
	{
		offer_id: 'frontend-developer-react',
		category: 'recruitment',
		label: 'Zadanie techniczne (ok. 2 h)'
	},
	{ offer_id: 'frontend-developer-react', category: 'recruitment', label: 'Spotkanie z zespołem' }
]

export const OFFER_TAGS = [
	{ offer_id: 'frontend-developer-react', label: 'B2B / UoP', is_accent: true },
	{ offer_id: 'frontend-developer-react', label: 'Hybrydowo', is_accent: false },
	{ offer_id: 'frontend-developer-react', label: 'React', is_accent: false },
	{ offer_id: 'frontend-developer-react', label: 'TypeScript', is_accent: false }
]

export const SKILLS = [
	{ id: 1, name: 'React', slug: 'react' },
	{ id: 2, name: 'TypeScript', slug: 'typescript' },
	{ id: 3, name: 'Next.js', slug: 'nextjs' },
	{ id: 4, name: 'Tailwind CSS', slug: 'tailwind-css' },
	{ id: 5, name: 'Redux', slug: 'redux' },
	{ id: 6, name: 'Figma', slug: 'figma' },
	{ id: 7, name: 'Node.js', slug: 'nodejs' }
]

export const OFFER_SKILLS = [
	{ offer_id: 'frontend-developer-react', skill_id: 1, is_required: true, experience_years: 3 },
	{ offer_id: 'frontend-developer-react', skill_id: 2, is_required: true, experience_years: 2 },
	{ offer_id: 'frontend-developer-react', skill_id: 4, is_required: false, experience_years: 1 },
	{ offer_id: 'frontend-developer-react', skill_id: 6, is_required: false, experience_years: null }
]
