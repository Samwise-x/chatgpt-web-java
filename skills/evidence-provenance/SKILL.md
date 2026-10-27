---
name: evidence-provenance
description: Attach tool identity and origin to any claimed observation. Use when requests involve evidence & provenance engineering, its subtopics, or compositions requiring it.
---

# Evidence & Provenance Engineering

**Domain:** Data & Context Engineering · **Sections:** 93–99 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Attach tool identity and origin to any claimed observation. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Capture records with origin → normalize and validate → reduce or join → assert evidence invariants → emit compact structured results.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 93. Evidence record schemas

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **evidence record schemas**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 94. Source identifiers

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **source identifiers**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 95. Operation-to-result correlation

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **operation-to-result correlation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 96. Timestamped observations

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **timestamped observations**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 97. Reproducible evidence bundles

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **reproducible evidence bundles**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 98. Acceptance evidence

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **acceptance evidence**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 99. Evidence aggregation across services

**Operational rule.** Define a minimal result schema that retains source identity and status. Apply the transformation to fixtures with duplicates, failures, and missing fields; assert invariant preservation and output size.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **evidence aggregation across services**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"evidence-provenance", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
