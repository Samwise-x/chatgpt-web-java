# Tool Registry Architecture — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 27. ALL_TOOLS structure

**Mechanism:** Treat ALL_TOOLS entries as metadata containing exact name and descriptive invocation contract, not as the callable function.

**Negative condition:** A registry descriptor cannot be invoked without resolving tools[name].

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 28. Tool discovery and enumeration

**Mechanism:** Filter currently available names by exact namespace or requested capability, preserving an empty result as a supported routing outcome.

**Negative condition:** A fabricated operation name must never become an executable plan.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 29. Tool namespaces

**Mechanism:** Preserve full tool names such as mcp__GitHub__get_repo and group only on declared delimiters.

**Negative condition:** Splitting a provider name on single underscores can corrupt operation identity.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 30. Operation descriptions

**Mechanism:** Read the full advertised contract before constructing arguments, including scope, required selectors and write effects.

**Negative condition:** A truncated help string does not establish valid parameters.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 31. Capability inventory generation

**Mechanism:** Build a transient inventory indexed by unique exact operation names, recording namespace and contract text for selection.

**Negative condition:** Duplicate names or missing descriptions must be surfaced.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 32. Registry-driven capability selection

**Mechanism:** Filter eligible tool candidates by user objective and authorization policy, never by existence alone.

**Negative condition:** A delete operation cannot satisfy an inspection-only objective.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook

Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
