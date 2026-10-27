# Concurrency patterns

## Fan-out / fan-in

`Promise.all(tasks.map(task=>task()))` launches independent tasks concurrently and rejects when one rejects. `Promise.allSettled()` records all fulfilled/rejected outcomes; map each index to its original task ID before aggregating. Tool execution itself is mediated by connected service policies.

## Bounded worker pool

Maintain a shared increasing index and N asynchronous worker loops, each awaiting one job before taking the next. This bounds in-flight tasks to N. Verify `maxActive<=N` in tests; use `finally` to decrement active counters.

## Dependency ordering

Only schedule nodes whose dependencies have completed successfully. A DAG checker must reject cycles, missing dependencies, and duplicate identifiers before any tool operations. Record completion order; parallel peers need not complete in submission order.

## Outcomes

Return `{id,status,value}` with explicit status. Treat rejections as failures for that node, not as successful receipts. Report partial outcomes and allow controlled retries with deterministic idempotency keys when the provider supports them.
