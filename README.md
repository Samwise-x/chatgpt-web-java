# ChatGPT Web Java


Source: https://github.com/Samwise-x/chatgpt-web-java

## Entry point

Install the root `plugin.json` package. Select skills by their frontmatter descriptions. Discover the actual host tool contracts through `ALL_TOOLS` and invoke them through `tools`. See `catalog/sections.json` for the indexed table of contents; the runtime and Node fixtures have different interfaces.

## Domains

- **Runtime Fundamentals** (4): execution-environment, programming-primitives, execution-lifecycle, output-observability
- **Tool Interface & Discovery** (3): tool-registry, runtime-introspection, tool-invocation
- **Orchestration & Execution** (5): cross-tool-orchestration, parallel-execution, conditional-workflows, execution-graphs, multi-stage-orchestration
- **Data & Context Engineering** (3): data-transformations, context-compression, evidence-provenance
- **Advanced Engineering** (4): code-analysis, testing-verification, reliability-recovery, execution-optimization
- **Agentic Systems** (3): agentic-execution, coordination-governance, self-correcting-loops
- **Operational Runbooks** (2): cross-service-runbooks, complete-execution-patterns

## Development


## Evidence levels

**DOCUMENTED:** host description or upstream documentation. **OBSERVED:** actual tool response or test output. **END-TO-END VERIFIED:** checked remote postcondition or installed package contents.

## Advanced field manual

Every specialized skill has an associated mechanics walkthrough, host-runtime recipe, and use case in [the advanced field manual](references/advanced-field-manual.md).

## Release integrity

The ZIP contains compiled `dist/`, Node examples, tests, and build/release scripts. CI extracts and smoke-tests the release, not just the source checkout.
