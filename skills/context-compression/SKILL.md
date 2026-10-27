---
name: context-compression
description: Reduce tool output before emitting it into model context. Use for context compression through execution and its named procedures.
---

# Context Compression Through Execution

**Domain:** data-context · **Sections:** 86–92.

## Use this skill
Reduce tool output before emitting it into model context. Load only the selected skill and its co-located reference when composing workflows.

## Execution procedure
1. Inspect current tool names and exact invocation contracts from `ALL_TOOLS`.
2. Validate the requested target, account link, input and acceptance predicates before effects.
3. Execute this skill's host program from [references/host-recipe.js](./references/host-recipe.js), awaiting every essential operation.
4. Evaluate both positive and negative criteria below, then emit a source-bearing result with `text()`.

## Section-specific operating rules

### 86. Tool-result reduction

**Mechanism:** Reduce large provider results to decisive fields but retain correlation ID, status, operation and source reference.

**Negative condition:** Output shrinking must never discard evidence of a failed call.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 87. Pre-inference data processing

**Mechanism:** Complete deterministic source selection and retrieval before model interpretation when the orchestration plan requires pre-inference evidence.

**Negative condition:** A missing source must remain an explicit partial result.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 88. Large response normalization

**Mechanism:** Normalize oversized responses by retaining a bounded excerpt and file-level provenance, avoiding silent truncation of acceptance-critical fields.

**Negative condition:** A truncated error that appears successful corrupts diagnostics.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 89. Source evidence extraction

**Mechanism:** Extract evidence spans with repository path, line or object identifier, retrieval query and original provider URL.

**Negative condition:** A paraphrased source without an address is not traceable.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 90. Selective context emission

**Mechanism:** Emit only findings relevant to the specified acceptance predicate and keep the ledger of excluded failures available.

**Negative condition:** Selective context must not imply excluded items passed.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 91. Context-efficient orchestration

**Mechanism:** Compare tokens or byte volume before and after reduction while verifying that all required status and source fields survive.

**Negative condition:** A smaller output with corrupted joins is not an optimization.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 92. Compact structured reporting

**Mechanism:** Produce a compact structured summary containing counts, pass/fail, source IDs and decisive diagnostics.

**Negative condition:** An unstructured vague paragraph cannot substitute for machine-readable output.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Detailed reference
Read [references/details.md](./references/details.md) for directly loadable input schemas, examples and failure criteria.

## Acceptance
- Every numbered section has its own operating rule and independent negative case.
- The skill-specific host recipe must execute under injected tool mocks; live connector outcomes require separate source observations.
