// bounded-pool — variant 2; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values = Array.from({ length: 5 }, (_, i) => i + 1);
const output = await parallelMap(values, 2, async (item) => item * 24);
assert.equal(output.length, 5);
assert.equal(output[0], 24);
console.log(JSON.stringify({ example: "bounded-pool/2", status: "pass" }));
