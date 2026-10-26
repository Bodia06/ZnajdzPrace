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
│   ├── providers/              # StoreProvider (Redux)
│   └── features/
│       ├── home/<Section>/     # Hero, Category, HowItWorks, Tools, Faq
│       ├── offers/<Section>/   # OffersTitle, OffersFilter, OffersResults (+ shared/CitySuggestions)
│       ├── offer-details/      # offer page: Title, Content, Facts, AiMatch, Recruitment, Similar
│       ├── auth/               # login/registration modal (index.jsx, forms, fields/)
│       ├── generator/          # CV generator (index.jsx, steps/, fields/, preview/)
│       └── not-found/          # single-section page — no extra nesting level
├── hooks/                      # hooks, grouped by purpose
│   ├── common/                 # useAccordion, useScrollLock, useModalFocus, useTabKeyboard, useLastValue
│   ├── effects/                # useReveal, useTilt, usePointerParallax
│   ├── layout/, auth/, autocomplete/, generator/, offers/   # feature-specific hooks
│   └── index.js                # single entry point: import { useX } from '@/hooks'
├── lib/                        # pure logic without React or I/O (cv, offers filter/params/url, pagination, format, salary, password)
├── services/                   # data layer
│   ├── api/                    # backend requests (client.js, auth.js, offers.js)
│   └── sources/                # everything else: external services (geocoding), localStorage (cvDraft), API → view model adapter, page content
├── store/                      # Redux Toolkit (slices/offersSlice.js)
├── utils/validation/           # zod schemas (auth, cv, generator, offers) and validate()
├── config/                     # env.js (reads env variables), site.js (site meta); import from '@/config'
└── constants/                  # constants and texts (single entry point: '@/constants')
    ├── common/                 # api, status, ui, autocomplete, validation patterns
    ├── layout/, home/, not-found/   # links, navigation, footer · hero, category, how-it-works, tools, faq
    └── offers/, auth/, generator/   # ids, texts, config, form defaults, limits
public/images/                  # static images
```

A page section is a folder with an `index.jsx` (composition) and the components of that section; a complex part (for example, a card in Tools) gets its own folder too.
A page with a single section (404, generator, auth modal) has no extra nesting level: `index.jsx` sits directly in the feature folder.
One component per file. Components that share the same logic and differ only in text or styles (for example `ExperienceStep` / `EducationStep` over `EntriesStep`) go into one subfolder.
If a component is needed by several sections, it goes into the section's `shared/` folder or into `ui/`; `ui/` holds only truly shared components.
Texts, links, `id`s and magic values (timeouts, limits, media queries, statuses) live in `constants`; we do not hardcode them in components or hooks.
Logic without markup: state and effects go into `hooks/`, pure functions (validation, formatting, data building) go into `lib/`. Anything that talks to the network or browser storage goes into `services/`.
A hook needed by one feature lives in its subfolder `hooks/<feature>/`; shared ones sit in `hooks/common/` or `hooks/effects/`.

## Formatting

Prettier (with the Tailwind plugin for class ordering): `npm run format` / `npm run format:check`.

New page: create `src/app/about/page.js` (standard Next.js App Router routing) and build it from the components in `src/components/features/about/`.

Alias `@/*` → `src/*`.

## Environment variables

Copy `.env.example` to `.env`. All variables are read in `src/config/env.js`.

| Variable                            | Required      | Purpose                                              |
| ----------------------------------- | ------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_API_URL`               | in production | backend API (default `http://localhost:4000` in dev) |
| `NEXT_PUBLIC_GEOCODING_SEARCH_URL`  | no            | city search (default Open-Meteo)                     |
| `NEXT_PUBLIC_GEOCODING_REVERSE_URL` | no            | city by coordinates (default Nominatim)              |
| `NEXT_PUBLIC_MAPS_EMBED_URL`        | no            | map embedded on the offer page (default Google Maps) |
| `NEXT_PUBLIC_MAPS_SEARCH_URL`       | no            | "open in maps" link (default Google Maps)            |
