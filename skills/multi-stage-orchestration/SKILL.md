---
name: multi-stage-orchestration
description: Build coherent inspect→evaluate→act→verify stages. Use for multi-stage orchestration and its named procedures.
---

# Multi-Stage Orchestration

**Domain:** orchestration · **Sections:** 72–78.

## Use this skill

Build coherent inspect→evaluate→act→verify stages. Load only the selected skill and its co-located reference when composing workflows.

## Execution procedure

1. Inspect current tool names and exact invocation contracts from `ALL_TOOLS`.
2. Validate the requested target, account link, input and acceptance predicates before effects.
3. Execute this skill's host program from [references/host-recipe.js](./references/host-recipe.js), awaiting every essential operation.
4. Evaluate both positive and negative criteria below, then emit a source-bearing result with `text()`.

## Section-specific operating rules

### 72. Multi-service evidence collection

**Mechanism:** Collect separate observations from every selected service with provider, operation, source and request correlation.

**Negative condition:** An unavailable provider must be represented as failure, not empty success.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 73. Normalization pipelines

**Mechanism:** Normalize provider results to a common schema with validated statuses before computing cross-source policy.

**Negative condition:** Different JSON field names cannot be treated as equivalent without mapping.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 74. Evaluation stages

**Mechanism:** Apply all policy predicates to one observed snapshot and prevent plan creation when required evidence is missing.

**Negative condition:** Partial evidence must not silently qualify a resource for promotion.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 75. Operation-plan construction

**Mechanism:** Represent the execution plan as actions with target, precondition, expected effect and verification method.

**Negative condition:** Do not report a planned step as an executed step.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 76. Execution phases

**Mechanism:** Execute independent approved operations in parallel but await settled results before advancing dependent phases.

**Negative condition:** The next phase must not start while predecessor writes remain unresolved.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 77. Post-execution verification

**Mechanism:** After any write, make an independent read to compare observed state against expected postcondition; retain both source references.

**Negative condition:** A write receipt is not itself a verified resulting state.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 78. Result consolidation

**Mechanism:** Consolidate all stage outcomes and partial failures into a complete provenance-bearing bundle with an executable final predicate.

**Negative condition:** A summary omitting rejected stages is not reproducible.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Detailed reference

Read [references/details.md](./references/details.md) for directly loadable input schemas, examples and failure criteria.

## Acceptance

- Every numbered section has its own operating rule and independent negative case.
- The skill-specific host recipe must execute under injected tool mocks; live connector outcomes require separate source observations.
