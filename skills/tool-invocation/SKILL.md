---
name: tool-invocation
description: Prepare authorized arguments, call tools, and normalize results. Use for tool invocation engineering and its named procedures.
---

# Tool Invocation Engineering

**Domain:** tool-interface · **Sections:** 38–43.

## Use this skill

Prepare authorized arguments, call tools, and normalize results. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure

1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 38. The tools execution interface

**Mechanism:** Execute host operations through await tools[exactName](args); preserve returned object and error context.

**Negative condition:** A direct arbitrary HTTP request is not equivalent to the registered tools interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 39. Typed operation invocation

**Mechanism:** Use the documented callable contract to pass a typed argument object including required connection selectors.

**Negative condition:** An operation receipt cannot validate a malformed request shape.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 40. Argument preparation and validation

**Mechanism:** Freeze validated target identifiers before invoking a mutating call and reject ambiguous repository or organization choices.

**Negative condition:** A write must not choose a different target from a similarly named repository.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 41. Returned result structures

**Mechanism:** Inspect actual provider-specific response envelopes including result, content and structuredContent before extracting values.

**Negative condition:** Blind response.data assumptions can discard real results.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 42. Tool result normalization

**Mechanism:** Map each response to status, value, source and operation ID while preserving original envelope for diagnostics.

**Negative condition:** A provider error body must not be normalized as successful data.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 43. Authentication and authorization contracts

**Mechanism:** Bind account authorization to the selected connection, confirm permission for requested effect and avoid exposing tokens in evidence.

**Negative condition:** The registry's capacity is not approval for arbitrary resource mutation.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference

Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance

- Every numbered section has an individual mechanism and negative condition.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
