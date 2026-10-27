---
name: tool-invocation
description: Prepare authorized arguments, call tools, and normalize results. Use when requests involve tool invocation engineering, its subtopics, or compositions requiring it.
---

# Tool Invocation Engineering

**Domain:** Tool Interface & Discovery · **Sections:** 38–43 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective
Prepare authorized arguments, call tools, and normalize results. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure
Filter ALL_TOOLS by actual operation names → inspect complete argument descriptions → prepare authorized inputs → execute → normalize exactly the returned shape → report origin.

## Runtime interface
- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference
### 38. The tools execution interface

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **the tools execution interface**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 39. Typed operation invocation

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **typed operation invocation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 40. Argument preparation and validation

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **argument preparation and validation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 41. Returned result structures

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **returned result structures**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 42. Tool result normalization

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **tool result normalization**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 43. Authentication and authorization contracts

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **authentication and authorization contracts**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter(x => /GitHub/i.test(x.name));
const inventory = selected.map(x => ({ name:x.name,description:x.description.slice(0,100) }));
text({ skill:"tool-invocation", available:inventory.length, sample:inventory.slice(0,5) });
```

For functional orchestration rather than discovery, read [workflow patterns](../../references/workflow-patterns.md) in the plugin's root references directory, and execute one of the Node fixture examples under `examples/`.

## Acceptance
1. Verify applicable section IDs are present in `catalog/sections.json`.
2. Execute at least one matching Node example and its associated test.
3. Record the exact observed input, output, and acceptance assertion.
4. For live tools, inspect the actual tool schema and verify subsequent remote state when claiming a persistent change.

## Related skills
See the plugin index `README.md` to compose adjacent skills in this domain. Cross-domain dependencies use the shared reference files and catalog identifiers.
