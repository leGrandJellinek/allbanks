# AllBanks.kz — Финансовый портал банковских услуг Казахстана

<p align="center">
  <img src="src/assets/images/logo.png" alt="AllBanks.kz Logo" width="220" />
</p>

<p align="center">
  <strong>Современный SPA-портал для мониторинга банковских услуг, курсов валют, кредитов, депозитов и обменных пунктов в Казахстане.</strong>
</p>

<p align="center">
  <a href="https://legrandjellinek.github.io/allbanks/"><strong>🌐 Открыть Live Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.5-42b883?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Vite-8.3_(Rolldown)-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite 8 (Rolldown)" />
  <img src="https://img.shields.io/badge/Rolldown-1.2-ff6b4a?style=flat-square&logo=rust&logoColor=white" alt="Rolldown" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Pinia-2.3-ffd859?style=flat-square&logo=pinia&logoColor=black" alt="Pinia" />
  <img src="https://img.shields.io/badge/Figma-100%25_Pixel_Perfect-F24E1E?style=flat-square&logo=figma&logoColor=white" alt="Pixel Perfect" />
  <img src="https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages" />
</p>

---

## 📖 О проекте

**AllBanks.kz** — независимый финансовый навигатор по банкам и обменным пунктам Республики Казахстан. Проект реализован с нуля как высокопроизводительное Single Page Application (SPA) с ювелирным **100% Pixel-to-Pixel** соответствием оригинальным дизайн-макетам Figma для Desktop (1440px) и Mobile (375px) экранов.

### Ключевые особенности
- 🎯 **100% Pixel-to-Pixel верстка** по Figma (Desktop & Mobile viewports).
- 🧱 **БЭМ-методология** (`block__element--modifier`) и чистая компонентная декомпозиция.
- 📱 **Mobile-First адаптивность** без компромиссов в функционале.
- ⚡ **Типизированный роутинг** на базе `unplugin-vue-router` с динамическими страницами `[id].vue`.
- 🌐 **Глобальный City Picker**: синхронизация выбранного города (Алматы, Астана, Шымкент и др.) по всему приложению через Pinia.
- 🎨 **Фирменная дизайн-система**: шрифты Gotham Pro и Gilroy, аккуратная типографика и цветовая палитра.
- 🛡️ **Полная типизация TypeScript**: строгая проверка `vue-tsc` на этапе сборки.

---

## 🛠 Технологический стек

