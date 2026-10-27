# Reliability & Execution Recovery — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

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

## Evidence format

Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
