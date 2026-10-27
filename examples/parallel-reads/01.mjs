// parallel-reads — variant 1; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids=Array.from({length:3},(_,i)=>i);const result=await Promise.all(ids.map(async i=>i+12));assert.equal(result[0],12);assert.equal(result.length,3);
console.log(JSON.stringify({example:"parallel-reads/1",status:"pass"}));
