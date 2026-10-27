---
name: data-transformations
description: Normalize provider records into stable, comparable structures. Use for data transformation engine and its named procedures.
---

# Data Transformation Engine

**Domain:** data-context · **Sections:** 79–85.

## Use this skill

Normalize provider records into stable, comparable structures. Load only the selected skill and its co-located reference when composing workflows.

## Execution procedure

1. Inspect current tool names and exact invocation contracts from `ALL_TOOLS`.
2. Validate the requested target, account link, input and acceptance predicates before effects.
3. Execute this skill's host program from [references/host-recipe.js](./references/host-recipe.js), awaiting every essential operation.
4. Evaluate both positive and negative criteria below, then emit a source-bearing result with `text()`.

## Section-specific operating rules

### 79. Filtering and mapping

**Mechanism:** Apply typed filters and maps to preserve origin identifiers while selecting only records satisfying the requested predicate.

**Negative condition:** A filter must not erase rejected status records needed for acceptance.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 80. Reduction and aggregation

**Mechanism:** Aggregate numeric metrics using an explicit initial accumulator, units and known missing-value policy.

**Negative condition:** Summing string values without normalization must reject.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 81. Sorting and ranking

**Mechanism:** Sort by a stable comparator with documented tie-breaking, retaining original record IDs.

**Negative condition:** Equal scores must not randomly reorder acceptance results.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 82. Grouping and deduplication

**Mechanism:** Group by canonical source key and deduplicate only records representing the same event, not merely similar text.

**Negative condition:** Two events with equal payload but different IDs remain distinct.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 83. Cross-service joins

**Mechanism:** Join GitHub and provider observations on declared cross-service identifiers; flag unmatched rows and collisions.

**Negative condition:** A missing join key must not be treated as matching an arbitrary row.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 84. Regular-expression extraction

**Mechanism:** Use regular expressions for bounded lexical patterns and state that regex is not a semantic JavaScript parser.

**Negative condition:** A multiline or aliased declaration must not be silently treated as a complete AST result.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 85. Structured data validation

**Mechanism:** Validate required fields, value types and status enumeration before downstream operations.

**Negative condition:** An observation with a missing source cannot enter an accepted bundle.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Detailed reference

Read [references/details.md](./references/details.md) for directly loadable input schemas, examples and failure criteria.

## Acceptance

- Every numbered section has its own operating rule and independent negative case.
- The skill-specific host recipe must execute under injected tool mocks; live connector outcomes require separate source observations.
