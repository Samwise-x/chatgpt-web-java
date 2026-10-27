// cross-service-correlation — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { settleById } from "../../dist/orchestration/index.js";
const result = await settleById([
  { id: "github", run: async () => ({ sha: "commit-5" }) },
  { id: "neon", run: async () => ({ project: "p-5" }) },
]);
const joined = Object.fromEntries(result.map((x) => [x.id, x.value]));
assert.equal(joined.github.sha, "commit-5");
assert.equal(joined.neon.project, "p-5");
console.log(
  JSON.stringify({ example: "cross-service-correlation/5", status: "pass" })
);
