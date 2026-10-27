# Agent instructions

Read `SPEC.md` first; its acceptance contract is frozen. Read `CONTEXT.md` for canonical vocabulary (glossary only). Read `docs/adr/` for architectural decisions. Run `npm run check` before submitting code. GitHub Issues are vertical contracts; use `docs/agents/issue-tracker.md` for the tracker. Source skills live under `skills/` and the section catalog under `catalog/`. Never claim an external effect from a tool invocation receipt alone; inspect resulting state.

## Agent skills
### Issue tracker
GitHub Issues in `Samwise-x/chatgpt-web-java`. See `docs/agents/issue-tracker.md`.
### Triage labels
Canonical five roles; see `docs/agents/triage-labels.md`.
### Domain docs
Single-context root `CONTEXT.md`, ADRs under `docs/adr/`. See `docs/agents/domain.md`.

TypeScript public entry points and deep-module conventions: `src/packages/README.md`.
