// parallel-reads — variant 2; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids=Array.from({length:4},(_,i)=>i);const result=await Promise.all(ids.map(async i=>i+22));assert.equal(result[0],22);assert.equal(result.length,4);
console.log(JSON.stringify({example:"parallel-reads/2",status:"pass"}));