| Категория | Технологии |
|---|---|
| **Frontend Framework** | [Vue 3](https://vuejs.org/) (Composition API, `<script setup lang="ts">`) |
| **Сборщик и бандлер** | [Vite 8](https://vite.dev/) (на базе сверхбыстрого бандлера [Rolldown](https://rolldown.rs/) на Rust) + [Rolldown 1.2](https://rolldown.rs/) |
| **Язык** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Стейт-менеджмент** | [Pinia 2](https://pinia.vuejs.org/) |
| **Маршрутизация** | [Vue Router 4](https://router.vuejs.org/) + [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) |
| **Стили и препроцессоры** | SCSS / Sass, методология БЭМ, адаптивная сетка |
| **Слайдеры и UI** | [Swiper 11](https://swiperjs.com/) |
| **Фавиконы и ассеты** | Мультиразмерный `.ico`, PNG (16x16, 32x32), Retina `apple-touch-icon` (180x180) |
| **CI / CD & Хостинг** | GitHub Actions + GitHub Pages (автоматический деплой с SPA fallback `404.html`) |

---

## 🧭 Разделы и функционал

- **Главная страница (`/`)**
  - Шапка с адаптивным бургер-меню и модальным окном авторизации *«Войти»*.
  - Быстрый доступ к ключевым финансовым услугам (категории).
  - Сводный виджет лучших курсов валют (USD, EUR, RUB) с интерактивным переключением городов.
  - Карусель лучших кредитных предложений банков РК.
  - Список банков с рейтингами и контактными данными.
  - Интерактивный блок отзывов и комментариев пользователей.

- **Курсы в банках (`/rates`)**
  - Мониторинг курсов валют Национального Банка и коммерческих банков.
  - Табличный вид сравнения курсов покупки и продажи валют (USD, EUR, RUB, CNY).
  - Фильтрация по городам.

- **Обменные пункты (`/exchangers`)**
  - Виджеты *«Лучшие курсы валют на сейчас»* и *«Средний курс тенге»*.
  - Многопараметрический фильтр: выбор района, улицы, оптимальных и лучших курсов, кнопка *«Выбрать»*, переход *«Показать на карте»* и сброс.
  - Детальная 9-колоночная таблица курсов для Desktop и адаптивный виджет с переключением валют (`USD`, `EUR`, `RUB`, `CNY`) для Mobile.
  - Сводные строки средних и лучших курсов с цветовой индикацией.
  - SEO-блок с раскрывающимся описанием.

- **Национальный Банк РК (`/nbk`)**
  - Официальные котировки валют НБК.
  - Динамика изменения стоимости тенге.

- **Кредиты (`/credits`)**
  - Сравнение потребительских кредитов от банков Казахстана.
  - Разделы: кредиты наличными (`/credits/cash`), ипотека (`/credits/mortgage`), онлайн-заявка (`/credits/apply`) и детальная карточка кредита (`/credits/:id`).
  - Фильтры по сумме, сроку и процентным ставкам.

- **Вклады для физических лиц (`/deposits`)**
  - Подбор депозитов: фильтры по валютам (KZT, USD, EUR, RUB), минимальной сумме, сроку размещения и возможности снятия/пополнения.
  - Карточки вкладов с расчетом доходности и детальная страница (`/deposits/:id`).

- **Микрозаймы (`/microloans`)**
  - Предложения микрофинансовых организаций (МФО) Казахстана с расчетом переплаты.

- **Новости (`/news`)**
  - Свежие финансовые и экономические новости Казахстана с пагинацией и детальным просмотром (`/news/:id`).

- **Банки Казахстана (`/banks`)**
  - Реестр банков, контактные телефоны, адреса головных офисов, лицензии и детальные страницы банков (`/banks/:id`).

---

## 📁 Структура проекта

```text
allbanks/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD: сборка и публикация на GitHub Pages
├── public/                       # Статические ресурсы
│   ├── favicon.ico               # Мульти-размерный фавикон (16, 32, 48px)
│   ├── favicon-16x16.png         # Иконка 16x16
│   ├── favicon-32x32.png         # Иконка 32x32
│   └── apple-touch-icon.png      # Retina-иконка 180x180 для iOS
├── src/
│   ├── assets/
│   │   ├── fonts/                # Gotham Pro & Gilroy шрифты
│   │   ├── images/               # Логотипы банков, баннеры, иконки
│   │   └── styles/               # SCSS-модули, переменные, сетка, миксины
│   ├── components/               # Модульные UI-компоненты (БЭМ)
│   │   ├── Credits/              # Компоненты раздела кредитов
│   │   │   ├── CreditBanner.vue
│   │   │   ├── CreditComparisonCard.vue
│   │   │   ├── CreditFilters.vue
│   │   │   ├── CreditOfferCard.vue
│   │   │   ├── CreditPagination.vue
│   │   │   └── CreditSeo.vue
│   │   ├── Deposits/             # Компоненты раздела депозитов
│   │   │   ├── DepositCard.vue
│   │   │   ├── DepositFilters.vue
│   │   │   └── DepositPagination.vue
│   │   ├── Exchangers/           # Компоненты раздела обменников
│   │   │   ├── ExchangerFilter.vue
│   │   │   ├── ExchangerRateCards.vue
│   │   │   ├── ExchangerSeo.vue
│   │   │   └── ExchangerTable.vue
│   │   ├── Main/                 # Виджеты главной страницы
│   │   │   ├── Banks.vue
│   │   │   ├── Categories.vue
│   │   │   ├── CreditOffers.vue
│   │   │   └── Currency.vue
│   │   ├── CommentsBlock.vue     # Блок комментариев и отзывов
│   │   ├── Footer.vue            # Глобальный футер сайта
│   │   └── Navbar.vue            # Адаптивное навигационное меню
│   ├── pages/                    # Файловая маршрутизация (unplugin-vue-router)
│   │   ├── banks/                # /banks, /banks/:id
│   │   ├── credits/              # /credits, /credits/cash, /credits/mortgage, ...
│   │   ├── deposits/             # /deposits, /deposits/:id
│   │   ├── news/                 # /news, /news/:id
│   │   ├── exchangers.vue        # /exchangers
│   │   ├── index.vue             # /
│   │   ├── microloans.vue        # /microloans
│   │   ├── nbk.vue               # /nbk
│   │   └── rates.vue             # /rates
│   ├── stores/                   # Pinia хранилища данных
│   │   └── banks.ts              # Города, списки банков, курсы валют, меню
│   ├── App.vue                   # Корневой компонент приложения
│   └── main.ts                   # Точка входа Vue приложения
├── index.html                    # Корневой HTML-шаблон
├── package.json                  # Зависимости и скрипты
├── tsconfig.json                 # Конфигурация TypeScript
└── vite.config.ts                # Конфигурация Vite
```

---

## 🚀 Быстрый старт

### Требования
- **Node.js** версии 18.x или выше (рекомендуется 20.x+)
- **npm** версии 9.x или выше

### Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/leGrandJellinek/allbanks.git
   cd allbanks
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите сервер разработки:**
   ```bash
   npm run dev
   ```
   Приложение откроется локально по адресу `http://localhost:5173/`.

---

## 📦 Сборка и деплой

### Production-сборка
Для компиляции TypeScript и генерации оптимизированных статических файлов выполните:
```bash
npm run build
```
Скрипт запускает `vue-tsc -b`, выполняет `vite build` и автоматически копирует `dist/index.html` в `dist/404.html` для поддержки роутинга в GitHub Pages.

### Локальный предпросмотр сборки
```bash
npm run preview
```

### Автоматический деплой
При каждом пуше в ветку `main` срабатывает GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), который автоматически собирает проект и публикует актуальную версию на GitHub Pages:
🔗 **[https://legrandjellinek.github.io/allbanks/](https://legrandjellinek.github.io/allbanks/)**

---

## 👥 Авторство и поддержка

- **Разработчик**: [Jellinek](https://github.com/leGrandJellinek) (`jellinekbraus@gmail.com`)
- **Проект**: AllBanks.kz — Все банки Казахстана
