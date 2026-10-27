---
name: tool-registry
description: Enumerate and classify tools from live advertised metadata. Use when requests involve tool registry architecture, its subtopics, or compositions requiring it.
---

# Tool Registry Architecture

**Domain:** Tool Interface & Discovery · **Sections:** 27–32 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Enumerate and classify tools from live advertised metadata. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Filter ALL_TOOLS by actual operation names → inspect complete argument descriptions → prepare authorized inputs → execute → normalize exactly the returned shape → report origin.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 27. ALL_TOOLS structure

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **all_tools structure**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 28. Tool discovery and enumeration

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **tool discovery and enumeration**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 29. Tool namespaces

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **tool namespaces**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 30. Operation descriptions

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **operation descriptions**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 31. Capability inventory generation

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **capability inventory generation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 32. Registry-driven capability selection

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **registry-driven capability selection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /GitHub/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"tool-registry", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
