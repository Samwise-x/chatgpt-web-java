# Self-Correcting Execution Loops — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

### 137. Observe–evaluate–act–verify cycles

**Mechanism:** Implement observe–evaluate–act–verify as four distinct recorded stages, with every action contingent on prior observed evidence.

**Negative condition:** A repair followed by no verification cannot be considered accepted.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 138. Acceptance-driven iteration

**Mechanism:** Compare iterative outcomes against fixed criteria and stop only when every required check is satisfied.

**Negative condition:** A loop must not change its own completion predicate mid-run.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 139. Diagnostic feedback processing

**Mechanism:** Parse diagnostic records into specific failed gates and map them to targeted corrective operations.

**Negative condition:** Generic retry on every error creates non-convergent loops.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 140. Automated corrective actions

**Mechanism:** Choose authorized corrective writes from a bounded action table and store pre/post evidence per attempt.

**Negative condition:** A speculative fix must not run outside the approved operation set.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 141. Repeated acceptance testing

**Mechanism:** Run the same independent acceptance checks after each correction, preserving every failed attempt and the final result.

**Negative condition:** A later passing check cannot erase earlier failed history.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 142. Completion criteria

**Mechanism:** Require all frozen acceptance checks, no unresolved in-flight tasks and durable evidence before emitting completed status.

**Negative condition:** An empty check set or missing postcondition cannot satisfy stop criteria.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Evidence format
Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
