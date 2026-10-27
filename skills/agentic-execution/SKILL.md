---
name: agentic-execution
description: Separate model judgment from deterministic orchestration code. Use when requests involve agentic execution architecture, its subtopics, or compositions requiring it.
---

# Agentic Execution Architecture

**Domain:** Agentic Systems · **Sections:** 125–130 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Separate model judgment from deterministic orchestration code. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Parse explicit objective → discover eligible operations → evaluate deterministic policy → dispatch → observe → persist evidence externally.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 125. Model reasoning versus program execution

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **model reasoning versus program execution**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 126. Ephemeral execution substrates

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **ephemeral execution substrates**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 127. Deterministic execution delegation

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **deterministic execution delegation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 128. Tool-mediated agent actions

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **tool-mediated agent actions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 129. External state ownership

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **external state ownership**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 130. Agentic workflow composition

**Operational rule.** Keep policy in an explicit predicate and execution in a temporary module. The model produces intent; the program chooses tool calls; the provenance record captures the observed result for external admission.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **agentic workflow composition**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "agentic-execution",
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
