// registry-inventory — variant 5; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry = Array.from({ length: 7 }, (_, i) => ({
  name: "tool_" + i,
  description: "operation " + i,
}));
assert.equal(registry.filter((x) => x.name.startsWith("tool_")).length, 7);
console.log(
  JSON.stringify({ example: "registry-inventory/5", status: "pass" })
);
