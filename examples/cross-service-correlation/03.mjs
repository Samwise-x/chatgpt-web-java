// cross-service-correlation — variant 3; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { settleById } from "../../dist/orchestration/index.js";
const result = await settleById([
  { id: "github", run: async () => ({ sha: "commit-3" }) },
  { id: "neon", run: async () => ({ project: "p-3" }) },
]);
const joined = Object.fromEntries(result.map((x) => [x.id, x.value]));
assert.equal(joined.github.sha, "commit-3");
assert.equal(joined.neon.project, "p-3");
console.log(
  JSON.stringify({ example: "cross-service-correlation/3", status: "pass" })
);
