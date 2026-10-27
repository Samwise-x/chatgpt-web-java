---
name: execution-environment
description: Investigate V8 runtime semantics, isolate behavior, and invocation limits. Use when requests involve javascript execution environment, its subtopics, or compositions requiring it.
---

# JavaScript Execution Environment

**Domain:** Runtime Fundamentals · **Sections:** 1–8 · **Runtime:** ChatGPT isolated JavaScript orchestrator.

## Trigger and objective

Investigate V8 runtime semantics, isolate behavior, and invocation limits. Select this skill on an explicit request for this capability, or when another skill has a dependency on it. Read only relevant reference files; preserve the user's execution and acceptance contracts.

## Procedure

Identify the requested runtime property → inspect available globals and documented exclusions → exercise an isolated fixture → emit observed and documented facts separately.

## Runtime interface

- Tool discovery: `ALL_TOOLS.filter(x => x.name.includes("…"))`.
- Execution: `await tools[exactAdvertisedName](validatedArgs)`.
- Parallelism: `Promise.all` or `Promise.allSettled`; normalize by correlation ID.
- Reporting: `text(structuredResult)`; reserve `image()` for actual image content.
- Runtime-specific snippets run in the isolated V8 shell; Node examples are separately executable reference fixtures, not copied with imports into that shell.

## Technical reference

### 1. Runtime architecture and execution lifecycle

**Mechanics.** An invocation initializes a fresh isolated JavaScript environment, discovers connected interfaces, performs awaited operations and explicitly emits an output. A second invocation cannot access a variable created by the first.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 2. V8 execution environment

**Mechanics.** V8 evaluates JavaScript and standard language collections; connected service I/O is mediated through the exposed tools interface rather than unrestricted operating-system access.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 3. ECMAScript module semantics

**Mechanics.** The host evaluates ECMAScript module syntax with top-level declarations and await. Node-specific imports belong in the separate executable fixture environment.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 4. Top-level await

**Mechanics.** Await every required tool operation before returning. A dropped promise does not constitute a completed tool call or an accepted result.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 5. Execution isolation

**Mechanics.** Temporary maps and closures only survive while their invocation runs. A durable checkpoint must be stored and subsequently read from an explicitly authorized external system.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 6. Invocation boundaries

**Mechanics.** Validate target and authorization before the first side effect and finish with an evidence bundle that includes operation IDs, outcomes and postcondition observations.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 7. Available global interfaces

**Mechanics.** Inspect current `ALL_TOOLS` entries, use `tools[exactName]` for connected operations and `text(value)` for output. Unsupported interfaces must be treated as absent.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

### 8. Runtime capabilities and interface constraints

**Mechanics.** Use built-in Promise, Map, Set, Array and JSON operations; route filesystem and process work to the separate supported execution surface.

**Acceptance.** Execute a concrete instance, preserve its observed result, and verify a deliberately invalid counterpart rejects. Tests must assert behavior, not the presence of this heading.

## Skill-specific implementation reference

Read [runtime detail](./references/details.md) for independent host-runtime checks and failure demonstrations. The reference is co-located under this installed skill.

## Executable operational recipe

```js
const selected = ALL_TOOLS.filter((x) => /search|fetch|list/i.test(x.name));
const inventory = selected.map((x) => ({
  name: x.name,
  description: x.description.slice(0, 100),
}));
text({
  skill: "execution-environment",
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
