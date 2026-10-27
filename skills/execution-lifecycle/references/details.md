# Execution Lifecycle & State — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 15. Invocation initialization

**Mechanism:** Allocate request IDs and validate the target connection before scheduling side effects.

**Negative condition:** A missing target or ambiguous account must reject before dispatch.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 16. Temporary execution state

**Mechanism:** Keep queues, caches and graph maps temporary; persist checkpoints using an externally controlled record if required.

**Negative condition:** A restarted invocation cannot implicitly resume an in-memory work queue.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 17. Promise resolution and completion

**Mechanism:** Await all essential operations and use settled-outcome aggregation where independent writes might already have occurred.

**Negative condition:** The call must not claim all peers completed on first rejection.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 18. Persistent versus ephemeral operations

**Mechanism:** Associate durable acceptance with an external postcondition read, not with a transient JavaScript variable or write receipt.

**Negative condition:** A GitHub file-create receipt alone is not proof of content at head.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 19. Execution result emission

**Mechanism:** Emit a compact normalized record with IDs, provider status, source and verification outcome using text().

**Negative condition:** Calculating results without output emission does not satisfy an observable workflow.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 20. State transfer between invocations

**Mechanism:** Carry state between runs via explicit versioned provider records and reconcile competing revisions before updates.

**Negative condition:** An obsolete checkpoint must not overwrite a newer revision.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook

Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
