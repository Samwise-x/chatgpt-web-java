// provenance — variant 1; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { normalizeObservation } from "../../dist/orchestration/index.js";
const obs = normalizeObservation({
  id: "obs-1",
  provider: "github",
  operation: "get_repo",
  source: "github://Samwise-x/chatgpt-web-java",
  status: "fulfilled",
  value: { count: 18 },
});
assert.equal(obs.value.count, 18);
assert.equal(obs.source.startsWith("github://"), true);
console.log(JSON.stringify({ example: "provenance/1", status: "pass" }));
