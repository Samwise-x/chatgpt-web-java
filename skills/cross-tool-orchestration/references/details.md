# Cross-Tool Orchestration — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 44. Single-program multi-tool execution

**Mechanism:** Coordinate several authorized tool calls in one JavaScript execution, combining their receipts into one correlated report.

**Negative condition:** The model must not invent intermediate results that the program did not observe.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 45. Service-independent orchestration

**Mechanism:** Pass injectable operation functions behind a shared result representation to avoid provider-specific logic in scheduling decisions.

**Negative condition:** A provider's private response key must not be hard-coded into the policy predicate.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 46. Cross-tool data dependencies

**Mechanism:** Await upstream resource discovery before passing its returned ID into a dependent operation, retaining the original observation reference.

**Negative condition:** A dependent call launched with a guessed ID is invalid.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 47. Coordinating heterogeneous response formats

**Mechanism:** Normalize heterogeneous provider envelopes before joining records by explicit source and correlation IDs.

**Negative condition:** A source with no stable identifier cannot be silently merged.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 48. Fan-out / fan-in patterns

**Mechanism:** Launch independent queries together, await all settled results and aggregate by request ID rather than response completion order.

**Negative condition:** One failed service must not erase successful peer observations.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 49. Tool chaining

**Mechanism:** Compose dependent tool operations with explicit input-output contracts and verification for every non-idempotent stage.

**Negative condition:** A chain may not silently substitute an invented intermediate resource.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 50. Cross-service result aggregation

**Mechanism:** Join normalized GitHub, database and deployment records only on declared unique keys, reporting unmatched entries as partial.

**Negative condition:** Duplicate correlation keys cannot overwrite each other.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook
Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
