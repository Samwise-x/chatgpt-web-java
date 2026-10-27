// dependency-dag — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { executeGraph } from "../../dist/orchestration/index.js";
const result=await executeGraph([{id:"fetch",needs:[],run:async()=>65},{id:"validate",needs:["fetch"],run:async r=>r.get("fetch")>0},{id:"accept",needs:["validate"],run:async r=>r.get("validate")===true}]);assert.equal(result.get("accept"),true);
console.log(JSON.stringify({example:"dependency-dag/6",status:"pass"}));
