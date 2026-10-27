// registry-inventory — variant 3; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry=Array.from({length:5},(_,i)=>({name:"tool_"+i,description:"operation "+i}));assert.equal(registry.filter(x=>x.name.startsWith("tool_")).length,5);
console.log(JSON.stringify({example:"registry-inventory/3",status:"pass"}));
