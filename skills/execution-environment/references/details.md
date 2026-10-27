# JavaScript Execution Environment — directly loadable reference

The primary interface is the current ChatGPT host tool registry; `tools` is the execution surface. The example uses an explicitly authorized GitHub connection; obtain its link ID from the active registered contract.

### 1. Runtime architecture and execution lifecycle

**Mechanism:** Initialize a fresh execution controller, validate input and end with an explicit settled result; no interpreter state is carried into the next invocation.

**Negative condition:** Run two invocations and require an external checkpoint for continuity.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 2. V8 execution environment

**Mechanism:** Execute ECMAScript inside isolated V8; use host tool functions for remote effects rather than treating the isolate as a terminal.

**Negative condition:** A local filesystem operation attempted inside this isolate must not be described as supported.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 3. ECMAScript module semantics

**Mechanism:** Declare lexical bindings and asynchronous statements at module scope; keep Node package imports in the separate Node test harness.

**Negative condition:** A Node built-in import cannot be assumed available to a host snippet.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 4. Top-level await

**Mechanism:** Await remote tool promises directly at module scope, collecting actual resolved output before calling text().

**Negative condition:** Returning success before resolution fails the completion predicate.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 5. Execution isolation

**Mechanism:** Model state as invocation-local objects and maps; every new run starts a fresh environment.

**Negative condition:** A counter initialized in one execution cannot be used as durable progress in another.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 6. Invocation boundaries

**Mechanism:** Establish validation, dispatch, settlement and emission stages; track inputs and operation IDs within that bounded lifetime.

**Negative condition:** Undeclared pending operations invalidate the completion report.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 7. Available global interfaces

**Mechanism:** Use ALL_TOOLS for introspection, tools for registered actions, text for result emission and image for supported image content.

**Negative condition:** An absent helper cannot be substituted with browser APIs.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

### 8. Runtime capabilities and interface constraints

**Mechanism:** Use core JavaScript collections, regex, JSON, functions and Promises; delegate network or filesystem work through authorized tools.

**Negative condition:** Dynamic imports, arbitrary fetch and Node-specific globals are not part of this interface.

**Verification:** Execute an input that exercises this rule and a counterexample that must reject. Keep tool identity and source evidence in both outcomes.

## Runbook
Inspect registry → validate arguments → await exact operation → normalize observed response → evaluate section-specific assertion → emit output. Remote side effects must be verified with a fresh provider read.
