// parallel-reads — variant 3; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids=Array.from({length:5},(_,i)=>i);const result=await Promise.all(ids.map(async i=>i+32));assert.equal(result[0],32);assert.equal(result.length,5);
console.log(JSON.stringify({example:"parallel-reads/3",status:"pass"}));
