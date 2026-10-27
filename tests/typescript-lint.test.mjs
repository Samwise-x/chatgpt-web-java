import test from "node:test";
import assert from "node:assert/strict";
import { writeFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

test("TypeScript ESLint gate rejects a deliberate constant conditional",()=>{
 const fixture=resolve("src/packages/orchestration/lib/audit-lint-mutation.ts");
 const lint=()=>spawnSync(resolve("node_modules/.bin/eslint"),[fixture],{encoding:"utf8"});
 try{
   writeFileSync(fixture,"export const testLint = (): number => { if(true) return 1; return 0; };\n");
   const result=lint();
   assert.notEqual(result.status,0,"TypeScript lint mutation must fail");
   assert.match(result.stdout+result.stderr,/no-constant-condition/);
 }finally{
   rmSync(fixture,{force:true});
 }
});
