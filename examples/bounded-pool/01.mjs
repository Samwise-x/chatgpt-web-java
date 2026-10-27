// bounded-pool — variant 1; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { parallelMap } from "../../dist/orchestration/index.js";
const values=Array.from({length:4},(_,i)=>i+1);const output=await parallelMap(values,1,async item=>item*14);assert.equal(output.length,4);assert.equal(output[0],14);
console.log(JSON.stringify({example:"bounded-pool/1",status:"pass"}));
