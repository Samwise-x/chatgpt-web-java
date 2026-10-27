// context-reduction — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { normalizeObservation, reduceEvidence } from "../../dist/orchestration/index.js";
const obs=Array.from({length:6},(_,i)=>normalizeObservation({id:"id-"+i,provider:"github",operation:"read",source:"github://repo",status:"fulfilled",value:i}));const reduced=reduceEvidence(obs);assert.equal(reduced.sources.length,1);assert.equal(reduced.total,6);
console.log(JSON.stringify({example:"context-reduction/4",status:"pass"}));
