// bounded-pool — variant 3; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values = Array.from({ length: 6 }, (_, i) => i + 1);
const output = await parallelMap(values, 3, async (item) => item * 34);
assert.equal(output.length, 6);
assert.equal(output[0], 34);
console.log(JSON.stringify({ example: "bounded-pool/3", status: "pass" }));
