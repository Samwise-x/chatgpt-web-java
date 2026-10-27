// parallel-reads — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids=Array.from({length:6},(_,i)=>i);const result=await Promise.all(ids.map(async i=>i+42));assert.equal(result[0],42);assert.equal(result.length,6);
console.log(JSON.stringify({example:"parallel-reads/4",status:"pass"}));
