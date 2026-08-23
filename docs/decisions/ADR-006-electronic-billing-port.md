# ADR-006-electronic-billing-port — Electronic Billing Port

## Status

Accepted for initial architecture.

## Context

Provider selection can change and must not infect sales/business logic.

## Decision

Isolate the concrete PSE/provider behind an internal ElectronicBillingPort.

## Alternatives considered

- A simpler tightly coupled CRUD structure.
- A more complex distributed/microservice design.
- Deferring the decision entirely.

The selected decision provides the best balance for current scope and expected evolution.

## Consequences

Requires adapter/mapping code but lowers vendor lock-in.

This ADR may be superseded later by a new ADR. Do not silently rewrite architectural history when the decision changes.
