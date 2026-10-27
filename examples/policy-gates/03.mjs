// policy-gates — variant 3; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { evaluateGate } from "../../dist/orchestration/index.js";
const result=evaluateGate({complete:true,quota:false,tests:true});assert.equal(result.passed,false);
console.log(JSON.stringify({example:"policy-gates/3",status:"pass"}));
