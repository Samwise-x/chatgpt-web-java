# ChatGPT JavaScript Orchestration — Advanced Field Manual

This manual supplies capability-specific mechanisms, live-host JavaScript snippets, and practical operating scenarios for every one of the 24 skills. Snippets using `text()` or `ALL_TOOLS` belong in the isolated ChatGPT orchestration runtime; Node fixtures run separately through `examples/`. Any emitted fixture is synthetic evidence, not an external service result. Host API source: ChatGPT `functions.exec` exposed contract; plugin packaging: https://developers.openai.com/plugins/build/plugins.

## execution-environment: Fresh isolate semantics

**Mechanics.** Use a newly constructed counter per invocation and report it through text(); a second invocation starts with a new counter. Top-level await can wait for Promise-returning tool calls. A host tool invocation can modify remote state, while the JavaScript variable cannot persist.

**Copy-ready host recipe:**

```javascript
const sample = { atInvocation: 1, object: Object.freeze({ kind: 'temporary' }) };
text(sample);
```

**Power use case.** Avoid using JavaScript globals as a transaction log. Record durable receipts through an authorized external tool and re-read their state before accepting them.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## programming-primitives: Structured async control flow

**Mechanics.** Model collections with Map for identifier joins, Set for deduplication and arrays for ordering. Await dependent calls serially and launch independent calls with Promise.allSettled; do not depend on the order in which they finish.

**Copy-ready host recipe:**

```javascript
const ids = ['repo-a', 'repo-b', 'repo-a'];
const unique = [...new Set(ids)];
const results = await Promise.all(unique.map(async id => ({ id, size: id.length })));
text(results);
```

**Power use case.** A repository inventory can collapse repeated repository IDs before making network calls, saving calls and retaining stable correlation keys.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## execution-lifecycle: Ephemeral-to-durable transition

**Mechanics.** Separate four moments: input validated, action invoked, receipt received, postcondition observed. Await an external write before querying its result. If a tool throws, do not emit the accepted state.

**Copy-ready host recipe:**

```javascript
let stage = 'initialized';
try { stage = 'validated'; const result = await Promise.resolve({ ok: true }); stage = result.ok ? 'observed' : 'rejected'; }
catch(error) { stage = 'failed'; }
text({stage});
```

**Power use case.** Use a versioned provider record as a checkpoint, never an ephemeral global, for cross-invocation progress.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## output-observability: Structured emission contract

**Mechanics.** Keep output compact but include operation identity, disposition and sufficient source reference. Use text() to emit records, image() only for actual supported image items. Remove duplicate object bodies before emitting.

**Copy-ready host recipe:**

```javascript
const audit = [{id:'q1',state:'ok',source:'github://repo'},{id:'q2',state:'error',source:'neon://project'}];
text({count:audit.length,failed:audit.filter(x=>x.state!=='ok').map(x=>x.id),sources:audit.map(x=>x.source)});
```

**Power use case.** A 200-file analysis can emit 12 relevant file spans and the retrieval query instead of all 200 file bodies.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## tool-registry: Enumerate live capabilities

**Mechanics.** ALL_TOOLS describes actual names and help text. Count by namespace, then inspect complete descriptions for the selected names. A catalog is inventory, not authorization.

**Copy-ready host recipe:**

```javascript
const github = ALL_TOOLS.filter(x=>x.name.startsWith('mcp__GitHub__'));
text({available:github.length,names:github.map(x=>x.name)});
```

**Power use case.** Use the actual 89-operation GitHub integration inventory rather than maintaining a copied list of possibly stale operation names.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## runtime-introspection: Contract-first tool selection

**Mechanics.** For a requested operation, find its exact registered name and inspect the complete tool description. Use the displayed input schema; avoid deriving arguments from guessed API conventions.

**Copy-ready host recipe:**

