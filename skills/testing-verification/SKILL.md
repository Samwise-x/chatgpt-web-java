---
name: testing-verification
description: Check contracts at public seams using positive and negative fixtures. Use when requests involve automated testing & verification or composition requiring it.
---

# Automated Testing & Verification

**Domain:** advanced-engineering; **Section identifiers:** 107–112.

## Scope and routing

Check contracts at public seams using positive and negative fixtures. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure

1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
3. Execute this skill's specific host recipe from [references/host-recipe.js](./references/host-recipe.js).
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

### 107. Test orchestration

**Mechanism:** Run acceptance tests at the public interface after compiling the fixture, recording complete command, exit status and output.

**Negative condition:** A test whose module import failed cannot be treated as an application assertion.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 108. Deterministic assertions

**Mechanism:** Use independent literal expectations, not a duplicate implementation of the algorithm, and include false-case assertions.

**Negative condition:** Expecting add(a,b) to equal a+b by identical code is tautological.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 109. Multi-service acceptance tests

**Mechanism:** Test cross-service operations with injected adapters for deterministic CI and separately run authorized live integration checks.

**Negative condition:** A mock passing is not evidence of a provider write.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 110. Result comparison

**Mechanism:** Compare actual versus expected normalized data through semantic equality, with explicit handling for partial and rejected results.

**Negative condition:** JSON property insertion order must not create spurious differences.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 111. Regression evaluation

**Mechanism:** Carry regression fixtures that previously failed, require red-before-fix evidence and run again after each correction.

**Negative condition:** A regression that cannot fail when implementation is mutated is ineffective.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 112. End-to-end evidence collection

**Mechanism:** Record test artifacts, input versions, external receipts and postcondition observations in a release evidence manifest.

**Negative condition:** A count of passed tests without associated revision cannot certify a release.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Detailed reference

[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance

Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
