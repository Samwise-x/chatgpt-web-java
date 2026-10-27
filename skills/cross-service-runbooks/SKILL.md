---
name: cross-service-runbooks
description: Compose live GitHub and other available service tools without treating them as permanent dependencies. Use when requests involve cross-service orchestration runbooks or composition requiring it.
---

# Cross-Service Orchestration Runbooks

**Domain:** runbooks; **Section identifiers:** 143–150.

## Scope and routing
Compose live GitHub and other available service tools without treating them as permanent dependencies. Select on a request about these mechanisms, not unrelated registry exploration. Read the detailed co-located reference if the acceptance conditions are in scope.

## Execution procedure
1. Discover exact available tool names and argument contracts using `ALL_TOOLS`.
2. Validate authorization and user target independently of capability presence.
3. Execute this skill's specific host recipe from [references/host-recipe.js](./references/host-recipe.js).
4. Normalize results with status, operation, source and correlation; verify persistent effects by independent read.
5. Apply all section-specific success and negative conditions before completion.

## Section-specific operating rules

### 143. GitHub repository inspection

**Mechanism:** Inspect a GitHub repository using the exact get_repo operation, the selected connection link and explicit repository_full_name.

**Negative condition:** Reading a similarly named repository must not pass target identity.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 144. GitHub Actions workflow evaluation

**Mechanism:** Query GitHub Actions run/jobs by recorded run ID, verify head SHA equals requested commit and compare conclusion against required checks.

**Negative condition:** A successful run for an older commit cannot certify the current branch.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 145. GitHub + documentation analysis

**Mechanism:** Retrieve source and docs at fixed commit or version, then compare named symbols and stated interfaces with quoted paths.

**Negative condition:** A web tutorial cannot override observed upstream implementation.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 146. GitHub + Neon reconciliation

**Mechanism:** Read GitHub revision and Neon project state through separately discovered interfaces and reconcile only documented shared identifiers.

**Negative condition:** A database project cannot be inferred from matching display names alone.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 147. GitHub + Supabase integration

**Mechanism:** Compare GitHub configuration with Supabase metadata through actual exposed read operations before scheduling any authorized migration.

**Negative condition:** Presence of a Supabase connector is not approval for schema changes.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 148. GitHub + Vercel deployment coordination

**Mechanism:** Inspect a GitHub commit and matching Vercel deployment, requiring exact deployed SHA and a successful postcondition check.

**Negative condition:** A healthy deployment on another commit is not acceptance.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 149. GitHub + Render deployment inspection

**Mechanism:** Inspect GitHub and Render resource metadata, compare target revisions and preserve deployment receipts before declaring alignment.

**Negative condition:** A successful trigger without refreshed deployment state is incomplete.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

### 150. Multi-provider infrastructure inventory

**Mechanism:** Discover all relevant live provider operations, inspect required selectors, execute independent inventory calls concurrently and merge sourced outcomes.

**Negative condition:** An unavailable provider must produce an explicit partial record.

**Acceptance case:** Run an actual instance of the operation and a deliberately failing counterexample, retaining exact operation identity, source and outcome for both.

## Detailed reference
[Read the skill-local details](./references/details.md) through the installed skill-resource reader.

## Acceptance
Run the matching per-skill fixture and its negative case; record result and preserve the fixed 158-section acceptance contract.
