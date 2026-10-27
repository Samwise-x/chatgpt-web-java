---
name: conditional-workflows
description: Drive tool calls by evidence-based conditions and gates. Use for conditional workflows and its named procedures.
---

# Conditional Workflows

**Domain:** orchestration · **Sections:** 58–64.

## Use this skill

Drive tool calls by evidence-based conditions and gates. Load only the selected skill and its co-located reference when composing workflows.

## Execution procedure

1. Inspect current tool names and exact invocation contracts from `ALL_TOOLS`.
2. Validate the requested target, account link, input and acceptance predicates before effects.
4. Evaluate both positive and negative criteria below, then emit a source-bearing result with `text()`.

## Section-specific operating rules

### 58. Conditional branching

**Mechanism:** Branch on explicit observed fields and include a path for rejected or missing values.

**Negative condition:** Undefined must not imply consent to mutate state.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 59. Decision trees

**Mechanism:** Use an exhaustive state-to-action decision table whose default rejects unknown states.

**Negative condition:** Unexpected provider statuses must not trigger a successful branch.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 60. State-dependent tool invocation

**Mechanism:** A conditional write must check current state and permission predicate, then re-read the resulting resource.

**Negative condition:** A stale precondition cannot justify an unconditional write.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 61. Policy-driven operation selection

**Mechanism:** Evaluate a pure eligibility predicate over authorized scope and normalized observations before selecting an operation.

**Negative condition:** Available tooling alone is not permission.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 62. Conditional remediation

**Mechanism:** Select the smallest corrective action based on actual failed postconditions, retaining the original failure evidence.

**Negative condition:** A proposed correction is not proof it executed successfully.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 63. Explicit acceptance predicates

**Mechanism:** Evaluate a nonempty set of boolean acceptance predicates; reject untyped truthy values and every explicit false.

**Negative condition:** An empty acceptance object is not success.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 64. Retry and recovery control flow

**Mechanism:** Classify retryable failures by provider semantics, bound attempt count and require idempotency for repeated writes.

**Negative condition:** A retry must not replay a non-idempotent operation blindly.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Detailed reference

Read [references/details.md](./references/details.md) for directly loadable input schemas, examples and failure criteria.

## Acceptance

- Every numbered section has its own operating rule and independent negative case.
