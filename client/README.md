# ZnajdzPrace — client

Next.js (App Router) + Tailwind CSS v4 + React Compiler.

## Getting started

```bash
cd client
npm install
npm run dev     # http://localhost:3000
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — ESLint

## Structure

```
src/
├── app/                        # routes (page.js), layout, global styles
│   ├── @modal/                 # parallel slot: modal windows (intercepted routes)
│   └── login, registration, offers, generator, not-found.js …
├── components/
│   ├── ui/                     # shared components (Button, Logo, Collapse, Pagination…)
│   │   ├── icons/              # SVG icons
│   │   └── motion/             # Reveal, Tilt, Parallax
│   ├── layout/
│   │   ├── Header/             # Header + MobileMenu, NavLink, Badge, BurgerButton
│   │   └── Footer/
│   └── features/
│       ├── home/<Section>/     # Hero, Category, HowItWorks, Tools, Faq
│       ├── offers/<Section>/   # OffersTitle, OffersFilter, OffersResults (+ CitySuggestions)
│       ├── auth/               # login/registration modal (index.jsx, forms, fields/)
│       ├── generator/          # CV generator (index.jsx, steps/, fields/, preview/)
│       └── not-found/          # single-section page — no extra nesting level
├── hooks/                      # hooks; feature-specific ones live in subfolders (auth, offers, generator, home, layout, autocomplete)
│   └── index.js                # single entry point: import { useX } from '@/hooks'
├── lib/                        # pure logic without React (auth, offers, generator, format.js)
├── services/                   # API requests (api.js, auth.js)
├── config/                     # site config
└── constants/                  # data and texts (single entry point: '@/constants')
    ├── links.js
    ├── layout/, home/          # navigation, footer · hero, category, how-it-works, tools, faq
    ├── offers/, auth/, generator/   # ids, texts, mock data
    └── not-found.js
public/images/                  # static images
```

A page section is a folder with an `index.jsx` (composition) and the components of that section; a complex part (for example, a card in Tools) gets its own folder too.
A page with a single section (404, generator, auth modal) has no extra nesting level: `index.jsx` sits directly in the feature folder.
If a component is needed by several sections, it goes into the section's `shared/` folder or into `ui/`.
Texts, links and `id`s live in `constants`; we do not hardcode them in components.
A component needed by only one section lives in that section's folder; `ui/` holds only truly shared components.
Logic without markup: state and effects go into `hooks/`, pure functions (validation, formatting, data building) go into `lib/`.
A hook needed by one feature lives in its subfolder `hooks/<feature>/`; shared ones (`useScrollLock`, `useModalFocus`, `useTabKeyboard`…) sit in the root of `hooks/`.

## Formatting

Prettier (with the Tailwind plugin for class ordering): `npm run format` / `npm run format:check`.

New page: create `src/app/about/page.js` (standard Next.js App Router routing) and build it from the components in `src/components/features/about/`.

Alias `@/*` → `src/*`. Environment variables: see `.env.example`.
