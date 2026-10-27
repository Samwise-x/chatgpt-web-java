# ADR-0001: One portable plugin; 24 discoverable skills

Status: Accepted · 2026-10-27

## Context
24 independent capabilities require a common distribution identity without a monolithic instruction dump. Portable Agent Plugins provide root `plugin.json` with a `skills/` directory.

## Decision
Ship one portable plugin with 24 top-level skill directories and progressive disclosed shared references. The seven domains are metadata, not nested skill-root folders.

## Consequences
The host discovers skills consistently; section catalog verifies the fixed scope; one ZIP can be installed by Plugin Creator.

## Sources
https://developers.openai.com/plugins/build/plugins
