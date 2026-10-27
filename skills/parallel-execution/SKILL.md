---
name: parallel-execution
description: Control asynchronous concurrency and correlation of tool responses. Use when requests involve parallel execution & concurrency, its subtopics, or compositions requiring it.
---

# Parallel Execution & Concurrency

**Domain:** Orchestration & Execution · **Sections:** 51–57 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Control asynchronous concurrency and correlation of tool responses. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Define graph and acceptance predicate → validate dependencies → launch independent tasks concurrently → await all required results → evaluate policies → verify postconditions.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 51. Promise.all()

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **promise.all()**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 52. Promise.allSettled()

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **promise.allsettled()**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 53. Sequential versus concurrent execution

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **sequential versus concurrent execution**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 54. Bounded concurrency

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **bounded concurrency**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 55. Worker-pool implementations

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **worker-pool implementations**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 56. Batch processing

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **batch processing**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 57. Parallel result correlation

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **parallel result correlation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"parallel-execution", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
