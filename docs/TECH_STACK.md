# Technical Stack

## Frontend

- Next.js
- React
- TypeScript

Purpose:

- responsive web UI;
- PC/laptop/mobile browser support;
- clear feature-based organization.

## Backend

- NestJS
- TypeScript with strict mode

Purpose:

- modular backend organization;
- controllers/providers/DI support;
- strong TypeScript ecosystem.

NestJS is an implementation tool, not the architecture.

## Database

- PostgreSQL

Reasons:

- relational integrity;
- transactions;
- constraints;
- strong fit for sales/payments/cash/billing.

## ORM

- Prisma

Rules:

- infrastructure only;
- no Prisma types in domain;
- no direct controller-to-Prisma business flow;
- migrations committed with schema changes.

## API

- REST
- JSON
- `/api/v1`

## API documentation

- OpenAPI / Swagger

## Monorepo

- pnpm workspace

Initial conceptual repository:

- `apps/web`
- `apps/api`
- `packages/contracts`
- `packages/config`
- `docs`

## Docker

Use where it improves reproducibility, especially local PostgreSQL and local project setup.

Do not introduce container complexity without need.

## Testing

Use:

- unit tests;
- integration tests;
- E2E tests.

Follow the frameworks' standard testing tooling unless a clear reason justifies an alternative.

## Authentication

Initial direction:

- username/email + password;
- secure password hash;
- access/refresh token strategy or equivalent.

Exact implementation should be chosen during auth implementation and documented.

## Money

Do not use unsafe floats.

Choose a consistent money representation and document it before financial implementation.

## Replaceability strategy

The architecture should make it possible to replace:

- Next.js frontend;
- NestJS backend;
- Prisma;
- PSE/provider;

without redefining the business model.

Replacing a programming language still requires code rewrite, but domain concepts, contracts, database rules, API specification, and business rules should remain usable as migration specifications.
