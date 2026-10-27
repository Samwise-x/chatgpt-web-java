---
name: programming-primitives
description: Select language constructs for orchestration without a surrounding Node.js process. Use when requests involve javascript programming primitives, its subtopics, or compositions requiring it.
---

# JavaScript Programming Primitives

**Domain:** Runtime Fundamentals · **Sections:** 9–14 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Select language constructs for orchestration without a surrounding Node.js process. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Identify the requested runtime property → inspect available globals and documented exclusions → exercise an isolated fixture → emit observed and documented facts separately.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 9. Objects, arrays, maps, and sets

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **objects, arrays, maps, and sets**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 10. Functions and closures

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **functions and closures**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 11. Iteration, loops, and recursion

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **iteration, loops, and recursion**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 12. Promises and asynchronous functions

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **promises and asynchronous functions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 13. Error handling and exception propagation

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **error handling and exception propagation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 14. JSON serialization and deserialization

**Operational rule.** Record the exact host-provided interface, describe the lifecycle scope of each value, and compare the observed behavior with a Node 22 fixture. Treat an external receipt as an observation and re-read any claimed resulting state.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **json serialization and deserialization**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "programming-primitives",
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
