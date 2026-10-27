---
name: cross-tool-orchestration
description: Fan out to different tools and join results into a typed evidence bundle. Use for cross-tool orchestration and its named procedures.
---

# Cross-Tool Orchestration

**Domain:** orchestration · **Sections:** 44–50.

## Use this skill
Fan out to different tools and join results into a typed evidence bundle. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure
1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 44. Single-program multi-tool execution

**Mechanism:** Coordinate several authorized tool calls in one JavaScript execution, combining their receipts into one correlated report.

**Negative condition:** The model must not invent intermediate results that the program did not observe.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 45. Service-independent orchestration

**Mechanism:** Pass injectable operation functions behind a shared result representation to avoid provider-specific logic in scheduling decisions.

**Negative condition:** A provider's private response key must not be hard-coded into the policy predicate.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 46. Cross-tool data dependencies

**Mechanism:** Await upstream resource discovery before passing its returned ID into a dependent operation, retaining the original observation reference.

**Negative condition:** A dependent call launched with a guessed ID is invalid.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 47. Coordinating heterogeneous response formats

**Mechanism:** Normalize heterogeneous provider envelopes before joining records by explicit source and correlation IDs.

**Negative condition:** A source with no stable identifier cannot be silently merged.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 48. Fan-out / fan-in patterns

**Mechanism:** Launch independent queries together, await all settled results and aggregate by request ID rather than response completion order.

**Negative condition:** One failed service must not erase successful peer observations.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 49. Tool chaining

**Mechanism:** Compose dependent tool operations with explicit input-output contracts and verification for every non-idempotent stage.

**Negative condition:** A chain may not silently substitute an invented intermediate resource.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 50. Cross-service result aggregation

**Mechanism:** Join normalized GitHub, database and deployment records only on declared unique keys, reporting unmatched entries as partial.

**Negative condition:** Duplicate correlation keys cannot overwrite each other.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference
Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance
- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
