// registry-inventory — variant 2; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry=Array.from({length:4},(_,i)=>({name:"tool_"+i,description:"operation "+i}));assert.equal(registry.filter(x=>x.name.startsWith("tool_")).length,4);
console.log(JSON.stringify({example:"registry-inventory/2",status:"pass"}));
