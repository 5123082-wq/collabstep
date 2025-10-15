# Collabverse Monorepo

Репозиторий содержит рабочий каркас для веб-приложения Collabverse на Next.js и связанные пакеты. Этап 0 фиксирует базовую конфигурацию окружения, единые инструменты и заготовки под будущие фичи.

## Требования к окружению

- Node.js >= 20 < 21 (см. [`.nvmrc`](./.nvmrc)).
- pnpm >= 9 (в проекте используется 8.15.5).
- Для e2e-тестов необходимы браузеры Playwright: `pnpm exec playwright install`.

## Установка зависимостей

```bash
pnpm install
```

## Базовые команды

| Команда | Назначение |
| --- | --- |
| `pnpm dev` | Запустить Next.js приложение (`@collabverse/web`) в dev-режиме. |
| `pnpm build` | Собрать Next.js приложение. |
| `pnpm start` | Запустить production-сервер Next.js после сборки. |
| `pnpm lint` | Прогнать ESLint по репозиторию. |
| `pnpm test` | Запустить Jest (`ts-jest`) со snapshot-режимом. |
| `pnpm test:e2e` | Запустить smoke-набор Playwright (Chromium, headless). |
| `pnpm dev:turbo` | Прежняя команда Turborepo для параллельного dev-режима. |
| `pnpm build:turbo` | Прежняя Turborepo сборка всех пакетов. |

Команды для базы данных (`pnpm db:migrate`, `pnpm db:seed`) оставлены как заглушки из исходного скелета.

## Переменные окружения

Скопируйте `.env.example` в `.env` и при необходимости измените значения.

- `NAV_V1`: включает новую навигацию (значение `on` активирует флаг). По умолчанию `off`.
- `APP_LOCALE`: локаль приложения, по умолчанию `ru`.

Навигация v1 будет подключена на Этапе 1. На Этапе 0 флаг и заглушки добавлены, но UI не изменён.

## Тесты и CI

- Юнит-тесты расположены в `tests/unit` и выполняются через Jest (`ts-jest`).
- Smoke e2e-тесты размещены в `tests/e2e` и работают через Playwright с авто-подъёмом dev-сервера.
- GitHub Actions workflow `.github/workflows/ci.yml` запускает `lint`, `build`, `test` и `test:e2e` на пуш в `main`.

## Дополнительная документация

- [`docs/baseline.md`](./docs/baseline.md) — зафиксированная информация об окружении и командах.
- [`apps/web/docs/README_nav_ru.md`](./apps/web/docs/README_nav_ru.md) — план навигации и этапов внедрения.
