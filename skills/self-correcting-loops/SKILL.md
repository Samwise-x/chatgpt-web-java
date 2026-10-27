---
name: self-correcting-loops
description: Iterate from observations to corrective operations until checks pass. Use when requests involve self-correcting execution loops or composition requiring it.
---

# Self-Correcting Execution Loops

**Domain:** agentic-systems; **Section identifiers:** 137–142.

## Scope and routing
Iterate from observations to corrective operations until checks pass. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure
1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
3. Execute this skill's specific host recipe from [references/host-recipe.js](./references/host-recipe.js).
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

### 137. Observe–evaluate–act–verify cycles

**Mechanism:** Implement observe–evaluate–act–verify as four distinct recorded stages, with every action contingent on prior observed evidence.

**Negative condition:** A repair followed by no verification cannot be considered accepted.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 138. Acceptance-driven iteration

**Mechanism:** Compare iterative outcomes against fixed criteria and stop only when every required check is satisfied.

**Negative condition:** A loop must not change its own completion predicate mid-run.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 139. Diagnostic feedback processing

**Mechanism:** Parse diagnostic records into specific failed gates and map them to targeted corrective operations.

**Negative condition:** Generic retry on every error creates non-convergent loops.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 140. Automated corrective actions

**Mechanism:** Choose authorized corrective writes from a bounded action table and store pre/post evidence per attempt.

**Negative condition:** A speculative fix must not run outside the approved operation set.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 141. Repeated acceptance testing

**Mechanism:** Run the same independent acceptance checks after each correction, preserving every failed attempt and the final result.

**Negative condition:** A later passing check cannot erase earlier failed history.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 142. Completion criteria

**Mechanism:** Require all frozen acceptance checks, no unresolved in-flight tasks and durable evidence before emitting completed status.

**Negative condition:** An empty check set or missing postcondition cannot satisfy stop criteria.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Detailed reference
[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance
Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
