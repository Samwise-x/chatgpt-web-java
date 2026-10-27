import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";
const skills = JSON.parse(readFileSync("catalog/skills.json", "utf8"));
const sections = JSON.parse(readFileSync("catalog/sections.json", "utf8"));
const examples = {
  runtime: "registry-inventory",
  "tool-interface": "registry-selection",
  orchestration: "dependency-dag",
  "data-context": "context-reduction",
  "advanced-engineering": "cycle-rejection",
  "agentic-systems": "policy-gates",
  runbooks: "cross-service-correlation",
};
for (const skill of skills) {
  test("skill acceptance: " + skill.slug, () => {
    const md = readFileSync(join("skills", skill.slug, "SKILL.md"), "utf8");
    assert.ok(md.startsWith("---\nname: " + skill.slug + "\n"));
    assert.match(md, /## (Use this skill|Scope and routing|Trigger and objective)/);
    assert.match(md, /## Acceptance/);
    assert.equal(
      sections.filter((s) => s.skill === skill.slug).length,
      skill.sections
    );
    const run = spawnSync(
      process.execPath,
      [resolve("examples", examples[skill.domain], "01.mjs")],
      { encoding: "utf8" }
    );
    assert.equal(run.status, 0, run.stderr);
    assert.match(run.stdout, /"status":"pass"/);
  });
}
