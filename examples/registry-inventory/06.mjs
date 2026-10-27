// registry-inventory — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry=Array.from({length:8},(_,i)=>({name:"tool_"+i,description:"operation "+i}));assert.equal(registry.filter(x=>x.name.startsWith("tool_")).length,8);
console.log(JSON.stringify({example:"registry-inventory/6",status:"pass"}));
