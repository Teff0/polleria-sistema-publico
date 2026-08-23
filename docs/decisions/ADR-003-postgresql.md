# ADR-003-postgresql — PostgreSQL

## Status

Accepted for initial architecture.

## Context

Financial and billing data benefit from transactions, relational constraints, and mature integrity guarantees.

## Decision

Use PostgreSQL as the primary transactional database.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Schema evolution must be handled with migrations.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
