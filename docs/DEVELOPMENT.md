# Development Workflow

## Branching

Stable branch:

- `main`

Working branches:

- `feature/...`
- `fix/...`
- `refactor/...`

Do not use `main` as the default scratch branch for large unfinished work.

## Commits

Prefer small, meaningful commits.

Examples:

- `feat(sales): add sale creation use case`
- `feat(payments): support multiple payments per sale`
- `fix(cash): correct expected cash calculation`
- `refactor(billing): isolate provider adapter`

Avoid meaningless messages such as `update`, `changes`, `final`, or `fix stuff`.

## Task workflow

For each task:

1. read `AGENTS.md`;
2. read relevant docs;
3. identify affected module(s);
4. state relevant business rules;
5. check whether the model supports the feature cleanly;
6. implement the smallest correct change;
7. add/update tests;
8. run checks;
9. self-review;
10. update docs/ADR when required.

## Pull requests

Even if one developer is working initially, meaningful branches/PR-style reviews are useful for risky or architectural changes.

Critical changes should be reviewable as a coherent unit.

## CI target

Before merge, aim to run:

- typecheck;
- lint;
- unit tests;
- critical integration tests;
- build.

Add E2E checks as the project reaches end-to-end flows.

## Refactoring

Small behavior-preserving refactors are allowed.

Architecture-changing refactors require explicit review and an ADR when appropriate.

## Technical debt

If debt affects:

- financial correctness;
- security;
- billing;
- central architecture;

fix it before building more functionality on top.

Lower-risk debt may be documented and scheduled deliberately.

## Dependency policy

Do not install packages casually.

Evaluate necessity, maintenance, security, lock-in, and whether the existing stack already solves the problem.

## Definition of Done

See `AGENTS.md`.

A feature is not done merely because it compiles or looks correct in the UI.

## Codex workflow

Codex should receive short task prompts.

Do not repeatedly paste the whole project context.

Permanent context lives in:

- `AGENTS.md`
- `/docs`
- ADRs

Prompts should identify the current phase/task and tell Codex which docs to consult.
