# Orchestration cookbook

## Pattern catalog

- Inventory: discover names with `ALL_TOOLS.filter`, select known contracts, emit grouped capabilities.
- Independent reads: `Promise.allSettled` and join by request ID.
- Sequential reads: await one lookup and pass the retrieved ID to the next tool invocation.
- Conditional write: compute a predicate, call a write only if authorized, then read to verify.
- Graph: validate edges before dispatch; use bounded fan-out.
- Evidence: normalize responses, retain origin, and reduce before `text()`.

## GitHub-led scenarios

Inspect repo and commit, inspect workflow runs and jobs, correlate issue contracts with code changes, compare branch changes to specification. Other named providers (Neon, Supabase, Render, Vercel) are treated as _tool examples selected from live registry_, not dependencies or assumed permissions. Prefer mock adapters for deterministic tests and explicitly opt into live adapters after inspecting the exposed schema.

## Runnable catalog

`node examples/<domain>/<name>.mjs` executes isolated Node 22 reference implementations using deterministic fixtures. They demonstrate semantics transferable to `functions.exec`; imports and filesystem operations within Node examples are not themselves supported in the isolated V8 orchestrator.
