// state-reconciliation — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { reconcile } from "../../dist/orchestration/index.js";
const changes=reconcile([{id:"a",value:60},{id:"b",value:2}],[{id:"a",value:60}]);assert.deepEqual(changes.create,["b"]);assert.deepEqual(changes.unchanged,["a"]);
console.log(JSON.stringify({example:"state-reconciliation/5",status:"pass"}));
