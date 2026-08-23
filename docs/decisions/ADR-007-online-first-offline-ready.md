# ADR-007-online-first-offline-ready — Online First, Offline Ready

## Status

Accepted for initial architecture.

## Context

Offline-first would materially increase complexity before there is a current requirement.

## Decision

V1 requires Internet; offline behavior is deferred. Avoid choices that prevent future sync/idempotency.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Future offline implementation will still require substantial work, but the core model should not block it.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
