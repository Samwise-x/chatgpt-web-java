# Agent Coordination & Governance — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

### 131. Capability inventories

**Mechanism:** Enumerate capability names and types from the current registry and classify eligibility separately from availability.

**Negative condition:** Newly discovered write tooling does not expand granted authority.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 132. Operation eligibility

**Mechanism:** Evaluate task-to-operation eligibility with user objective, target, scope, method and required gate predicates.

**Negative condition:** A read-only objective cannot select a destructive tool.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 133. Authorization-aware execution

**Mechanism:** Bind authorization to exact account, repository or database and selected operation before dispatch; avoid interpolating secrets into output.

**Negative condition:** A privileged connector installed globally is not permission to mutate all resources.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 134. Policy gates

**Mechanism:** Use a nonempty conjunction of boolean acceptance gates and block unknown or false predicates.

**Negative condition:** A truthy number or empty policy must not pass.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 135. Evidence-driven decisions

**Mechanism:** Derive decisions exclusively from provenance-bearing observations and literal policy, preserving rejected and partial evidence.

**Negative condition:** An unsupported inference cannot promote a capability.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 136. Controlled capability promotion

**Mechanism:** Require a separate explicit evidence/admission step before expanding a worker's allowed operations or authority.

**Negative condition:** Passing more tasks does not itself grant a new permission.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Evidence format

Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
