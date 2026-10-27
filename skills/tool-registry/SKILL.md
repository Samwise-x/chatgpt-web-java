---
name: tool-registry
description: Enumerate and classify tools from live advertised metadata. Use for tool registry architecture and its named procedures.
---

# Tool Registry Architecture

**Domain:** tool-interface · **Sections:** 27–32.

## Use this skill

Enumerate and classify tools from live advertised metadata. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure

1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 27. ALL_TOOLS structure

**Mechanism:** Treat ALL_TOOLS entries as metadata containing exact name and descriptive invocation contract, not as the callable function.

**Negative condition:** A registry descriptor cannot be invoked without resolving tools[name].

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 28. Tool discovery and enumeration

**Mechanism:** Filter currently available names by exact namespace or requested capability, preserving an empty result as a supported routing outcome.

**Negative condition:** A fabricated operation name must never become an executable plan.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 29. Tool namespaces

**Mechanism:** Preserve full tool names such as mcp__GitHub__get_repo and group only on declared delimiters.

**Negative condition:** Splitting a provider name on single underscores can corrupt operation identity.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 30. Operation descriptions

**Mechanism:** Read the full advertised contract before constructing arguments, including scope, required selectors and write effects.

**Negative condition:** A truncated help string does not establish valid parameters.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 31. Capability inventory generation

**Mechanism:** Build a transient inventory indexed by unique exact operation names, recording namespace and contract text for selection.

**Negative condition:** Duplicate names or missing descriptions must be surfaced.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 32. Registry-driven capability selection

**Mechanism:** Filter eligible tool candidates by user objective and authorization policy, never by existence alone.

**Negative condition:** A delete operation cannot satisfy an inspection-only objective.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference

Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance

- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
