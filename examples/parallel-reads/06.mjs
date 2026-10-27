// parallel-reads — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids = Array.from({ length: 8 }, (_, i) => i);
const result = await Promise.all(ids.map(async (i) => i + 62));
assert.equal(result[0], 62);
assert.equal(result.length, 8);
console.log(JSON.stringify({ example: "parallel-reads/6", status: "pass" }));
