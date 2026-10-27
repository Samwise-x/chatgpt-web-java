---
name: parallel-execution
description: Control asynchronous concurrency and correlation of tool responses. Use for parallel execution & concurrency and its named procedures.
---

# Parallel Execution & Concurrency

**Domain:** orchestration · **Sections:** 51–57.

## Use this skill

Control asynchronous concurrency and correlation of tool responses. Load only the selected skill and its co-located reference when composing workflows.

## Execution procedure

1. Inspect current tool names and exact invocation contracts from `ALL_TOOLS`.
2. Validate the requested target, account link, input and acceptance predicates before effects.
3. Execute this skill's host program from [references/host-recipe.js](./references/host-recipe.js), awaiting every essential operation.
4. Evaluate both positive and negative criteria below, then emit a source-bearing result with `text()`.

## Section-specific operating rules

### 51. Promise.all()

**Mechanism:** Use Promise.all only where fail-fast control flow is intended, understanding that already started peers are not cancelled.

**Negative condition:** A rejection does not prove all siblings stopped.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 52. Promise.allSettled()

**Mechanism:** Use Promise.allSettled to retain fulfilled and rejected entries with their original input indices.

**Negative condition:** Completion order must not be confused with index ordering.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 53. Sequential versus concurrent execution

**Mechanism:** Compare sequential and concurrent strategies using the same workload and acceptance predicate before interpreting timing differences.

**Negative condition:** A faster path with missing results fails equivalence.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 54. Bounded concurrency

**Mechanism:** Limit concurrency to a positive integer number of active workers; record peak simultaneous jobs in tests.

**Negative condition:** Zero or negative concurrency must reject before dispatch.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 55. Worker-pool implementations

**Mechanism:** Assign work through a monotonic shared cursor and write results to stable indices, including error outcomes.

**Negative condition:** Concurrent workers must not consume an item twice.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 56. Batch processing

**Mechanism:** Partition workloads into bounded chunks, process every final partial batch and preserve failed IDs for explicit retry.

**Negative condition:** The last incomplete chunk must not be dropped.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 57. Parallel result correlation

**Mechanism:** Carry each operation ID alongside Promise settlement and reconcile all outcomes with the original request order.

**Negative condition:** A result without its request ID is untraceable.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Detailed reference

Read [references/details.md](./references/details.md) for directly loadable input schemas, examples and failure criteria.

## Acceptance

- Every numbered section has its own operating rule and independent negative case.
- The skill-specific host recipe must execute under injected tool mocks; live connector outcomes require separate source observations.
