---
name: output-observability
description: Emit compact evidence and human-readable diagnostics. Use for runtime output & observability and its named procedures.
---

# Runtime Output & Observability

**Domain:** runtime · **Sections:** 21–26.

## Use this skill
Emit compact evidence and human-readable diagnostics. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure
1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 21. text() output

**Mechanism:** Use text(value) to output deterministic structured findings and error records, reducing duplicate content first.

**Negative condition:** A missing emission or a response without source identity fails observability.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 22. image() output

**Mechanism:** Use image(item) only when a supported image item has actually been retrieved or generated.

**Negative condition:** An ordinary URL string is not by itself a supported image block.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 23. Structured result formatting

**Mechanism:** Define output objects with stable id, operation, status, source and selected values for machine-readable consumers.

**Negative condition:** Missing correlation data makes downstream joins ambiguous.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 24. Execution diagnostics

**Mechanism:** Record error name, message, origin and failed operation while keeping successful sibling evidence visible.

**Negative condition:** An exception that disappears into a generic success cannot be audited.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 25. Output reduction and selection

**Mechanism:** Reduce returned tool data to fields needed for acceptance while preserving rejected results, sources and exact item IDs.

**Negative condition:** Dropping failures to meet an output budget corrupts the report.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 26. Execution trace representation

**Mechanism:** Represent trace entries with node IDs, declared dependencies and observed states, preserving source event order separately from presentation order.

**Negative condition:** A sorted display order must not be claimed as actual execution order.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference
Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance
- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
