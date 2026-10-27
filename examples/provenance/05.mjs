// provenance — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { normalizeObservation } from "../../dist/orchestration/index.js";
const obs = normalizeObservation({
  id: "obs-5",
  provider: "github",
  operation: "get_repo",
  source: "github://Samwise-x/chatgpt-web-java",
  status: "fulfilled",
  value: { count: 58 },
});
assert.equal(obs.value.count, 58);
assert.equal(obs.source.startsWith("github://"), true);
console.log(JSON.stringify({ example: "provenance/5", status: "pass" }));
