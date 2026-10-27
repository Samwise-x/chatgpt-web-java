// bounded-pool — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values = Array.from({ length: 7 }, (_, i) => i + 1);
const output = await parallelMap(values, 4, async (item) => item * 44);
assert.equal(output.length, 7);
assert.equal(output[0], 44);
console.log(JSON.stringify({ example: "bounded-pool/4", status: "pass" }));
