# JavaScript Programming Primitives — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 9. Objects, arrays, maps, and sets

**Mechanism:** Use Map for source-ID joins, Set for duplicate elimination and arrays for ordered parallel results; validate key uniqueness.

**Negative condition:** Two observations sharing the same key must not silently replace each other.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 10. Functions and closures

**Mechanism:** Capture task IDs and parameter snapshots inside closures, not a mutable loop variable referenced after an await.

**Negative condition:** An async callback returning the next iteration's ID fails correlation.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 11. Iteration, loops, and recursion

**Mechanism:** Implement a monotonic cursor loop for worker queues and cycle checks for recursive graph traversal.

**Negative condition:** A repeated cursor and cyclic edge must terminate with an error.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 12. Promises and asynchronous functions

**Mechanism:** Use Promise.all when all peers are required and fail-fast semantics are acceptable; use allSettled for comprehensive outcomes.

**Negative condition:** One rejected peer must not erase successful siblings when partial receipts matter.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 13. Error handling and exception propagation

**Mechanism:** Handle exceptions with operation identifiers, local-versus-remote attribution and deterministic rejection statuses.

**Negative condition:** Catching an exception then emitting an accepted status is invalid.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 14. JSON serialization and deserialization

**Mechanism:** Normalize JSON-compatible outputs before serialization, rejecting unsupported cyclic structures and providing explicit conversions.

**Negative condition:** JSON.stringify on a self-referential object must not be assumed safe.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook

Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
