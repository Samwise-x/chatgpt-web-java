// parallel-reads — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const ids=Array.from({length:7},(_,i)=>i);const result=await Promise.all(ids.map(async i=>i+52));assert.equal(result[0],52);assert.equal(result.length,7);
console.log(JSON.stringify({example:"parallel-reads/5",status:"pass"}));
