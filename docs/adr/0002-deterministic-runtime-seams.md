# ADR-0002: One orchestration seam and deterministic fixture adapters

Status: Accepted · 2026-10-27

## Context

The real `functions.exec` runtime is hosted; CI runs Node, not the host tools. Need repeatable tests without representing mocks as remote effects.

## Decision

Expose execution algorithms as small TypeScript public entry points. Test them with injectable async tool functions in Node and document host-specific invocation as separate snippets. Emit provenance markers for live versus synthetic evidence.

## Consequences

Algorithms receive deterministic acceptance tests; live connections use the same high-level patterns without assuming identical response envelopes.
