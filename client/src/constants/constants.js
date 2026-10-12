export const LINKS = {
  HOME: '/',
  OFFERS: '/offers',
  ANALYSIS: '/analysis-cv',
  GENERATOR: '/generator-cv',
  FOR_EMPLOYERS: '/for-employers',
  LOGIN: '/login',
  REGISTRATION: '/registration'
}

export const NAVIGATION_ITEMS = [
  { id: 'offers', name: 'Oferty pracy', link: LINKS.OFFERS },
  { id: 'analysis', name: 'Analiza CV', link: LINKS.ANALYSIS, badge: 'AI' },
  { id: 'generator', name: 'Generator CV', link: LINKS.GENERATOR },
  { id: 'for-employers', name: 'Dla pracodawców', link: LINKS.FOR_EMPLOYERS }
]

export const AUTH_ITEMS = [
  {
    id: 'login',
    name: 'Zaloguj się',
    link: LINKS.LOGIN,
    variant: 'ghost'
  },
  {
    id: 'registration',
    name: 'Załóż konto',
    link: LINKS.REGISTRATION,
    variant: 'primary'
  }
]

export const HERO_DATA = {
  badge: {
    label: 'NOWOŚĆ',
    text: 'Analiza CV z AI – za darmo'
  },
  title: {
    before: 'Praca, która',
    highlight: 'naprawdę',
    after: 'do Ciebie pasuje.'
  },
  description:
    'ZnajdzPrace łączy kandydatów z pracodawcami. Szukaj ofert, aplikuj w minutę, popraw CV z pomocą AI i rozmawiaj z rekruterem na czacie.',
  search: {
    placeholder: 'Stanowisko, np. księgowa, kierowca, React',
    button: 'Szukaj ofert'
  },
  perks: [
    { id: 'free', text: 'Bezpłatnie dla kandydatów' },
    { id: 'one-form', text: 'Aplikowanie jednym formularzem' },
    { id: 'chat', text: 'Czat z pracodawcą' }
  ],
  cards: {
    job: {
      logo: 'N',
      title: 'Frontend Developer',
      company: 'Nordwave Software',
      location: 'Warszawa',
      tags: [
        { id: 'react', text: 'React' },
        { id: 'hybrid', text: 'Hybrydowo' },
        { id: 'contract', text: 'B2B / UoP', accent: true }
      ],
      salary: '12–16 tys. zł',
      button: 'Aplikuj'
    },
    cvScore: {
      score: 84,
      title: 'Ocena CV',
      tips: '3 wskazówki'
    },
    chat: {
      sender: 'Nordwave',
      time: 'teraz',
      message: 'Zapraszamy na rozmowę w czwartek!'
    },
    applied: {
      text: 'Aplikacja wysłana'
    }
  }
}

export const CATEGORY_DATA = {
  badge: 'Kategorie',
  title: 'Oferty z każdej branży',
  button: {
    title: 'Wszystkie oferty',
    link: LINKS.OFFERS
  },
  cards: [
    {
      id: 'it',
      code: 'IT',
      title: 'IT i programowanie',
      link: `${LINKS.OFFERS}?category=it`,
      variant: 'dark'
    },
    {
      id: 'sales',
      code: 'SP',
      title: 'Sprzedaż',
      link: `${LINKS.OFFERS}?category=sprzedaz`,
      variant: 'light'
    },
    {
      id: 'finance',
      code: 'FK',
      title: 'Finanse i księgowość',
      link: `${LINKS.OFFERS}?category=finanse`,
      variant: 'peach'
    },
    {
      id: 'logistics',
      code: 'LM',
      title: 'Logistyka i magazyn',
      link: `${LINKS.OFFERS}?category=logistyka`,
      variant: 'primary'
    }
  ]
}

export const HOW_IT_WORKS_DATA = {
  badge: 'Jak to działa',
  tabs: [
    {
      id: 'candidate',
      label: 'Szukam pracy',
      title: 'Od wyszukiwania do rozmowy w 4 krokach',
      steps: [
        {
          id: 'account',
          title: 'Załóż konto',
          text: 'Wybierz konto kandydata – to zajmie minutę.'
        },
        {
          id: 'offer',
          title: 'Znajdź ofertę',
          text: 'Szukaj po stanowisku i filtruj po mieście czy rodzaju umowy.'
        },
        {
          id: 'cv',
          title: 'Popraw CV z AI',
          text: 'Sprawdź ocenę CV i dopasowanie do wybranej oferty.'
        },
        {
          id: 'apply',
          title: 'Aplikuj i rozmawiaj',
          text: 'Wyślij formularz i odpowiadaj pracodawcy na czacie.'
        }
      ]
    },
    {
      id: 'employer',
      label: 'Rekrutuję',
      title: 'Od ogłoszenia do zatrudnienia w 4 krokach',
      steps: [
        {
          id: 'account',
          title: 'Załóż konto firmy',
          text: 'Uzupełnij profil firmy: logo, opis i stronę WWW.'
        },
        {
          id: 'post',
          title: 'Dodaj ogłoszenie',
          text: 'Stanowisko, opis, wymagania i miejsce pracy.'
        },
        {
          id: 'applications',
          title: 'Przeglądaj aplikacje',
          text: 'Wszyscy kandydaci i ich CV w jednym panelu.'
        },
        {
          id: 'chat',
          title: 'Napisz do kandydata',
          text: 'Rozpocznij czat i umów rozmowę rekrutacyjną.'
        }
      ]
    }
  ]
}
