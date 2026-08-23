# Roadmap

## Phase 0 — Foundations

Goal: create a healthy development base before business features.

Deliverables:

- monorepo initialized;
- Next.js app;
- NestJS app;
- TypeScript strict configuration;
- PostgreSQL local development setup;
- Prisma infrastructure initialized;
- lint/format/typecheck;
- testing baseline;
- OpenAPI baseline;
- environment example;
- documentation committed;
- first clean build/test run.

Do not implement business modules in this phase beyond minimal scaffolding required for the platform.

## Phase 1 — Auth, Users, Roles, Permissions

Deliverables:

- login;
- secure password storage;
- users;
- roles;
- permissions;
- authorization guard/policy foundation.

## Phase 2 — Products and Categories

Deliverables:

- product catalog;
- categories;
- prices;
- activation/deactivation;
- admin management UI/API.

## Phase 3 — Sales

Deliverables:

- Sale;
- SaleItem;
- DRAFT/PAID/CANCELLED state model;
- backend-owned calculations;
- historical item snapshots.

## Phase 4 — Payments

Deliverables:

- payment methods;
- payments;
- combined payments;
- payment validation;
- idempotency for critical payment completion.

## Phase 5 — Cash Register

Deliverables:

- opening;
- cash movements;
- expected cash;
- closing;
- difference;
- audit integration.

## Phase 6 — Customers

Deliverables:

- generic customer;
- person/company customer data;
- lookup/creation flows required for billing.

## Phase 7 — Billing Documents

Deliverables:

- receipt model;
- invoice model;
- credit-note relationship;
- internal billing lifecycle.

## Phase 8 — Electronic Billing Provider

Deliverables:

- ElectronicBillingPort;
- selected provider adapter;
- issue/status/credit-note flows;
- provider error mapping;
- retries/idempotency;
- document artifact metadata.

Provider selection happens in this phase, not earlier.

## Phase 9 — Complete Frontend Flow

Deliverables:

- cashier flow;
- sale;
- payment;
- billing;
- cash operations;
- responsive UX.

## Phase 10 — Audit and Initial Reports

Deliverables:

- audit views;
- daily sales;
- payment-method totals;
- cash summaries;
- basic operational reporting.

## Phase 11 — Production

Deliverables:

- cloud deployment;
- production PostgreSQL;
- backups;
- restore verification;
- HTTPS;
- secrets;
- monitoring/logging;
- production readiness review;
- billing production credentials.

## Future

Possible future phases:

- inventory;
- recipes;
- kitchen;
- delivery;
- thermal printing;
- notifications;
- offline mode;
- native mobile if justified;
- advanced analytics.

These are not V1 commitments.
