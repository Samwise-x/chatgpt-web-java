// bounded-pool — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values=Array.from({length:8},(_,i)=>i+1);const output=await parallelMap(values,4,async item=>item*54);assert.equal(output.length,8);assert.equal(output[0],54);
console.log(JSON.stringify({example:"bounded-pool/5",status:"pass"}));
