# Execution Graphs & Dependency Scheduling — capability-level operating reference

Scope is the isolated V8 JavaScript runtime coordinating registered tools. Host tool arguments are governed by current exposed descriptions; connected resource effects must be verified separately.

### 65. Directed acyclic graphs

**Mechanism:** Specify each DAG node with a unique ID, list of predecessor IDs and an executable function before constructing any frontier.

**Negative condition:** Duplicate node IDs must fail before execution.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 66. Dependency resolution

**Mechanism:** Validate all edges exist and traverse visiting/visited sets to detect cycles and self-dependencies.

**Negative condition:** A missing dependency or A→B→A cycle cannot launch jobs.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 67. Topological execution ordering

**Mechanism:** Select ready nodes only after all their predecessors fulfilled their contracts, recording scheduling order distinctly from completion order.

**Negative condition:** A child must not run before its dependencies settle.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 68. Concurrent independent graph nodes

**Mechanism:** Launch independent ready nodes concurrently and await the entire frontier so successful siblings are preserved on another failure.

**Negative condition:** Fail-fast Promise.all must not hide in-flight sibling effects.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 69. Multi-stage execution pipelines

**Mechanism:** Build an explicit progression through validation, observation, planning, dispatch and postcondition verification phases.

**Negative condition:** A pipeline skipping its verification phase cannot claim acceptance.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 70. Workflow state transitions

**Mechanism:** Record every workflow transition as origin state, event, destination state and source evidence ID.

**Negative condition:** Unknown transitions cannot advance a state machine.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

### 71. Graph execution reporting

**Mechanism:** Return success and failure results keyed by node ID, including completed siblings and structured rejected reasons.

**Negative condition:** One exception cannot erase already committed sibling outcomes.

**Verification:** Supply a positive example, then demonstrate the negative condition is rejected, preserving tool identity, request correlation and provenance.

## Execution evidence
Capture requested input and selected operation, allSettled status if applicable, observed source, correlation ID, negative-case assertion and acceptance outcome. Do not substitute a synthetic fixture for live service evidence.
