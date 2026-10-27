# ADR-0003: Execution is ephemeral; evidence and authority external

Status: Accepted · 2026-10-27

## Context
The JavaScript orchestration isolate does not retain local state after a call while external tools may change persistent resources.

## Decision
Treat the isolate as transient coordinator; bind authorization to tool interface; require post-operation reads for claimed durable effects; preserve provenance and outcomes in explicit external records.

## Consequences
Separate produced, observed, and accepted outcomes; capacity does not imply authorization.
