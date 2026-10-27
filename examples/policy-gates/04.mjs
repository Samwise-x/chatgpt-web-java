// policy-gates — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { evaluateGate } from "../../dist/orchestration/index.js";
const result = evaluateGate({ complete: true, quota: true, tests: true });
assert.equal(result.passed, true);
console.log(JSON.stringify({ example: "policy-gates/4", status: "pass" }));
