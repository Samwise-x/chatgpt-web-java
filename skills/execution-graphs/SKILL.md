---
name: execution-graphs
description: Validate and execute DAGs with observable dependency ordering. Use when requests involve execution graphs & dependency scheduling, its subtopics, or compositions requiring it.
---

# Execution Graphs & Dependency Scheduling

**Domain:** Orchestration & Execution · **Sections:** 65–71 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Validate and execute DAGs with observable dependency ordering. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Define graph and acceptance predicate → validate dependencies → launch independent tasks concurrently → await all required results → evaluate policies → verify postconditions.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 65. Directed acyclic graphs

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **directed acyclic graphs**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 66. Dependency resolution

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **dependency resolution**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 67. Topological execution ordering

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **topological execution ordering**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 68. Concurrent independent graph nodes

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **concurrent independent graph nodes**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 69. Multi-stage execution pipelines

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **multi-stage execution pipelines**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 70. Workflow state transitions

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **workflow state transitions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 71. Graph execution reporting

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **graph execution reporting**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"execution-graphs", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
