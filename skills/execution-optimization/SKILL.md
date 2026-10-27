---
name: execution-optimization
description: Measure scheduling overhead and reduce redundant work. Use when requests involve execution optimization or composition requiring it.
---

# Execution Optimization

**Domain:** advanced-engineering; **Section identifiers:** 119–124.

## Scope and routing
Measure scheduling overhead and reduce redundant work. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure
1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
3. Execute this skill's specific host recipe from [references/host-recipe.js](./references/host-recipe.js).
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

### 119. Tool-call batching

**Mechanism:** Batch compatible reads where a provider interface explicitly supports it, preserving per-item identities and failures.

**Negative condition:** A made-up multi-call argument must not be passed to a single-item interface.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 120. Concurrency optimization

**Mechanism:** Measure throughput and maximum concurrent operations at fixed worker caps while holding workload and acceptance constant.

**Negative condition:** Improved wall time does not excuse missing results.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 121. Dependency-aware scheduling

**Mechanism:** Start graph nodes only when dependencies pass, parallelizing ready frontier nodes while bounding work as specified.

**Negative condition:** A dependent node cannot run when its predecessor rejected.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 122. Intermediate-result reduction

**Mechanism:** Remove redundant intermediate payloads before emitting results while preserving provenance, source and error statuses.

**Negative condition:** Reduced output must not hide rejected operations.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 123. Repeated-operation elimination

**Mechanism:** Deduplicate repeated identical reads within the invocation by canonical target and immutable revision identifier.

**Negative condition:** Reads of changing branches cannot be cached as if immutable without revision checks.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 124. Execution efficiency measurement

**Mechanism:** Record dispatch count, elapsed stage time when supported by tools, reduction ratio and accepted-outcome count.

**Negative condition:** A reported speedup without measured baseline and equivalent output is not evidence.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Detailed reference
[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance
Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
