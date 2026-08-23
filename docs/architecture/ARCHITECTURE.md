# Architecture

## Architectural style

Use a modular monolith with lightweight Clean Architecture and hexagonal principles at external boundaries.

Avoid microservices for V1.

## Main dependency rule

`presentation -> application -> domain`

Infrastructure implements ports used by the inner layers.

The domain must not know about frameworks or infrastructure.

## Initial backend modules

- auth
- users
- products
- customers
- sales
- payments
- billing
- cash
- audit
- settings

Future modules are added only when required.

## Module internals

Use these areas when a module needs them:

- `domain`
- `application`
- `infrastructure`
- `presentation`

Do not create empty architecture folders without actual responsibilities.

## Domain

Contains:

- entities;
- value objects when justified;
- invariants;
- domain errors;
- domain contracts/ports where appropriate.

Must not depend on NestJS, Prisma, PostgreSQL, HTTP, React, or provider SDKs.

## Application

Contains use cases and orchestration.

Examples:

- CreateSale
- RegisterPayment
- OpenCashRegister
- CloseCashRegister
- IssueBillingDocument

Application coordinates domain behavior and ports.

## Infrastructure

Contains technical implementations:

- Prisma repositories;
- PostgreSQL persistence;
- billing provider adapters;
- external integrations;
- infrastructure configuration.

Infrastructure-specific objects should be mapped into internal objects.

## Presentation

Contains HTTP-facing concerns:

- NestJS controllers;
- request/response DTOs;
- transport validation;
- authentication and authorization integration;
- HTTP error mapping.

Controllers do not contain business calculations.

## Frontend

Use Next.js + React + TypeScript.

Organize primarily by business feature.

Avoid one giant generic components folder.

Centralize API communication.

Do not scatter raw fetch calls through many components.

Do not put authoritative business rules in React.

## API

REST + JSON under `/api/v1`.

API contracts are not domain entities and are not Prisma models.

Breaking public contract changes require deliberate versioning/decision.

## Persistence

PostgreSQL is the source of durable transactional data.

Prisma is an infrastructure tool, not a domain model.

All schema changes use migrations.

## Electronic billing

Use an internal port such as:

`ElectronicBillingPort`

Conceptual operations:

- issue();
- issueCreditNote();
- getStatus();

Concrete PSE/provider adapters live in infrastructure.

Provider-specific types/statuses are mapped into internal types.

## External-call transaction boundary

Do not keep a database transaction open while waiting for a PSE/external provider.

Preferred flow:

1. complete internal financial transaction;
2. persist BillingDocument as PENDING;
3. commit;
4. call external provider;
5. update billing status/result separately.

## Online first, offline ready

V1 requires Internet.

Do not implement offline sync now.

Avoid architectural choices that make future offline impossible.

Critical operations should use stable identifiers and idempotency strategies that can support future synchronization.

## Anti-patch principle

If a feature introduces repeated special cases in many modules, re-evaluate the model or boundaries.

Refactor the correct abstraction before building on top of a flawed design.

## Anti-overengineering principle

Do not introduce future infrastructure until there is a real requirement.

Clean boundaries are enough preparation.
