# Complete Execution Patterns — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

### 151. Single-tool execution

**Mechanism:** Select and invoke one registered operation with authorized parameters, then normalize and output its source receipt.

**Negative condition:** A mock-only example does not prove a remote read.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 152. Parallel evidence collection

**Mechanism:** Dispatch independent provider reads with Promise.allSettled and correlate every result by original request ID.

**Negative condition:** A failed read cannot erase successful sibling evidence.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 153. Conditional cross-tool execution

**Mechanism:** Choose write or no-op based on observed state and explicit policy, invoking authorized tools only when predicates pass.

**Negative condition:** Unknown input values must not route to the write branch.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 154. Dependency-aware workflow

**Mechanism:** Build a small DAG of repository fetch, verification and reporting nodes; validate edges and await all ready-frontier outcomes.

**Negative condition:** A report node cannot run before verification passes.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 155. Cross-service reconciliation

**Mechanism:** Join cross-service current and desired state, calculate create/update/unchanged sets with semantic equality and target authorization.

**Negative condition:** Property key order alone cannot trigger an update.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 156. Automated verification loop

**Mechanism:** Execute bounded inspect–repair–verify cycles and retain failed attempts; stop on every frozen acceptance check.

**Negative condition:** A successful write receipt without a postcondition is not success.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 157. Evidence-producing execution pipeline

**Mechanism:** Emit an evidence bundle with provider, operation, correlation ID, source, timestamp, actual response and acceptance result.

**Negative condition:** A plain narrative without source identifiers is not sufficient.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 158. Comprehensive orchestration example

**Mechanism:** Compose discovery, concurrent source reads, deterministic graph scheduling, policy checks, postcondition reads, evidence reduction and final completion gating.

**Negative condition:** Skipping any mandatory phase must fail the complete runbook.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Evidence format
Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
