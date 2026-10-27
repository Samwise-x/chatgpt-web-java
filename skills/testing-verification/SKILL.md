---
name: testing-verification
description: Check contracts at public seams using positive and negative fixtures. Use when requests involve automated testing & verification, its subtopics, or compositions requiring it.
---

# Automated Testing & Verification

**Domain:** Advanced Engineering · **Sections:** 107–112 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Check contracts at public seams using positive and negative fixtures. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Write one public-seam test → execute red case → implement smallest correction → execute green case → run full check → review actual diff.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 107. Test orchestration

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **test orchestration**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 108. Deterministic assertions

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **deterministic assertions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 109. Multi-service acceptance tests

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **multi-service acceptance tests**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 110. Result comparison

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **result comparison**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 111. Regression evaluation

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **regression evaluation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 112. End-to-end evidence collection

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **end-to-end evidence collection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"testing-verification", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
