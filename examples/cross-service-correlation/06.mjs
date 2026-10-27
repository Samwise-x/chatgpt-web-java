// cross-service-correlation — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { settleById } from "../../dist/orchestration/index.js";
const result=await settleById([{id:"github",run:async()=>({sha:"commit-6"})},{id:"neon",run:async()=>({project:"p-6"})}]);const joined=Object.fromEntries(result.map(x=>[x.id,x.value]));assert.equal(joined.github.sha,"commit-6");assert.equal(joined.neon.project,"p-6");
console.log(JSON.stringify({example:"cross-service-correlation/6",status:"pass"}));