```javascript
const chosen = ALL_TOOLS.find(x=>x.name==='mcp__GitHub__get_repo');
if(!chosen) throw Error('Required operation not registered');
text({name:chosen.name,contract:chosen.description});
```

**Power use case.** A workflow compiler can inspect each intended edge and refuse to dispatch when a required operation is absent from the runtime.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## tool-invocation: Typed call and shape inspection

**Mechanics.** The host tools object contains callable methods by exact registry name. Use the linked-account selector specified in the declared schema. Handle each provider's response envelope explicitly; do not assume result.data is universal.

**Copy-ready host recipe:**

```javascript
const op = ALL_TOOLS.find(x=>x.name==='mcp__GitHub__get_repo');
if(!op) throw Error('GitHub get_repo unavailable');
text({callable:typeof tools[op.name]==='function',contract:op.description.slice(0,300)});
```

**Power use case.** Read repository metadata before selecting a mutating GitHub operation, preserving owner, target branch, and authenticated connection.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## cross-tool-orchestration: Cross-domain fan-out / join

**Mechanics.** Represent every operation as an object with id, call function and source. Invoke independent functions concurrently; join settled responses by id rather than promise completion order.

**Copy-ready host recipe:**

```javascript
const work=[{id:'git',run:async()=>({commit:'abc'})},{id:'db',run:async()=>({revision:2})}];
const out=await Promise.allSettled(work.map(x=>x.run()));
text(out.map((r,i)=>({id:work[i].id,status:r.status,value:r.status==='fulfilled'?r.value:undefined})));
```

**Power use case.** Correlate a GitHub commit, Vercel deployment, and Neon migration without pushing any provider to become the orchestrator.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## parallel-execution: Bounded concurrency with result stability

**Mechanics.** For N operations, use a worker pool with an increasing shared index and bounded number of runners. Store each result by original index; preserve stable order regardless of completion time.

**Copy-ready host recipe:**

```javascript
const input=[1,2,3,4,5];const results=new Array(input.length);let index=0;
await Promise.all(Array.from({length:2},async()=>{while(index<input.length){const i=index++;results[i]=await Promise.resolve(input[i]*2)}}));
text(results);
```

**Power use case.** Bound expensive repository file retrieval to five simultaneous calls while maintaining a 200-file deterministic output ordering.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## conditional-workflows: Explicit predicates instead of guessed judgment

**Mechanics.** Specify observed state, expected state, and the action transition table. The gate must evaluate to a boolean derived from evidence and accepted policy; a failed gate emits diagnostics without executing writes.

**Copy-ready host recipe:**

```javascript
const evidence={sha:'abc',checksPassed:true};const desired={sha:'abc'};
const decision=evidence.sha===desired.sha&&evidence.checksPassed?'accept':'repair';
text({decision,source:'fixture'});
```

**Power use case.** A deployment is promoted only after an exact commit SHA match and every required status check passes.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## execution-graphs: DAG validation and scheduling

**Mechanics.** Validate unique IDs, all dependency references and graph acyclicity before dispatch. Execute every ready frontier concurrently, committing each completed frontier's results as a named map.

**Copy-ready host recipe:**

```javascript
const nodes=[{id:'source',needs:[]},{id:'tests',needs:['source']},{id:'review',needs:['tests']}];
const ready=nodes.filter(x=>!x.needs.length);text({frontier:ready.map(x=>x.id)});
```

**Power use case.** Coordinate parallel independent repository inspections before starting an integration acceptance job that depends on all of them.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## multi-stage-orchestration: Inspect–evaluate–act–verify pipeline

**Mechanics.** Separate collection, normalizing, policy evaluation, execution, and fresh postcondition checks. Emit stage-specific evidence records and stop at the earliest rejected gate.

**Copy-ready host recipe:**

```javascript
const stages=['inspect','normalize','evaluate','act','verify'];
const trace=stages.map((stage,i)=>({stage,sequence:i+1,state:'executed'}));
text(trace);
```

