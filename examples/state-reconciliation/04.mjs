// state-reconciliation — variant 4; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { reconcile } from "../../dist/orchestration/index.js";
const changes=reconcile([{id:"a",value:50},{id:"b",value:2}],[{id:"a",value:50}]);assert.deepEqual(changes.create,["b"]);assert.deepEqual(changes.unchanged,["a"]);
console.log(JSON.stringify({example:"state-reconciliation/4",status:"pass"}));
