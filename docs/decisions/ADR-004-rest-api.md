# ADR-004-rest-api — REST API

## Status

Accepted for initial architecture.

## Context

Simple, widely supported, appropriate for web/mobile clients and future backend replacement.

## Decision

Use JSON REST endpoints under /api/v1.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Breaking API changes require versioning discipline.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