**Power use case.** A resource reconciler identifies a missing deployment, provisions it through a declared tool, then independently re-reads deployment status.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## data-transformations: Normalize heterogeneous responses

**Mechanics.** Map each external response onto stable fields, retaining provider identity and source. Deduplicate by canonical ID, join on shared keys, then derive statistics from the normalized representation.

**Copy-ready host recipe:**

```javascript
const records=[{id:'r1',provider:'github',value:1},{id:'r1',provider:'github',value:1},{id:'r2',provider:'neon',value:2}];
const unique=[...new Map(records.map(x=>[x.provider+':'+x.id,x])).values()];
text({records:unique,total:unique.reduce((a,x)=>a+x.value,0)});
```

**Power use case.** Combine GitHub issue findings and database resource records into one deterministic resource matrix.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## context-compression: Minimize returned content without losing provenance

**Mechanics.** Build reduction rules that preserve record ID, failure status and source URL while discarding repeated payload. Check the reduced set can answer the acceptance question before returning it to the model.

**Copy-ready host recipe:**

```javascript
const rows=Array.from({length:100},(_,i)=>({id:i,source:'github://repo/'+i,status:i===3?'failed':'ok',body:'x'.repeat(1000)}));
text({total:rows.length,errors:rows.filter(x=>x.status!=='ok').map(({id,source})=>({id,source}))});
```

**Power use case.** Instead of 100 long source files, return only precise symbols, offsets, and paths that satisfy a pre-inference source routing query.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## evidence-provenance: Observed outcomes with correlation

**Mechanics.** Every observation identifies request, provider, operation, source, status, and timing. Keep synthetic fixtures labeled; a write receipt is not a substitute for an independent postcondition read.

**Copy-ready host recipe:**

```javascript
const observation={id:'obs-1',provider:'github',operation:'get_repo',source:'github://Samwise-x/chatgpt-web-java',status:'fulfilled',origin:'synthetic-fixture'};
text(observation);
```

**Power use case.** Build a provenance bundle that maps each accepted code change to its GitHub commit and passing CI run.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## code-analysis: Progressive repository analysis

**Mechanics.** Retrieve tree, choose candidate entry points, parse imports and exported symbols, and follow selected edges. Regex samples are lexical inspection; Node AST packages or compilers are required for precise syntax semantics.

**Copy-ready host recipe:**

```javascript
const code='import { foo } from "./foo.js"; export function run() {}';
text({imports:[...code.matchAll(/from\s+["']([^"']+)/g)].map(x=>x[1]),exports:[...code.matchAll(/export function (\w+)/g)].map(x=>x[1])});
```

**Power use case.** Find an upstream pre-inference hook by following a request handler through middleware and imported modules, then cite file and line.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## testing-verification: Public-seam red/green tests

**Mechanics.** Write input/output assertions against a documented external interface. Demonstrate a deliberate failure, then repair it and repeat the same assertion. Avoid tests that recalculate their own expected values.

**Copy-ready host recipe:**

```javascript
const accepted={actual:5,expected:5};
if(accepted.actual!==accepted.expected) throw Error('acceptance failed');
text({status:'pass',assertion:'exact-equality'});
```

**Power use case.** Validate a GitHub Actions enforcement gate by committing a mutation that fails, then a corrective change that passes.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## reliability-recovery: Per-operation outcomes and retry eligibility

**Mechanics.** Use allSettled to keep completed outcomes, classify failures, and retry only explicitly retryable operations. Protect writes with the provider's idempotency semantics and re-read resulting state.

**Copy-ready host recipe:**

```javascript
const jobs=[async()=>1,async()=>{throw Error('retriable fixture')}];
const result=await Promise.allSettled(jobs.map(x=>x()));
text(result.map(x=>({status:x.status,reason:x.status==='rejected'?String(x.reason):undefined})));
```

**Power use case.** A multi-repo inspection returns successful results and an error ledger rather than discarding all evidence when one repository query fails.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## execution-optimization: Measure and reduce orchestration overhead

