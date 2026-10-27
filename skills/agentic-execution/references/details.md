# Agentic Execution Architecture — implementer's reference

This is a directly loadable installed skill resource. Execution takes place in the host JavaScript isolate, using only advertised `tools` interfaces and standard ECMAScript.

### 125. Model reasoning versus program execution

**Mechanism:** Let the model extract intent while a deterministic JavaScript procedure enforces control flow and evidence collection.

**Negative condition:** A model's prose claim cannot replace an observed tool result.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 126. Ephemeral execution substrates

**Mechanism:** Use fresh invocation-specific workers to run operations and record all durable state through external controlled storage.

**Negative condition:** Agent-local temporary memory must not become the source of truth.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 127. Deterministic execution delegation

**Mechanism:** Convert an approved objective into explicit scheduled nodes and policy predicates, delegating execution without transferring authority.

**Negative condition:** A generated execution graph cannot authorize itself to write.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 128. Tool-mediated agent actions

**Mechanism:** Invoke only registered tools with validated arguments and user-scoped eligibility, preserving every returned operation receipt.

**Negative condition:** Tool access outside the declared catalog is not an implied action path.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 129. External state ownership

**Mechanism:** Associate durable outcomes with versioned GitHub commits or database records rather than a temporary JavaScript isolate.

**Negative condition:** An in-memory success flag is not durable evidence.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 130. Agentic workflow composition

**Mechanism:** Compose specialized tool skills through a shared operation interface and explicit dependency graph, never hidden inter-agent state.

**Negative condition:** A downstream skill cannot assume another invocation's private variables.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Evidence format
Each claim must identify input, selected tool, source URL/ID, returned status, expected predicate and actual observed outcome. Successful provider writes require post-write reads; synthetic Node fixtures are labeled synthetic.
