# Tool interface reference

`ALL_TOOLS` is an array of descriptive records with `name` and `description`. Discover by exact prefix, full name, or a precise predicate; then inspect the complete tool contract in `description` before invoking.

```js
const matches = ALL_TOOLS.filter((x) => x.name.startsWith("mcp__GitHub__"));
text(matches.map((x) => ({ name: x.name, help: x.description.slice(0, 200) })));
```

Tool functions are invoked as `await tools[name](args)`. In this runtime, tool methods are provided by the host; do not assume a returned object has a uniform envelope. Normalize `result`, `content`, and `structuredContent` only after inspecting that specific response. Preserve operation names, authorization identity, source identifiers, and error reasons in audit records. The GitHub plugin provides 89 operations in the current authorized catalog; discover the actual available list on each invocation instead of embedding 89 fixed signatures. A tool may be listed but still require its own permissions or authorization.

Use one credential/connection selected according to the user's explicit target. Never discover or print access tokens. Record intended write path and observed post-write state independently.
