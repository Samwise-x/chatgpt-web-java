---
name: reliability-recovery
description: Preserve partial results and resume controlled operations without silent promotion. Use when requests involve reliability & execution recovery or composition requiring it.
---

# Reliability & Execution Recovery

**Domain:** advanced-engineering; **Section identifiers:** 113–118.

## Scope and routing

Preserve partial results and resume controlled operations without silent promotion. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure

1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

### 113. Exception management

**Mechanism:** Contain errors by operation and stage, preserving the failed input and successful sibling results.

**Negative condition:** An exception handler must not turn a failure into a silent success.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 114. Partial execution handling

**Mechanism:** Represent partial execution explicitly with fulfilled, rejected and pending nodes before deciding remediation.

**Negative condition:** One failed DAG node must not discard a successful sibling write.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 115. Retry strategies

**Mechanism:** Retry only provider-classified transient errors, with bounded attempts and preserved attempt history.

**Negative condition:** Repeated unauthorized or validation failures must not enter a retry storm.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 116. Idempotent operations

**Mechanism:** Use provider idempotency keys or read-before-write guards for retryable mutations and verify resulting uniqueness.

**Negative condition:** Blind replay of create operations risks duplicate resources.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 117. Execution checkpoints

**Mechanism:** Persist checkpoints externally with generation/revision identity, never relying on in-memory counters between invocations.

**Negative condition:** A stale checkpoint must not overwrite a newer committed state.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 118. Recovery evidence

**Mechanism:** Produce a recovery ledger with initial failure, attempted correction, external receipt and final postcondition.

**Negative condition:** A retry attempt without follow-up read cannot count as recovered.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Detailed reference

[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance

Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
