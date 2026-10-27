// bounded-pool — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values = Array.from({ length: 9 }, (_, i) => i + 1);
const output = await parallelMap(values, 4, async (item) => item * 64);
assert.equal(output.length, 9);
assert.equal(output[0], 64);
console.log(JSON.stringify({ example: "bounded-pool/6", status: "pass" }));
