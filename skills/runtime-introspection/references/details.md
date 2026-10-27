# Runtime Introspection — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 33. Dynamic capability discovery

**Mechanism:** Inspect the registry anew for each run instead of relying on historical operation counts or cached provider schemas.

**Negative condition:** A stale inventory must not be treated as an authoritative current interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 34. Tool metadata inspection

**Mechanism:** Preserve a selected operation's full description and compare it with actual runtime argument requirements.

**Negative condition:** A help excerpt that drops account selectors cannot justify a write.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 35. Operation signature discovery

**Mechanism:** Resolve the exact callable and verify the expected parameter keys using current advertised input contracts.

**Negative condition:** Guessing an account_id field when the interface requires link_id fails.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 36. Argument and schema interpretation

**Mechanism:** Validate types, mutually exclusive selector groups and target identity before executing the tool function.

**Negative condition:** Passing both repository_id and repository_full_name when exactly one is allowed must reject.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 37. Live capability catalog construction

**Mechanism:** Construct a namespace-indexed capability catalog from current registry entries and label it as observed-at-this-invocation.

**Negative condition:** Do not claim catalog continuity across V8 executions.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook

Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
