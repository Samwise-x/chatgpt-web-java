---
name: runtime-introspection
description: Inspect declared tool contracts before constructing requests. Use for runtime introspection and its named procedures.
---

# Runtime Introspection

**Domain:** tool-interface · **Sections:** 33–37.

## Use this skill
Inspect declared tool contracts before constructing requests. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure
1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 33. Dynamic capability discovery

**Mechanism:** Inspect the registry anew for each run instead of relying on historical operation counts or cached provider schemas.

**Negative condition:** A stale inventory must not be treated as an authoritative current interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 34. Tool metadata inspection

**Mechanism:** Preserve a selected operation's full description and compare it with actual runtime argument requirements.

**Negative condition:** A help excerpt that drops account selectors cannot justify a write.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 35. Operation signature discovery

**Mechanism:** Resolve the exact callable and verify the expected parameter keys using current advertised input contracts.

**Negative condition:** Guessing an account_id field when the interface requires link_id fails.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 36. Argument and schema interpretation

**Mechanism:** Validate types, mutually exclusive selector groups and target identity before executing the tool function.

**Negative condition:** Passing both repository_id and repository_full_name when exactly one is allowed must reject.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 37. Live capability catalog construction

**Mechanism:** Construct a namespace-indexed capability catalog from current registry entries and label it as observed-at-this-invocation.

**Negative condition:** Do not claim catalog continuity across V8 executions.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference
Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance
- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
