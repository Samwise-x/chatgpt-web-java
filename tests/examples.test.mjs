import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";
const base = resolve("examples");
for (const domain of readdirSync(base, { withFileTypes: true }).filter((x) =>
  x.isDirectory()
)) {
  for (const script of readdirSync(join(base, domain.name)).filter((x) =>
    x.endsWith(".mjs")
  )) {
    test("example " + domain.name + "/" + script, () => {
      const result = spawnSync(
        process.execPath,
        [join(base, domain.name, script)],
        { encoding: "utf8" }
      );
      assert.equal(result.status, 0, result.stderr);
      assert.match(result.stdout, /"status":"pass"/);
    });
  }
}
