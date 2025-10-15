# Baseline Stage 0

## Версии и инструменты

| Инструмент | Версия / статус |
| --- | --- |
| Node.js | v20.19.4 (`.nvmrc` → `v20`) |
| pnpm | 8.15.5 (workspace) |
| Turbo | 1.10.12 (опциональные команды `dev:turbo`, `build:turbo`) |
| Next.js | 14.2.4 (`apps/web`) |
| React | 18.2.0 |
| TypeScript | 5.4.5 |
| Tailwind CSS | 3.4.3 |
| ESLint | 8.57.0 (общий конфиг `.eslintrc.cjs`) |
| Prettier | 3.2.5 |
| Jest / ts-jest | 29.7.0 / 29.2.2 |
| Playwright | 1.45.0 (Chromium, headless) |
| Zustand | 4.5.2 (`apps/web`) |
| lucide-react | 0.314.0 (`apps/web`) |

## Команды разработки

| Команда | Описание |
| --- | --- |
| `pnpm install` | Установка зависимостей. |
| `pnpm dev` | Dev-сервер Next.js приложения. |
| `pnpm build` | Production-сборка Next.js. |
| `pnpm start` | Запуск production-сервера после `build`. |
| `pnpm lint` | ESLint по всему репозиторию. |
| `pnpm test` | Jest (snapshot-режим). |
| `pnpm test:e2e` | Playwright smoke-тест. |
| `pnpm dev:turbo` | Историческая команда Turborepo (оставлена для совместимости). |

## Окружение и инфраструктура

- Docker Compose отсутствует на этапе 0.
- Файлы `.env*` не закоммичены; образец настроек в `.env.example`.
- Дополнительные инструкции по навигации см. в `apps/web/docs/README_nav_ru.md`.

## Известные замечания

- Предупреждений/ошибок сборки не обнаружено. Потенциальные улучшения будут учтены на последующих этапах (DoD этапа 7).
