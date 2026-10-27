---
name: agentic-execution
description: Separate model judgment from deterministic orchestration code. Use when requests involve agentic execution architecture or composition requiring it.
---

# Agentic Execution Architecture

**Domain:** agentic-systems; **Section identifiers:** 125–130.

## Scope and routing

Separate model judgment from deterministic orchestration code. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure

1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
3. Execute this skill's specific host recipe from [references/host-recipe.js](./references/host-recipe.js).
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

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

## Detailed reference

[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance

Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
