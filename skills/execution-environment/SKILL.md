---
name: execution-environment
description: Investigate V8 runtime semantics, isolate behavior, and invocation limits. Use for javascript execution environment and its named procedures.
---

# JavaScript Execution Environment

**Domain:** runtime · **Sections:** 1–8.

## Use this skill

Investigate V8 runtime semantics, isolate behavior, and invocation limits. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure

1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 1. Runtime architecture and execution lifecycle

**Mechanism:** Initialize a fresh execution controller, validate input and end with an explicit settled result; no interpreter state is carried into the next invocation.

**Negative condition:** Run two invocations and require an external checkpoint for continuity.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 2. V8 execution environment

**Mechanism:** Execute ECMAScript inside isolated V8; use host tool functions for remote effects rather than treating the isolate as a terminal.

**Negative condition:** A local filesystem operation attempted inside this isolate must not be described as supported.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 3. ECMAScript module semantics

**Mechanism:** Declare lexical bindings and asynchronous statements at module scope; keep Node package imports in the separate Node test harness.

**Negative condition:** A Node built-in import cannot be assumed available to a host snippet.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 4. Top-level await

**Mechanism:** Await remote tool promises directly at module scope, collecting actual resolved output before calling text().

**Negative condition:** Returning success before resolution fails the completion predicate.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 5. Execution isolation

**Mechanism:** Model state as invocation-local objects and maps; every new run starts a fresh environment.

**Negative condition:** A counter initialized in one execution cannot be used as durable progress in another.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 6. Invocation boundaries

**Mechanism:** Establish validation, dispatch, settlement and emission stages; track inputs and operation IDs within that bounded lifetime.

**Negative condition:** Undeclared pending operations invalidate the completion report.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 7. Available global interfaces

**Mechanism:** Use ALL_TOOLS for introspection, tools for registered actions, text for result emission and image for supported image content.

**Negative condition:** An absent helper cannot be substituted with browser APIs.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 8. Runtime capabilities and interface constraints

**Mechanism:** Use core JavaScript collections, regex, JSON, functions and Promises; delegate network or filesystem work through authorized tools.

**Negative condition:** Dynamic imports, arbitrary fetch and Node-specific globals are not part of this interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference

Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance

- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
