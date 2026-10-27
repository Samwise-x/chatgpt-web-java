// registry-inventory — variant 1; deterministic fixture; no remote provider effects.
import assert from "node:assert/strict";

const registry = Array.from({ length: 3 }, (_, i) => ({
  name: "tool_" + i,
  description: "operation " + i,
}));
assert.equal(registry.filter((x) => x.name.startsWith("tool_")).length, 3);
console.log(
  JSON.stringify({ example: "registry-inventory/1", status: "pass" })
);
