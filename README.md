# Collabverse Monorepo (MVP Skeleton)

This repository currently hosts the foundational monorepo structure for the future Collabverse platform. It includes the workspace configuration files that allow us to start implementing the frontend (Next.js), backend (NestJS) and shared packages. Further work will add the actual applications, database schema, and infrastructure described in the project brief.

## Structure

```
apps/
  web/         # Next.js app (to be implemented)
  api/         # NestJS app (to be implemented)
packages/
  ui/          # Shared UI kit (to be implemented)
  db/          # Prisma schema & tooling (to be implemented)
  types/       # Shared TypeScript types (to be implemented)
  config/      # Shared config packages (to be implemented)
infra/
  docker/      # Docker & deployment assets (to be implemented)
```

## Getting Started

Install dependencies using pnpm (recommended version pinned in `package.json`):

```bash
pnpm install
```

Available root scripts:

- `pnpm dev` – runs the dev servers for all apps via Turborepo.
- `pnpm build` – builds all apps/packages.
- `pnpm lint` – executes linting across the monorepo.
- `pnpm test` – runs unit/integration tests across the monorepo.
- `pnpm db:migrate` – placeholder command for database migrations.
- `pnpm db:seed` – placeholder command for database seeders.

More detailed instructions will be added once the individual apps and packages are scaffolded.
