# Multi-Stage Orchestration — capability-level operating reference

Scope is the isolated V8 JavaScript runtime coordinating registered tools. Host tool arguments are governed by current exposed descriptions; connected resource effects must be verified separately.

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

## Execution evidence
Capture requested input and selected operation, allSettled status if applicable, observed source, correlation ID, negative-case assertion and acceptance outcome. Do not substitute a synthetic fixture for live service evidence.
