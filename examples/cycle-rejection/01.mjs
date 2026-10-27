// cycle-rejection — variant 1; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { executeGraph } from "../../dist/orchestration/index.js";
await assert.rejects(
  executeGraph([
    { id: "a", needs: ["b"], run: async () => 1 },
    { id: "b", needs: ["a"], run: async () => 2 },
  ]),
  /cycle/
);
console.log(JSON.stringify({ example: "cycle-rejection/1", status: "pass" }));
