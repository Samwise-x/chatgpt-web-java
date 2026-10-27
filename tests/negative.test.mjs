import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
test("known-negative assertion exits nonzero", () => {
  const result = spawnSync(
    process.execPath,
    [resolve("tests/fixtures/should-fail.mjs")],
    { encoding: "utf8" }
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /AssertionError/);
});
test("invalid skill catalog mutation is rejected by validator", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/validate-plugin.mjs", "--fixture-invalid"],
    { encoding: "utf8" }
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /SKILL COUNT|SECTION COUNT|invalid fixture/);
});
