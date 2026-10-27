---
name: execution-lifecycle
description: Track what survives one invocation and where external state belongs. Use for execution lifecycle & state and its named procedures.
---

# Execution Lifecycle & State

**Domain:** runtime · **Sections:** 15–20.

## Use this skill
Track what survives one invocation and where external state belongs. When another skill needs this behavior, load only this skill and its co-located references.

## Execution procedure
1. Enumerate relevant live operation names and inspect complete tool contracts in `ALL_TOOLS`.
2. Validate account selection, caller scope, input IDs and preconditions before tool invocation.
3. Follow the specific mechanism below and the executable host recipe in [references/host-recipe.js](./references/host-recipe.js).
4. Await all required results, evaluate the negative conditions and emit an evidence-backed result with `text()`.

## Section-specific operating rules

### 15. Invocation initialization

**Mechanism:** Allocate request IDs and validate the target connection before scheduling side effects.

**Negative condition:** A missing target or ambiguous account must reject before dispatch.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 16. Temporary execution state

**Mechanism:** Keep queues, caches and graph maps temporary; persist checkpoints using an externally controlled record if required.

**Negative condition:** A restarted invocation cannot implicitly resume an in-memory work queue.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 17. Promise resolution and completion

**Mechanism:** Await all essential operations and use settled-outcome aggregation where independent writes might already have occurred.

**Negative condition:** The call must not claim all peers completed on first rejection.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 18. Persistent versus ephemeral operations

**Mechanism:** Associate durable acceptance with an external postcondition read, not with a transient JavaScript variable or write receipt.

**Negative condition:** A GitHub file-create receipt alone is not proof of content at head.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 19. Execution result emission

**Mechanism:** Emit a compact normalized record with IDs, provider status, source and verification outcome using text().

**Negative condition:** Calculating results without output emission does not satisfy an observable workflow.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 20. State transfer between invocations

**Mechanism:** Carry state between runs via explicit versioned provider records and reconcile competing revisions before updates.

**Negative condition:** An obsolete checkpoint must not overwrite a newer revision.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Detailed reference
Read [references/details.md](./references/details.md) for this skill's input schema, section-by-section proof requirements, and host/tool integration contract.

## Acceptance
- Every numbered section has an individual mechanism and negative condition.
- Execute the specific host recipe with an injected connector adapter in CI; inspect the real contract for live runs.
- Record actual returned provider/source data when a live tool runs; synthetic mock outcomes remain labeled as fixtures.
