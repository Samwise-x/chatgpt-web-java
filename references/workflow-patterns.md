# Workflow patterns

## Inspect → evaluate → act → verify
1. Collect observations from eligible tools.
2. Normalize values to a stable schema.
3. Evaluate a policy predicate independent of the model.
4. Execute the selected authorized action.
5. Fetch the resource again and assert the postcondition.

## State machines
A transition table maps `(state,event)` to the next state; reject unknown transitions rather than silently continuing. The acceptance predicate must be explicit and executable.

## Execution DAGs
Each node has `id`, `needs`, and a callable `run`. Validate acyclicity and schedule ready nodes in parallel. Store results keyed by `id` and reject unknown dependencies. Detailed algorithms and runnable examples live in `src/packages/orchestration/` and `examples/`.

## Compensation
A multi-service workflow can emit compensating operation candidates only for writes that actually happened. Use an explicit approval/policy check for compensating writes. Preserve original observations and receipts.

