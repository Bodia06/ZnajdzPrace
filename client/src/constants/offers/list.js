export const OFFERS_LIST = [
	{
		id: 'frontend-developer-react',
		title: 'Frontend Developer (React)',
		company: 'Nordwave Software',
		location: 'Warszawa, Mokotów',
		posted: 'dzisiaj',
		isNew: true,
		isFavorite: false,
		tone: 'violet',
		contracts: ['b2b', 'employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 12000, to: 16000 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'React' },
			{ label: 'TypeScript' }
		]
	},
	{
		id: 'junior-frontend-developer',
		title: 'Junior Frontend Developer',
		company: 'Kodeo Studio',
		location: 'Warszawa, Wola',
		posted: '1 dzień temu',
		isNew: true,
		isFavorite: true,
		tone: 'dark',
		contracts: ['employment'],
		mode: 'office',
		level: 'junior',
		salary: { from: 7000, to: 9000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'JavaScript' },
			{ label: 'Vue' }
		]
	},
	{
		id: 'ui-developer-angular',
		title: 'UI Developer / Angular',
		company: 'Bankowe Systemy IT',
		location: 'Warszawa, Śródmieście',
		posted: '3 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 11000, to: 14500 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Angular' },
			{ label: 'RxJS' }
		]
	},
	{
		id: 'fullstack-developer-nextjs',
		title: 'Fullstack Developer (Next.js)',
		company: 'Sklepik24',
		location: 'Warszawa / zdalnie',
		posted: '4 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 15000, to: 20000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Next.js' },
			{ label: 'Node.js' }
		]
	},
	{
		id: 'stazysta-frontend',
		title: 'Stażysta – Frontend',
		company: 'MediTech Polska',
		location: 'Warszawa, Ursynów',
		posted: '6 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['internship'],
		mode: 'office',
		level: 'trainee',
		salary: { from: 4800 },
		tags: [
			{ label: 'Staż', accent: true },
			{ label: 'Biuro' },
			{ label: 'HTML/CSS' },
			{ label: 'Git' }
		]
	},
	{
		id: 'web-developer-wordpress',
		title: 'Web Developer WordPress',
		company: 'Pixel i Słowo',
		location: 'Warszawa, Praga',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['mandate'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 6500, to: 8000 },
		tags: [
			{ label: 'Umowa zlecenie', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'WordPress' },
			{ label: 'PHP' }
		]
	},
	{
		id: 'backend-developer-node-js',
		title: 'Backend Developer (Node.js)',
		company: 'Cloudline',
		location: 'Warszawa, Wola',
		posted: 'dzisiaj',
		isNew: true,
		isFavorite: false,
		tone: 'violet',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 14000, to: 19000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Node.js' },
			{ label: 'PostgreSQL' }
		]
	},
	{
		id: 'react-native-developer',
		title: 'React Native Developer',
		company: 'Appforge',
		location: 'Kraków, Podgórze',
		posted: 'dzisiaj',
		isNew: true,
		isFavorite: false,
		tone: 'dark',
		contracts: ['b2b', 'employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 13000, to: 17500 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'React Native' },
			{ label: 'TypeScript' }
		]
	},
	{
		id: 'qa-engineer-automation',
		title: 'QA Engineer (Automation)',
		company: 'TestLab Polska',
		location: 'Wrocław, Krzyki',
		posted: '1 dzień temu',
		isNew: true,
		isFavorite: false,
		tone: 'peach',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 9500, to: 13000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Cypress' },
			{ label: 'Playwright' }
		]
	},
	{
		id: 'devops-engineer',
		title: 'DevOps Engineer',
		company: 'Infrabit',
		location: 'Gdańsk, Wrzeszcz',
		posted: '1 dzień temu',
		isNew: true,
		isFavorite: false,
		tone: 'solid',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 17000, to: 23000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Kubernetes' },
			{ label: 'AWS' }
		]
	},
	{
		id: 'python-developer',
		title: 'Python Developer',
		company: 'DataNest',
		location: 'Poznań, Jeżyce',
		posted: '2 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['employment'],
		mode: 'office',
		level: 'mid',
		salary: { from: 11000, to: 15000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'Python' },
			{ label: 'Django' }
		]
	},
	{
		id: 'java-developer',
		title: 'Java Developer',
		company: 'Bankowe Systemy IT',
		location: 'Warszawa, Śródmieście',
		posted: '2 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 14000, to: 19000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Java' },
			{ label: 'Spring' }
		]
	},
	{
		id: 'ux-ui-designer',
		title: 'UX/UI Designer',
		company: 'Pixel i Słowo',
		location: 'Warszawa, Praga',
		posted: '3 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['mandate'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 8000, to: 12000 },
		tags: [
			{ label: 'Umowa zlecenie', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Figma' },
			{ label: 'Design System' }
		]
	},
	{
		id: 'data-analyst',
		title: 'Data Analyst',
		company: 'MediTech Polska',
		location: 'Łódź, Śródmieście',
		posted: '3 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 9000, to: 12500 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'SQL' },
			{ label: 'Power BI' }
		]
	},
	{
		id: 'vue-js-developer',
		title: 'Vue.js Developer',
		company: 'Kodeo Studio',
		location: 'Warszawa, Wola',
		posted: '3 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['b2b', 'employment'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 11500, to: 15500 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Vue' },
			{ label: 'Pinia' }
		]
	},
	{
		id: 'product-manager',
		title: 'Product Manager',
		company: 'Sklepik24',
		location: 'Warszawa / zdalnie',
		posted: '4 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 15000, to: 20000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Jira' },
			{ label: 'Roadmap' }
		]
	},
	{
		id: 'junior-backend-developer',
		title: 'Junior Backend Developer',
		company: 'Cloudline',
		location: 'Kraków, Stare Miasto',
		posted: '4 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['employment'],
		mode: 'office',
		level: 'junior',
		salary: { from: 6500, to: 9000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'Node.js' },
			{ label: 'MongoDB' }
		]
	},
	{
		id: 'android-developer-kotlin',
		title: 'Android Developer (Kotlin)',
		company: 'Appforge',
		location: 'Katowice, Śródmieście',
		posted: '5 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['b2b'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 12500, to: 17000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Kotlin' },
			{ label: 'Jetpack' }
		]
	},
	{
		id: 'ios-developer-swift',
		title: 'iOS Developer (Swift)',
		company: 'Nordwave Software',
		location: 'Warszawa, Mokotów',
		posted: '5 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['b2b', 'employment'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 13500, to: 18000 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Swift' },
			{ label: 'SwiftUI' }
		]
	},
	{
		id: 'stazysta-qa',
		title: 'Stażysta – QA',
		company: 'TestLab Polska',
		location: 'Wrocław, Krzyki',
		posted: '6 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['internship'],
		mode: 'office',
		level: 'trainee',
		salary: { from: 4500 },
		tags: [
			{ label: 'Staż', accent: true },
			{ label: 'Biuro' },
			{ label: 'Testy manualne' },
			{ label: 'Jira' }
		]
	},
	{
		id: 'cloud-engineer-azure',
		title: 'Cloud Engineer (Azure)',
		company: 'Infrabit',
		location: 'Poznań, Jeżyce',
		posted: '6 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 16000, to: 22000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Azure' },
			{ label: 'Terraform' }
		]
	},
	{
		id: 'fullstack-developer-net-react',
		title: 'Fullstack Developer (.NET + React)',
		company: 'Bankowe Systemy IT',
		location: 'Warszawa, Śródmieście',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 13000, to: 18000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'C#' },
			{ label: 'React' }
		]
	},
	{
		id: 'machine-learning-engineer',
		title: 'Machine Learning Engineer',
		company: 'DataNest',
		location: 'Warszawa, Ursynów',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['b2b'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 18000, to: 25000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Python' },
			{ label: 'PyTorch' }
		]
	},
	{
		id: 'scrum-master',
		title: 'Scrum Master',
		company: 'Sklepik24',
		location: 'Gdańsk, Śródmieście',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['employment'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 12000, to: 16000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Scrum' },
			{ label: 'Agile' }
		]
	},
	{
		id: 'php-developer-laravel',
		title: 'PHP Developer (Laravel)',
		company: 'Pixel i Słowo',
		location: 'Lublin, Śródmieście',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['employment'],
		mode: 'office',
		level: 'mid',
		salary: { from: 8500, to: 12000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'PHP' },
			{ label: 'Laravel' }
		]
	},
	{
		id: 'frontend-developer-angular',
		title: 'Frontend Developer (Angular)',
		company: 'Bankowe Systemy IT',
		location: 'Kraków, Krowodrza',
		posted: '1 tydzień temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 11000, to: 15000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Angular' },
			{ label: 'NgRx' }
		]
	},
	{
		id: 'junior-ux-designer',
		title: 'Junior UX Designer',
		company: 'Kodeo Studio',
		location: 'Warszawa, Wola',
		posted: '8 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['employment'],
		mode: 'office',
		level: 'junior',
		salary: { from: 6000, to: 8000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'Figma' },
			{ label: 'Prototypowanie' }
		]
	},
	{
		id: 'security-engineer',
		title: 'Security Engineer',
		company: 'Infrabit',
		location: 'Warszawa, Mokotów',
		posted: '8 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 17000, to: 24000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Pentesty' },
			{ label: 'OWASP' }
		]
	},
	{
		id: 'go-developer',
		title: 'Go Developer',
		company: 'Cloudline',
		location: 'Wrocław, Fabryczna',
		posted: '9 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['b2b', 'employment'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 16000, to: 21000 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Go' },
			{ label: 'gRPC' }
		]
	},
	{
		id: 'customer-support-specialist-it',
		title: 'Customer Support Specialist (IT)',
		company: 'MediTech Polska',
		location: 'Łódź, Bałuty',
		posted: '9 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 6000, to: 8000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Zendesk' },
			{ label: 'Angielski B2' }
		]
	},
	{
		id: 'technical-writer',
		title: 'Technical Writer',
		company: 'Nordwave Software',
		location: 'Warszawa, Mokotów',
		posted: '10 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['mandate'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 7500, to: 10500 },
		tags: [
			{ label: 'Umowa zlecenie', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Dokumentacja' },
			{ label: 'Markdown' }
		]
	},
	{
		id: 'frontend-developer-next-js',
		title: 'Frontend Developer (Next.js)',
		company: 'Sklepik24',
		location: 'Warszawa / zdalnie',
		posted: '10 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 14000, to: 19000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Next.js' },
			{ label: 'TypeScript' }
		]
	},
	{
		id: 'database-administrator',
		title: 'Database Administrator',
		company: 'DataNest',
		location: 'Poznań, Nowe Miasto',
		posted: '11 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['employment'],
		mode: 'office',
		level: 'mid',
		salary: { from: 12000, to: 16000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'PostgreSQL' },
			{ label: 'MySQL' }
		]
	},
	{
		id: 'game-developer-unity',
		title: 'Game Developer (Unity)',
		company: 'Pixel i Słowo',
		location: 'Kraków, Zabłocie',
		posted: '11 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 9000, to: 13500 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Unity' },
			{ label: 'C#' }
		]
	},
	{
		id: 'stazysta-data',
		title: 'Stażysta – Data',
		company: 'DataNest',
		location: 'Warszawa, Ursynów',
		posted: '12 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['internship'],
		mode: 'office',
		level: 'trainee',
		salary: { from: 4700 },
		tags: [
			{ label: 'Staż', accent: true },
			{ label: 'Biuro' },
			{ label: 'SQL' },
			{ label: 'Excel' }
		]
	},
	{
		id: 'sre-engineer',
		title: 'SRE Engineer',
		company: 'Infrabit',
		location: 'Gdańsk, Wrzeszcz',
		posted: '12 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'senior',
		salary: { from: 18000, to: 24000 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Prometheus' },
			{ label: 'Grafana' }
		]
	},
	{
		id: 'web-developer-html-css',
		title: 'Web Developer (HTML/CSS)',
		company: 'Kodeo Studio',
		location: 'Szczecin, Centrum',
		posted: '13 dni temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['mandate'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 5500, to: 7500 },
		tags: [
			{ label: 'Umowa zlecenie', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'HTML/CSS' },
			{ label: 'JavaScript' }
		]
	},
	{
		id: 'business-analyst',
		title: 'Business Analyst',
		company: 'Bankowe Systemy IT',
		location: 'Warszawa, Śródmieście',
		posted: '2 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 10000, to: 14000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'UML' },
			{ label: 'SQL' }
		]
	},
	{
		id: 'ruby-on-rails-developer',
		title: 'Ruby on Rails Developer',
		company: 'Cloudline',
		location: 'Warszawa, Wola',
		posted: '2 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 13000, to: 17500 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Ruby' },
			{ label: 'Rails' }
		]
	},
	{
		id: 'junior-python-developer',
		title: 'Junior Python Developer',
		company: 'DataNest',
		location: 'Wrocław, Krzyki',
		posted: '2 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['employment'],
		mode: 'office',
		level: 'junior',
		salary: { from: 6500, to: 9000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'Python' },
			{ label: 'Flask' }
		]
	},
	{
		id: 'tech-lead-frontend',
		title: 'Tech Lead (Frontend)',
		company: 'Nordwave Software',
		location: 'Warszawa, Mokotów',
		posted: '2 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'sky',
		contracts: ['b2b', 'employment'],
		mode: 'hybrid',
		level: 'senior',
		salary: { from: 19000, to: 26000 },
		tags: [
			{ label: 'B2B / UoP', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'React' },
			{ label: 'Architektura' }
		]
	},
	{
		id: 'embedded-developer-c',
		title: 'Embedded Developer (C++)',
		company: 'MediTech Polska',
		location: 'Gdynia, Śródmieście',
		posted: '2 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'lime',
		contracts: ['employment'],
		mode: 'office',
		level: 'mid',
		salary: { from: 11000, to: 15500 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'C++' },
			{ label: 'RTOS' }
		]
	},
	{
		id: 'mobile-qa-tester',
		title: 'Mobile QA Tester',
		company: 'TestLab Polska',
		location: 'Kraków, Podgórze',
		posted: '3 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'violet',
		contracts: ['employment'],
		mode: 'hybrid',
		level: 'mid',
		salary: { from: 7500, to: 10000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Hybrydowo' },
			{ label: 'Appium' },
			{ label: 'Android' }
		]
	},
	{
		id: 'salesforce-developer',
		title: 'Salesforce Developer',
		company: 'Sklepik24',
		location: 'Warszawa / zdalnie',
		posted: '3 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'dark',
		contracts: ['b2b'],
		mode: 'remote',
		level: 'mid',
		salary: { from: 14500, to: 19500 },
		tags: [
			{ label: 'B2B', accent: true },
			{ label: 'Zdalnie' },
			{ label: 'Apex' },
			{ label: 'Salesforce' }
		]
	},
	{
		id: 'stazysta-ux-ui',
		title: 'Stażysta – UX/UI',
		company: 'Pixel i Słowo',
		location: 'Warszawa, Praga',
		posted: '3 tygodnie temu',
		isNew: false,
		isFavorite: false,
		tone: 'peach',
		contracts: ['internship'],
		mode: 'office',
		level: 'trainee',
		salary: { from: 4500 },
		tags: [
			{ label: 'Staż', accent: true },
			{ label: 'Biuro' },
			{ label: 'Figma' },
			{ label: 'Adobe XD' }
		]
	},
	{
		id: 'angular-developer-junior',
		title: 'Angular Developer (Junior)',
		company: 'Bankowe Systemy IT',
		location: 'Warszawa, Śródmieście',
		posted: '1 miesiąc temu',
		isNew: false,
		isFavorite: false,
		tone: 'solid',
		contracts: ['employment'],
		mode: 'office',
		level: 'junior',
		salary: { from: 6500, to: 9000 },
		tags: [
			{ label: 'Umowa o pracę', accent: true },
			{ label: 'Biuro' },
			{ label: 'Angular' },
			{ label: 'TypeScript' }
		]
	}
]
