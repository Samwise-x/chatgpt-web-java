---
name: cross-service-runbooks
description: Compose live GitHub and other available service tools without treating them as permanent dependencies. Use when requests involve cross-service orchestration runbooks, its subtopics, or compositions requiring it.
---

# Cross-Service Orchestration Runbooks

**Domain:** Operational Runbooks · **Sections:** 143–150 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Compose live GitHub and other available service tools without treating them as permanent dependencies. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Select a scenario → inspect exact tool schemas → run deterministic fixture → perform authorized live operations where requested → verify with independent reads.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 143. GitHub repository inspection

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github repository inspection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 144. GitHub Actions workflow evaluation

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github actions workflow evaluation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 145. GitHub + documentation analysis

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github + documentation analysis**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 146. GitHub + Neon reconciliation

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github + neon reconciliation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 147. GitHub + Supabase integration

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github + supabase integration**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 148. GitHub + Vercel deployment coordination

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github + vercel deployment coordination**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 149. GitHub + Render deployment inspection

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **github + render deployment inspection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 150. Multi-provider infrastructure inventory

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **multi-provider infrastructure inventory**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /fetch/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"cross-service-runbooks", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
