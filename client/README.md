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
├── app/            # маршрути, layout, глобальні стилі
├── views/          # вміст сторінок (views/<сторінка>/<Сторінка>Page.jsx)
├── components/
│   ├── ui/         # базові UI-компоненти (кнопки, інпути…)
│   ├── layout/     # Header, Footer та ін.
│   └── features/   # компоненти конкретних фіч
├── hooks/          # кастомні React-хуки
├── lib/            # утиліти
├── services/       # робота з API
├── config/         # конфіг сайту
└── constants/      # константи
public/images/      # статичні зображення
```

Нова сторінка: створи `src/views/about/AboutPage.jsx`, потім `src/app/about/page.js`, який її рендерить.
Папку не називаємо `pages`: `src/pages` Next трактує як Pages Router, що конфліктує з `app/`.

Alias `@/*` → `src/*`. Змінні середовища: див. `.env.example`.
