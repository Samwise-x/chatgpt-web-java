# Tool Invocation Engineering — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 38. The tools execution interface

**Mechanism:** Execute host operations through await tools[exactName](args); preserve returned object and error context.

**Negative condition:** A direct arbitrary HTTP request is not equivalent to the registered tools interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 39. Typed operation invocation

**Mechanism:** Use the documented callable contract to pass a typed argument object including required connection selectors.

**Negative condition:** An operation receipt cannot validate a malformed request shape.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 40. Argument preparation and validation

**Mechanism:** Freeze validated target identifiers before invoking a mutating call and reject ambiguous repository or organization choices.

**Negative condition:** A write must not choose a different target from a similarly named repository.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 41. Returned result structures

**Mechanism:** Inspect actual provider-specific response envelopes including result, content and structuredContent before extracting values.

**Negative condition:** Blind response.data assumptions can discard real results.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 42. Tool result normalization

**Mechanism:** Map each response to status, value, source and operation ID while preserving original envelope for diagnostics.

**Negative condition:** A provider error body must not be normalized as successful data.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 43. Authentication and authorization contracts

**Mechanism:** Bind account authorization to the selected connection, confirm permission for requested effect and avoid exposing tokens in evidence.

**Negative condition:** The registry's capacity is not approval for arbitrary resource mutation.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook

Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
