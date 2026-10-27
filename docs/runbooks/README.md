# Operational runbooks

Each example is a Node 22 execution of a deterministic reference algorithm. Run `npm run build && node examples/<pattern>/<nn>.mjs`. Runtime-specific operations use the host's `tools` interface, and their signatures must be inspected through `ALL_TOOLS` before execution. The 12 example families, six variants each, cover registry inventory, exact tool selection, Promise.all, Promise.allSettled, bounded pools, DAGs, cyclic-edge rejection, policy gates, provenance, context reduction, reconciliation, and cross-service correlation.

## Live GitHub inventory example

Inside the isolated ChatGPT JavaScript host:

```js
const entries = ALL_TOOLS.filter((x) => x.name.startsWith("mcp__GitHub__"));
text({ operations: entries.length, names: entries.map((x) => x.name) });
```

## GitHub + provider fan-out

Discover concrete fetch and read operations in GitHub, Neon and Render using `ALL_TOOLS`. Supply the authorized connection arguments from the exposed contracts; group independent calls under `Promise.allSettled`, and normalize results with their operation names and source URLs. Validate result identities before making decisions.

## Conditional check

Retrieve repo and deployment metadata in parallel; compare observed SHA and expected SHA; select the documented deployment tool only if the explicitly provided authorization gate approves a write. Re-query deployment status after the write; include both observations in the evidence bundle.
