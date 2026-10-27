# ChatGPT Web Java

24 specialized skills | seven technical domains | 158 numbered technical sections | 72 runnable Node examples | one portable plugin.

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

`npm install`, then `npm run check`. Run `npm run test:negative` for the deliberately failing enforcement fixtures. Build the installable archive with `npm run package:plugin`; the archive excludes repo-only CI/tests while retaining all skills, references, and examples.

## Evidence levels

**DOCUMENTED:** host description or upstream documentation. **OBSERVED:** actual tool response or test output. **END-TO-END VERIFIED:** checked remote postcondition or installed package contents.

## Advanced field manual

Every specialized skill has an associated mechanics walkthrough, host-runtime recipe, and use case in [the advanced field manual](references/advanced-field-manual.md).
