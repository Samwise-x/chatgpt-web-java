import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
const load = (p) => JSON.parse(readFileSync(p, "utf8"));
const manifest = load("plugin.json");
const catalog = load("catalog/sections.json");
const skills = load("catalog/skills.json");
if (process.argv.includes("--fixture-invalid")) skills.pop();
assert.equal(manifest.name, "chatgpt-web-java");
assert.equal(skills.length, 24, "SKILL COUNT must equal 24");
assert.equal(new Set(skills.map((s) => s.slug)).size, 24);
assert.equal(new Set(skills.map((s) => s.domain)).size, 7);
assert.equal(catalog.length, 158, "SECTION COUNT must equal 158");
assert.deepEqual(
  catalog.map((x) => x.number),
  Array.from({ length: 158 }, (_, i) => i + 1)
);
for (const s of skills) {
  const path = join("skills", s.slug, "SKILL.md");
  assert.ok(existsSync(path), "Skill missing: " + path);
  const doc = readFileSync(path, "utf8");
  assert.match(doc, new RegExp("^---\\nname: " + s.slug + "\\n"));
  for (const section of catalog.filter((x) => x.skill === s.slug))
    assert.ok(
      doc.includes("### " + section.number + ". " + section.title),
      "Missing section " + section.number + " in " + path
    );
}
const examplePaths = readdirSync("examples").flatMap((dir) =>
  readdirSync(join("examples", dir))
    .filter((file) => file.endsWith(".mjs"))
    .map((file) => join("examples", dir, file))
);
assert.ok(
  examplePaths.length >= 60 && examplePaths.length <= 100,
  "Expected 60–100 executable examples"
);
for (const path of examplePaths)
  assert.match(readFileSync(path, "utf8"), /assert\./);
assert.ok(existsSync(".github/workflows/ci.yml"));
console.log(
  JSON.stringify({
    status: "pass",
    skills: skills.length,
    domains: 7,
    sections: catalog.length,
    examples: examplePaths.length,
  })
);
