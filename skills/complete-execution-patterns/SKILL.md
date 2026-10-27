---
name: complete-execution-patterns
description: Run complete demonstrable samples with synthetic and optionally live adapters. Use when requests involve complete execution patterns, its subtopics, or compositions requiring it.
---

# Complete Execution Patterns

**Domain:** Operational Runbooks · **Sections:** 151–158 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Run complete demonstrable samples with synthetic and optionally live adapters. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Select a scenario → inspect exact tool schemas → run deterministic fixture → perform authorized live operations where requested → verify with independent reads.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 151. Single-tool execution

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **single-tool execution**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 152. Parallel evidence collection

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **parallel evidence collection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 153. Conditional cross-tool execution

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **conditional cross-tool execution**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 154. Dependency-aware workflow

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **dependency-aware workflow**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 155. Cross-service reconciliation

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **cross-service reconciliation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 156. Automated verification loop

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **automated verification loop**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 157. Evidence-producing execution pipeline

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **evidence-producing execution pipeline**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 158. Comprehensive orchestration example

**Operational rule.** Discover the live named tool, read its schema, construct input with the authorized account, execute and collect a source URL; distinguish fixture-based rehearsals from live provider runs.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **comprehensive orchestration example**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /fetch/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"complete-execution-patterns", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
