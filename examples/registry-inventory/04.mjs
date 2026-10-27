// registry-inventory — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry=Array.from({length:6},(_,i)=>({name:"tool_"+i,description:"operation "+i}));assert.equal(registry.filter(x=>x.name.startsWith("tool_")).length,6);
console.log(JSON.stringify({example:"registry-inventory/4",status:"pass"}));
