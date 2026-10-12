# ZnajdzPrace — client

Next.js (App Router) + Tailwind CSS v4 + React Compiler.

## Запуск

```bash
cd client
npm install
npm run dev     # http://localhost:3000
```

## Скрипти

- `npm run dev` — dev-сервер
- `npm run build` — production-збірка
- `npm start` — запуск збірки
- `npm run lint` — ESLint

## Структура

```
src/
├── app/                        # маршрути (page.js, not-found.js), layout, глобальні стилі
├── components/
│   ├── ui/                     # універсальні компоненти (Button, Logo…)
│   │   ├── icons/              # SVG-іконки
│   │   └── motion/             # Reveal, Tilt, Parallax
│   ├── layout/
│   │   ├── Header/             # Header + MobileMenu, NavLink, Badge, BurgerButton
│   │   └── Footer/
│   └── features/
│       ├── home/<Секція>/      # Hero, Category, HowItWorks, Tools, Faq
│       │   ├── index.jsx       # складання секції
│       │   └── …               # компоненти лише цієї секції
│       └── not-found/          # сторінка з однією секцією — без зайвого рівня
├── hooks/                      # кастомні React-хуки
├── lib/                        # утиліти
├── services/                   # робота з API
├── config/                     # конфіг сайту
└── constants/                  # дані й тексти
    ├── links.js
    ├── layout/                 # navigation, footer
    ├── home/                   # hero, category, how-it-works, tools, faq
    └── not-found.js
public/images/              # статичні зображення
```

Секція сторінки — це папка з `index.jsx` (складання) і компонентами цієї секції; складна частина (наприклад, картка в Tools) теж отримує власну папку.
Сторінка з однією секцією (наприклад, 404) не має зайвого рівня: `features/not-found/index.jsx` лежить прямо в папці сторінки.
Якщо компонент потрібен кільком секціям — він іде в `shared/` секції або в `ui/`.
Тексти й посилання живуть у `constants`, у компонентах їх не вписуємо.
Компонент, потрібний лише одній секції, лежить у її папці; у `ui/` — тільки універсальні.

## Форматування

Prettier (з плагіном Tailwind для порядку класів): `npm run format` / `npm run format:check`.

Нова сторінка: створи `src/app/about/page.js` (стандартний роутинг Next.js App Router) і зібери її з компонентів `src/components/features/about/`.

Alias `@/*` → `src/*`. Змінні середовища: див. `.env.example`.
