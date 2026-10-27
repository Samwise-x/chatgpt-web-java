# Domain glossary

- **Plugin** — one installable portable Agent Plugins package.
- **Skill** — independently triggered agent instruction module at `skills/<slug>/SKILL.md`.
- **Technical section** — uniquely indexed domain capability within exactly one skill.
- **Tool registry** — `ALL_TOOLS`, the host-provided array of available tool metadata.
- **Execution interface** — host-provided `tools` methods called inside an isolated JavaScript invocation.
- **Tool operation** — a concrete typed callable exposed by a connected provider.
- **Evidence** — provenance-bearing observation; a tool receipt is not a postcondition by itself.
- **Acceptance gate** — executable predicate evaluated against an observation.
- **Execution graph** — directed acyclic graph of dependent operations.
- **External state** — durable state owned by the invoked service, not by a JavaScript isolate.
- **Seam** — public interface at which an implementation is tested or replaced.
- **Deep module** — substantial behavior hidden behind a narrow interface.
