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
