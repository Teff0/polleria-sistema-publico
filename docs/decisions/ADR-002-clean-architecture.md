# ADR-002-clean-architecture — Lightweight Clean Architecture

## Status

Accepted for initial architecture.

## Context

Business rules must remain independent from frameworks and external services.

## Decision

Use dependency direction presentation -> application -> domain, with infrastructure implementing ports.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

More mapping/structure than a CRUD-only design, but significantly better replaceability and testability.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
