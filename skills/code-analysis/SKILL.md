---
name: code-analysis
description: Analyze retrieved code and reconstruct import and call relationships. Use when requests involve source code analysis, its subtopics, or compositions requiring it.
---

# Source Code Analysis

**Domain:** Advanced Engineering · **Sections:** 100–106 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Analyze retrieved code and reconstruct import and call relationships. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Write one public-seam test → execute red case → implement smallest correction → execute green case → run full check → review actual diff.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 100. Repository source retrieval

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **repository source retrieval**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 101. File classification

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **file classification**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 102. Symbol extraction

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **symbol extraction**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 103. Import/export analysis

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **import/export analysis**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 104. Dependency graph construction

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **dependency graph construction**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 105. AST-assisted analysis

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **ast-assisted analysis**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 106. Call-chain investigation

**Operational rule.** Test public behavior against a known fixture and a mutation that should fail. Record exact command, expected output, and observed response. For a remote effect, follow the write with an independent read.

**Implementation and validation.** Compare the acceptance observation with a literal expected value, never with an expression that merely restates the implementation. For **call-chain investigation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /search|fetch|list/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"code-analysis", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
