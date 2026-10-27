---
name: execution-lifecycle
description: Track what survives one invocation and where external state belongs. Use when requests involve execution lifecycle & state, its subtopics, or compositions requiring it.
---

# Execution Lifecycle & State

**Domain:** Runtime Fundamentals · **Sections:** 15–20 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Track what survives one invocation and where external state belongs. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Identify the requested runtime property → inspect available globals and documented exclusions → exercise an isolated fixture → emit observed and documented facts separately.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 15. Invocation initialization

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **invocation initialization**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 16. Temporary execution state

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **temporary execution state**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 17. Promise resolution and completion

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **promise resolution and completion**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 18. Persistent versus ephemeral operations

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **persistent versus ephemeral operations**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 19. Execution result emission

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **execution result emission**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 20. State transfer between invocations

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **state transfer between invocations**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "execution-lifecycle",
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
