import test from "node:test";
import assert from "node:assert/strict";
import { analyzeSource,createImportGraph } from "../dist/code-analysis/index.js";

test("TypeScript AST source evidence ignores comments and captures actual symbols",()=>{
 const doc='// export function fake() {}\nimport {x} from "./shared.js";\nexport function real(){run(x)}';
 const evidence=analyzeSource("index.ts",doc);
 assert.deepEqual(evidence.exports.map(x=>x.symbol),["real"]);
 assert.deepEqual(evidence.imports.map(x=>x.specifier),["./shared.js"]);
 assert.ok(evidence.calls.some(x=>x.target==="run"));
 assert.ok(!evidence.exports.some(x=>x.symbol==="fake"));
 assert.deepEqual(createImportGraph([evidence]),[{from:"index.ts",to:"./shared.js"}]);
});
