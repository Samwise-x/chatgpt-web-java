# Evidence schemas

## Observation

```json
{
  "id": "obs-001",
  "provider": "github",
  "operation": "get_repo",
  "source": "github://owner/repo",
  "status": "fulfilled",
  "observedAt": "2026-10-27T00:00:00Z",
  "value": { "default_branch": "main" }
}
```

`observedAt` describes when the execution made the observation, not when a remote repository changed. Preserve the original source URI, operation identifier, input correlation ID, and result type. Mark synthetic fixtures explicitly; they are not live provider observations.

## Provenance chain

Request → tool identity and arguments → provider receipt → postcondition observation → acceptance assertion. A proof of invocation is not a proof of remote effect; the final state must be re-read if claimed.

## Context reduction

Preserve decisive fields and provenance while dropping repetitive payload fields. Verify a reducer preserves operation identity, rejection status, and required source references before treating it as a valid evidence bundle.
