---
name: runtime-introspection
description: Inspect declared tool contracts before constructing requests. Use when requests involve runtime introspection, its subtopics, or compositions requiring it.
---

# Runtime Introspection

**Domain:** Tool Interface & Discovery · **Sections:** 33–37 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Inspect declared tool contracts before constructing requests. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Filter ALL_TOOLS by actual operation names → inspect complete argument descriptions → prepare authorized inputs → execute → normalize exactly the returned shape → report origin.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 33. Dynamic capability discovery

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **dynamic capability discovery**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 34. Tool metadata inspection

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **tool metadata inspection**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 35. Operation signature discovery

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **operation signature discovery**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 36. Argument and schema interpretation

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **argument and schema interpretation**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

### 37. Live capability catalog construction

**Operational rule.** Enumerate actual tool descriptions first, extract the operation contract, verify exact parameter names, and normalize that operation’s return shape only after inspection. An eligible tool is not an implicit authorization.

**Implementation and validation.** At runtime, enumerate `ALL_TOOLS` and use only tool names present in the registry. For **live capability catalog construction**, write down the input, expected observable output, and the exact acceptance predicate before a tool call. See `examples/` for deterministic, executable cases and `tests/` for positive and deliberately failing enforcement checks.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /GitHub/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "runtime-introspection",
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
