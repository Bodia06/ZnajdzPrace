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
├── app/                    # маршрути, layout, глобальні стилі
├── views/                  # вміст сторінок (views/<сторінка>/<Сторінка>Page.jsx)
├── components/
│   ├── ui/                 # базові UI-компоненти (Button, Badge, Logo…)
│   │   ├── icons/          # SVG-іконки
│   │   └── motion/         # анімаційні обгортки (Reveal, Tilt)
│   ├── layout/             # Header, Footer та ін.
│   └── features/<сторінка>/<Секція>/
│       └── index.jsx       # секція + дрібні компоненти поруч
├── hooks/                  # кастомні React-хуки
├── lib/                    # утиліти
├── services/               # робота з API
├── config/                 # конфіг сайту
└── constants/              # дані й тексти: links, navigation, footer, home/<секція>
public/images/              # статичні зображення
```

Секція сторінки — це папка з `index.jsx` (складання) і компонентами цієї секції.
Тексти й посилання живуть у `constants`, у компонентах їх не вписуємо.
Компонент, потрібний лише одній секції, лежить у її папці; у `ui/` — тільки універсальні.

## Форматування

Prettier (з плагіном Tailwind для порядку класів): `npm run format` / `npm run format:check`.

Нова сторінка: створи `src/views/about/AboutPage.jsx`, потім `src/app/about/page.js`, який її рендерить.
Папку не називаємо `pages`: `src/pages` Next трактує як Pages Router, що конфліктує з `app/`.

Alias `@/*` → `src/*`. Змінні середовища: див. `.env.example`.
