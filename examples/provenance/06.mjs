// provenance — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { normalizeObservation } from "../../dist/orchestration/index.js";
const obs=normalizeObservation({id:"obs-6",provider:"github",operation:"get_repo",source:"github://Samwise-x/chatgpt-web-java",status:"fulfilled",value:{count:68}});assert.equal(obs.value.count,68);assert.equal(obs.source.startsWith("github://"),true);
console.log(JSON.stringify({example:"provenance/6",status:"pass"}));
