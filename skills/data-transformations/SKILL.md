---
name: data-transformations
description: Normalize provider records into stable, comparable structures. Use when requests involve data transformation engine, its subtopics, or compositions requiring it.
---

# Data Transformation Engine

**Domain:** Data & Context Engineering · **Sections:** 79–85 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Normalize provider records into stable, comparable structures. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Capture records with origin → normalize and validate → reduce or join → assert evidence invariants → emit compact structured results.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 79. Filtering and mapping

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **filtering and mapping**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 80. Reduction and aggregation

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **reduction and aggregation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 81. Sorting and ranking

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **sorting and ranking**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 82. Grouping and deduplication

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **grouping and deduplication**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 83. Cross-service joins

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **cross-service joins**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 84. Regular-expression extraction

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **regular-expression extraction**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 85. Structured data validation

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **structured data validation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"data-transformations", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
