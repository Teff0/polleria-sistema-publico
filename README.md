# Pollería System

Sistema web interno para una pollería en Perú. El proyecto se encuentra en la
Fase 0: fundamentos técnicos, sin módulos de negocio implementados.

## Stack

- `apps/web`: Next.js + React + TypeScript.
- `apps/api`: NestJS + TypeScript.
- PostgreSQL local mediante Docker Compose.
- Prisma inicializado únicamente en la infraestructura de la API.
- REST/JSON bajo `/api/v1`.
- Swagger disponible en `/api/docs` cuando la API está levantada.
- Workspace administrado con pnpm.

## Requisitos

- Node.js 22 o compatible.
- pnpm 11.
- Docker y Docker Compose para PostgreSQL.

## Inicio rápido

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm db:generate
pnpm dev
```

La web queda disponible en `http://localhost:3000`, la API en
`http://localhost:3001` y la documentación en `http://localhost:3001/api/docs`.
PostgreSQL se publica en `localhost:5433` por defecto para evitar conflictos con
otros servicios locales; se puede cambiar con `POSTGRES_PORT`.

## Verificaciones

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

## Documentación

- [AGENTS.md](AGENTS.md)
- [docs/PROJECT.md](docs/PROJECT.md)
- [docs/architecture/ARCHITECTURE.md](docs/architecture/ARCHITECTURE.md)
- [docs/TECH_STACK.md](docs/TECH_STACK.md)
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- [docs/ROADMAP.md](docs/ROADMAP.md)
- [docs/decisions/](docs/decisions/)
