import test from "node:test";
import assert from "node:assert/strict";
import { writeFileSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

test("dependency-cruiser gate passes, rejects private test import, then passes", () => {
  const fixture = resolve(
    "src/packages/orchestration/tests/private-violation.test.ts"
  );
  const inspect = () =>
    spawnSync(
      resolve("node_modules/.bin/depcruise"),
      [
        "src/packages",
        "--config",
        ".dependency-cruiser.cjs",
        "--output-type",
        "err",
      ],
      { encoding: "utf8" }
    );
  const before = inspect();
  assert.equal(before.status, 0, before.stdout + before.stderr);
  try {
    writeFileSync(
      fixture,
      'import { evaluateGate } from "../lib/impl.js";\nevaluateGate({ accepted:true });\n'
    );
    const rejected = inspect();
    assert.notEqual(rejected.status, 0, "private import mutation must fail");
    assert.match(
      rejected.stdout + rejected.stderr,
      /tests-through-entrypoints/
    );
  } finally {
    rmSync(fixture, { force: true });
  }
  const after = inspect();
  assert.equal(after.status, 0, after.stdout + after.stderr);
});
