# ADR-005-prisma-as-infrastructure — Prisma as Infrastructure

## Status

Accepted for initial architecture.

## Context

Avoid coupling domain and application logic to the ORM.

## Decision

Use Prisma only inside infrastructure/persistence adapters.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Requires mapping between Prisma records and internal models.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
