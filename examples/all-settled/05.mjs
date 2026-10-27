// all-settled — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { settleById } from "../../dist/orchestration/index.js";
const result=await settleById([{id:"github-5",run:async()=>53},{id:"neon-5",run:async()=>{throw Error("fixture failure");}}]);assert.equal(result[0].status,"fulfilled");assert.equal(result[1].status,"rejected");assert.equal(result[1].id,"neon-5");
console.log(JSON.stringify({example:"all-settled/5",status:"pass"}));
