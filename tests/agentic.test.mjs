import test from "node:test";
import assert from "node:assert/strict";
import {admitCapability, correctionLoop} from "../dist/agentic/index.js";
test("authority gate cannot be expanded by discovered capacity",()=>{
 const candidate={name:"github.delete_file",kind:"write",target:"Samwise-x/chatgpt-web-java"};
 const policy={allowedOperations:["github.get_repo"],allowedTargets:["Samwise-x/chatgpt-web-java"],allowWrites:false};
 assert.deepEqual(admitCapability(candidate,policy),{eligible:false,reasons:["operation-not-allowed","write-not-authorized"]});
 assert.deepEqual(admitCapability({name:"github.get_repo",kind:"read",target:candidate.target},policy),{eligible:true,reasons:[]});
});
test("observe-correct-verify re-reads actual state after every correction",async()=>{
 let value=0;
 const trace=await correctionLoop(async()=>value,x=>x===2,async()=>{value++},3);
 assert.deepEqual(trace,{attempts:2,accepted:true,observations:[0,1,2]});
});
test("bounded correction stops with explicit failure evidence",async()=>{
 let n=0;
 const trace=await correctionLoop(async()=>n,()=>false,async()=>{n++},1);
 assert.deepEqual(trace,{attempts:1,accepted:false,observations:[0,1]});
 await assert.rejects(correctionLoop(async()=>0,()=>false,async()=>{},-1),/budget/);
});
