---
name: self-correcting-loops
description: Iterate from observations to corrective operations until checks pass. Use when requests involve self-correcting execution loops, its subtopics, or compositions requiring it.
---

# Self-Correcting Execution Loops

**Domain:** Agentic Systems · **Sections:** 137–142 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Iterate from observations to corrective operations until checks pass. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Parse explicit objective → discover eligible operations → evaluate deterministic policy → dispatch → observe → persist evidence externally.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 137. Observe–evaluate–act–verify cycles

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **observe–evaluate–act–verify cycles**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 138. Acceptance-driven iteration

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **acceptance-driven iteration**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 139. Diagnostic feedback processing

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **diagnostic feedback processing**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 140. Automated corrective actions

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **automated corrective actions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 141. Repeated acceptance testing

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **repeated acceptance testing**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 142. Completion criteria

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **completion criteria**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "self-correcting-loops",
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
