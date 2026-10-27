// registry-selection — variant 6; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";
import { selectTool } from "../../dist/orchestration/index.js";
const registry=[{name:"mcp__GitHub__get_repo",description:"Fetch repository"},{name:"mcp__Neon__list_projects",description:"List projects"}];assert.equal(selectTool(registry,"mcp__GitHub__get_repo").name,"mcp__GitHub__get_repo");
console.log(JSON.stringify({example:"registry-selection/6",status:"pass"}));
