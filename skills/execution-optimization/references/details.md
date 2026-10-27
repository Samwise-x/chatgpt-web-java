# Execution Optimization — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

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

## Evidence format

Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
