# ADR-001-modular-monolith — Modular Monolith

## Status

Accepted for initial architecture.

## Context

A single small business and one location do not justify distributed-system complexity.

## Decision

Use a modular monolith rather than microservices for V1.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Simpler deployment and operations; requires disciplined module boundaries.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
