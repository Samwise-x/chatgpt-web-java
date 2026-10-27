---
name: conditional-workflows
description: Drive tool calls by evidence-based conditions and gates. Use when requests involve conditional workflows, its subtopics, or compositions requiring it.
---

# Conditional Workflows

**Domain:** Orchestration & Execution · **Sections:** 58–64 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Drive tool calls by evidence-based conditions and gates. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Define graph and acceptance predicate → validate dependencies → launch independent tasks concurrently → await all required results → evaluate policies → verify postconditions.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 58. Conditional branching

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **conditional branching**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 59. Decision trees

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **decision trees**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 60. State-dependent tool invocation

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **state-dependent tool invocation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 61. Policy-driven operation selection

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **policy-driven operation selection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 62. Conditional remediation

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **conditional remediation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 63. Explicit acceptance predicates

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **explicit acceptance predicates**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 64. Retry and recovery control flow

**Operational rule.** Encode precedence and result conditions as executable predicates. Track correlation IDs, execute independent operations concurrently, and keep dependent operations sequential. Verify outcomes at the public workflow interface.

**Implementation and validation.** Prefer a dependency-aware runner or bounded pool over model-mediated step-by-step execution. For **retry and recovery control flow**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "conditional-workflows",
  available: inventory.length,
  sample: inventory.slice(0, 5),
});
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance

1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills

See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