**Mechanics.** Measure request counts, completion order, and emitted result size. Deduplicate identical reads; batch independent operations within provider policies and bound concurrency by an explicit worker count.

**Copy-ready host recipe:**

```javascript
const requests=['repo/a','repo/a','repo/b'];const unique=[...new Set(requests)];
text({before:requests.length,after:unique.length,eliminated:requests.length-unique.length});
```

**Power use case.** Reduce repeated GitHub file retrieval by caching within the single invocation and returning source references rather than repeated contents.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## agentic-execution: Model judgment outside the deterministic loop

**Mechanics.** The model selects an intent and authorized objective; the code operates deterministic transitions and emits evidence. Externally owned state persists across invocations while the code's temporary variables do not.

**Copy-ready host recipe:**

```javascript
const intent={action:'inspect',target:'repository'};
const plan=intent.action==='inspect'?['discover','read','summarize']:[];
text({intent,plan});
```

**Power use case.** Have OpenClaw extract intent and let a JavaScript harness coordinate available tools without creating a second source of authority.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## coordination-governance: Capability never implies authority

**Mechanics.** The tool inventory shows available operations, while eligibility requires a separate explicit policy predicate and user scope. A registry entry is not permission for every possible write.

**Copy-ready host recipe:**

```javascript
const tool={name:'github.create_file',kind:'write'};const policy={allowRead:true,allowWrite:false};
text({eligible:tool.kind==='read'?policy.allowRead:policy.allowWrite});
```

**Power use case.** Enforce an OmniRoute-compatible execution policy so additional connectors increase capacity without expanding permitted actions.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## self-correcting-loops: Evidence-driven correction and acceptance

**Mechanics.** Use an observe-evaluate-act-verify sequence whose acceptance check is independently evaluated. Bound iterations by the workflow's specified completion predicate, and retain every observed failure and repair operation.

**Copy-ready host recipe:**

```javascript
let current=0;const target=3;const trace=[];
while(current<target){trace.push({before:current,after:++current})}
text({accepted:current===target,trace});
```

**Power use case.** Repair a failed format/typecheck gate, rerun GitHub Actions, and advance only after observing the final success state.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## cross-service-runbooks: Concrete authenticated tool recipes

**Mechanics.** Prefer GitHub metadata and workflow operations as a baseline. Discover provider-specific list/read operations from the live catalog; create typed request objects only after inspecting descriptions. Join independently gathered observations by source ID.

**Copy-ready host recipe:**

```javascript
const names=ALL_TOOLS.filter(x=>/mcp__(GitHub|Neon|Vercel|Render)__/.test(x.name)).map(x=>x.name);
text({operations:names.length,sample:names.slice(0,12)});
```

**Power use case.** Join 89 available GitHub operations with current Neon and deployment tool interfaces without freezing provider signatures into the skill.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

## complete-execution-patterns: Full workflow replay and postcondition checks

**Mechanics.** Start from an explicit desired outcome, collect evidence in parallel, normalize, evaluate gates, invoke the selected operation, and re-read source state before declaring completion. Preserve all intermediate IDs.

**Copy-ready host recipe:**

```javascript
const desired={sha:'def'};const observed={sha:'def'};const checks={shaMatch:desired.sha===observed.sha,tests:true};
text({accepted:Object.values(checks).every(Boolean),checks});
```

**Power use case.** Combine repository inspection, dependency analysis, CI acceptance, release packaging and installed-plugin inspection in one auditable delivery workflow.

**Acceptance check.** Execute the corresponding Node fixture pattern in `examples/` or run the host snippet. Confirm the actual output against a literal predicate, retain operation names and source identifiers, and report whether evidence was DOCUMENTED, OBSERVED, or END-TO-END VERIFIED. See `tests/engine.test.mjs` and `tests/examples.test.mjs` for executable public-seam assertions.

