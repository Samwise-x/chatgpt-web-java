# Runtime contract — observed and documented

## Direct interface
`functions.exec` runs ECMAScript module JavaScript in a fresh V8 isolate; top-level `await` is accepted. `tools` is the connected-operation registry; `ALL_TOOLS` lists available operations by name and description. Explicit `text(value)` and `image(value)` emit outputs. An isolate is discarded after execution. Calls to tools can persist externally, but JavaScript globals cannot persist to the next invocation.

## Language and environment
Support: asynchronous promises, native arrays/maps/sets, exception handling, regular expressions, JSON, destructuring, template strings, short-circuit operators. Environment excludes direct filesystem access, network requests, storage, timers, workers, dynamic imports, eval, Function and globalThis. No Node.js built-ins inside `functions.exec`; use the separate local execution environment for operating-system work.

## Invocation
Await every external operation before emitting a final success result. Respect concrete tool schemas; never interpolate invented operation identifiers. Only the currently authorized tool connection can perform its operations. A returned operation receipt is evidence of that operation, not of acceptance unless a follow-up verification checks the resulting state.

## Primary evidence
OpenAI's advertised execution interface in this ChatGPT session (runtime tool description, 2026-10-27); executable smoke tests in `tests/`. 
