# SPEC — ChatGPT Web Java orchestration engineering plugin

Status: FROZEN · Authority: conversation execution directive · Date: 2026-10-27

## Problem Statement

A single reusable ChatGPT plugin is required to teach, discover, compose, execute, and validate the actual built-in JavaScript/V8 cross-tool orchestration interface with demonstrable acceptance evidence, rather than isolated illustrative snippets.

## Solution

One portable installable plugin with exactly 24 domain-specific skills organized into seven domains; 158 named technical sections; 60–100 executable examples; shared references; operational runbooks; concrete acceptance tests; deterministic GitHub Actions checks; packaging and installation via Plugin Creator. GitHub repository is the authoritative development history.

## User stories

1. As an operator, I can select a relevant specialized skill from one plugin entry point.
2. As an engineer, I can identify supported JavaScript runtime semantics from source and live observations.
3. As a developer, I can inspect the live `ALL_TOOLS` catalog and execute described `tools` operations.
4. As an operator, I can orchestrate multiple authorized tools concurrently and sequentially.
5. As an engineer, I can execute conditional state machines and dependency DAGs deterministically.
6. As a tester, I can execute runnable examples and discriminate synthetic simulations from live service tests.
7. As an analyst, I can reduce tool results to compact, provenance-bearing evidence.
8. As a maintainer, I can run formatting, lint, typecheck, boundary checks, test, and archive validation.
9. As an operator, I can inspect intentionally failing test fixtures that demonstrate gate enforcement.
10. As an installer, I can download the ZIP and inspect the installed plugin against its source.

## Implementation decisions

- Portable Agent Plugins manifest (schema https://agent-plugins.org/schemas/1.0.0/plugin.schema.json) at root; skills at `skills/<slug>/SKILL.md`. No unnecessary MCP server bundled.
- Use a singular entry routing document, distributed specialized skills, and progressive disclosed references.
- Seven domains: Runtime Fundamentals (4); Tool Interface & Discovery (3); Orchestration & Execution (5); Data & Context Engineering (3); Advanced Engineering (4); Agentic Systems (3); Operational Runbooks (2).
- Exact section inventory remains 158 numbered entries from the approved architecture, stored in machine-readable catalog.
- Each skill includes triggers, lifecycle, technical facts with evidence markers, use cases, runnable examples and acceptance references.
- 60–100 independent Node-executable JavaScript example scripts; runtime-specific `tools` calls use explicit injected mocks for deterministic tests, and live connector operations are documented as separate recipes.
- TypeScript deep modules expose public entry points and guard against private-import access.
- All pass claims require recorded command and result; remote GitHub Actions and installed-plugin inspection require their own observations.
- GitHub Issues track dependency-linked vertical slices; `CONTEXT.md` contains glossary only; design choices recorded in ADRs.

## Testing decisions

- Test public interfaces: inventory inspection, examples execution, workflow planning/dispatch, evidence normalization, package content validation.
- Red-green checks first; mutated fail fixture must fail; restored fixture must pass.
- Run `npm run check` for formatting, lint, typecheck, module boundaries, tests, and plugin validation.
- GitHub Actions CI mirrors the same commands; inspect completed run and jobs.
- Validate ZIP before installation and compare installed skill paths and hashes if exposed.

## Frozen acceptance contract

- Exactly one installable plugin; exactly 24 specialized skills; seven domains; exactly 158 named sections.
- 60–100 executable examples, comprehensive references, runbooks, individual acceptance tests.
- GitHub source committed; Actions passed; downloadable ZIP exists; Creator installed; installed contents inspected.
- The user owns all scope changes. Do not downgrade requirements or treat anticipated outcomes as observed.

## Out of scope

Rebuilding unrelated services; incorporating additional application backends as architectural dependencies.

## Further notes

Source of truth for assertions: installed skill instructions, documented OpenAI packaging, observed registry interfaces, instrumented tests. Repository: https://github.com/Samwise-x/chatgpt-web-java.
