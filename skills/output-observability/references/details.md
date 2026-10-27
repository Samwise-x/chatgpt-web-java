# Runtime Output & Observability — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 21. text() output

**Mechanism:** Use text(value) to output deterministic structured findings and error records, reducing duplicate content first.

**Negative condition:** A missing emission or a response without source identity fails observability.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 22. image() output

**Mechanism:** Use image(item) only when a supported image item has actually been retrieved or generated.

**Negative condition:** An ordinary URL string is not by itself a supported image block.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 23. Structured result formatting

**Mechanism:** Define output objects with stable id, operation, status, source and selected values for machine-readable consumers.

**Negative condition:** Missing correlation data makes downstream joins ambiguous.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 24. Execution diagnostics

**Mechanism:** Record error name, message, origin and failed operation while keeping successful sibling evidence visible.

**Negative condition:** An exception that disappears into a generic success cannot be audited.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 25. Output reduction and selection

**Mechanism:** Reduce returned tool data to fields needed for acceptance while preserving rejected results, sources and exact item IDs.

**Negative condition:** Dropping failures to meet an output budget corrupts the report.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 26. Execution trace representation

**Mechanism:** Represent trace entries with node IDs, declared dependencies and observed states, preserving source event order separately from presentation order.

**Negative condition:** A sorted display order must not be claimed as actual execution order.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook
Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
