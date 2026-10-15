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
├── app/                        # маршрути (page.js), layout, глобальні стилі
│   ├── @modal/                 # паралельний слот: модальні вікна (перехоплені маршрути)
│   └── login, registration, offers, generator, not-found.js …
├── components/
│   ├── ui/                     # універсальні компоненти (Button, Logo, Collapse, Pagination…)
│   │   ├── icons/              # SVG-іконки
│   │   └── motion/             # Reveal, Tilt, Parallax
│   ├── layout/
│   │   ├── Header/             # Header + MobileMenu, NavLink, Badge, BurgerButton
│   │   └── Footer/
│   └── features/
│       ├── home/<Секція>/      # Hero, Category, HowItWorks, Tools, Faq
│       ├── offers/<Секція>/    # OffersTitle, OffersFilter, OffersResults (+ CitySuggestions)
│       ├── auth/               # модальне вікно входу/реєстрації (index.jsx, форми, fields/)
│       ├── generator/          # генератор CV (index.jsx, steps/, fields/, preview/)
│       └── not-found/          # сторінка з однією секцією — без зайвого рівня
├── hooks/                      # хуки; конкретні — у підпапках (auth, offers, generator, home, layout, autocomplete)
│   └── index.js                # єдиний вхід: import { useX } from '@/hooks'
├── lib/                        # чиста логіка без React (auth, offers, generator, format.js)
├── services/                   # запити до API (api.js, auth.js)
├── config/                     # конфіг сайту
└── constants/                  # дані й тексти (єдиний вхід: '@/constants')
    ├── links.js
    ├── layout/, home/          # navigation, footer · hero, category, how-it-works, tools, faq
    ├── offers/, auth/, generator/   # ids, тексти, мок-дані
    └── not-found.js
public/images/                  # статичні зображення
```

Секція сторінки — це папка з `index.jsx` (складання) і компонентами цієї секції; складна частина (наприклад, картка в Tools) теж отримує власну папку.
Сторінка з однією секцією (404, генератор, вікно авторизації) не має зайвого рівня: `index.jsx` лежить прямо в папці фічі.
Якщо компонент потрібен кільком секціям — він іде в `shared/` секції або в `ui/`.
Тексти, посилання та `id` живуть у `constants`, у компонентах їх не вписуємо.
Компонент, потрібний лише одній секції, лежить у її папці; у `ui/` — тільки універсальні.
Логіка без розмітки: стан і ефекти — у `hooks/`, чисті функції (валідація, форматування, побудова даних) — у `lib/`.
Хук, потрібний одній фічі, лежить у її підпапці `hooks/<фіча>/`; універсальні (`useScrollLock`, `useModalFocus`, `useTabKeyboard`…) — у корені `hooks/`.

## Форматування

Prettier (з плагіном Tailwind для порядку класів): `npm run format` / `npm run format:check`.

Нова сторінка: створи `src/app/about/page.js` (стандартний роутинг Next.js App Router) і зібери її з компонентів `src/components/features/about/`.

Alias `@/*` → `src/*`. Змінні середовища: див. `.env.example`.
