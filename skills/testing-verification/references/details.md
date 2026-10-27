# Automated Testing & Verification — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

### 107. Test orchestration

**Mechanism:** Run acceptance tests at the public interface after compiling the fixture, recording complete command, exit status and output.

**Negative condition:** A test whose module import failed cannot be treated as an application assertion.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 108. Deterministic assertions

**Mechanism:** Use independent literal expectations, not a duplicate implementation of the algorithm, and include false-case assertions.

**Negative condition:** Expecting add(a,b) to equal a+b by identical code is tautological.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 109. Multi-service acceptance tests

**Mechanism:** Test cross-service operations with injected adapters for deterministic CI and separately run authorized live integration checks.

**Negative condition:** A mock passing is not evidence of a provider write.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 110. Result comparison

**Mechanism:** Compare actual versus expected normalized data through semantic equality, with explicit handling for partial and rejected results.

**Negative condition:** JSON property insertion order must not create spurious differences.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 111. Regression evaluation

**Mechanism:** Carry regression fixtures that previously failed, require red-before-fix evidence and run again after each correction.

**Negative condition:** A regression that cannot fail when implementation is mutated is ineffective.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 112. End-to-end evidence collection

**Mechanism:** Record test artifacts, input versions, external receipts and postcondition observations in a release evidence manifest.

**Negative condition:** A count of passed tests without associated revision cannot certify a release.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Evidence format
Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
