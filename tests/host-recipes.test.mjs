import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { join } from "node:path";

const skills = JSON.parse(readFileSync("catalog/skills.json", "utf8"));
const expected = {
  "execution-environment": "complete",
  "programming-primitives": "unique",
  "execution-lifecycle": "stage",
  "output-observability": "selected",
  "tool-registry": "containsGetRepo",
  "runtime-introspection": "contractPresent",
  "tool-invocation": "received",
  "cross-tool-orchestration": "allSettled",
  "parallel-execution": "parallelCount",
  "conditional-workflows": "decision",
  "execution-graphs": "nodes",
  "multi-stage-orchestration": "accepted",
  "data-transformations": "records",
  "context-compression": "compact",
  "evidence-provenance": "correlationId",
  "code-analysis": "hasFrozenSpec",
  "testing-verification": "passed",
  "reliability-recovery": "explicitPartial",
  "execution-optimization": "eliminated",
  "agentic-execution": "permitted",
  "coordination-governance": "eligible",
  "self-correcting-loops": "accepted",
  "cross-service-runbooks": "correlated",
  "complete-execution-patterns": "accepted",
};
const entries = [
  {
    name: "mcp__GitHub__get_repo",
    description: "Read repository by repository_full_name and link_id",
  },
  {
    name: "mcp__GitHub__fetch_file",
    description: "Read file by path and repository_full_name",
  },
  { name: "mcp__Neon__list_projects", description: "List Neon projects" },
];
const repo = {
  repository_full_name: "Samwise-x/chatgpt-web-java",
  default_branch: "main",
  url: "https://api.github.com/repos/Samwise-x/chatgpt-web-java",
  permissions: { push: true },
};
for (const skill of skills) {
  test("host recipe: " + skill.slug, async () => {
    const source = readFileSync(
      join("skills", skill.slug, "references/host-recipe.js"),
      "utf8"
    );
    assert.match(source, /ALL_TOOLS/);
    assert.match(source, /await tools\[/);
    const calls = [],
      outputs = [];
    const tools = {
      mcp__GitHub__get_repo: async (args) => {
        calls.push({ name: "get_repo", args });
        return { result: repo };
      },
      mcp__GitHub__fetch_file: async (args) => {
        calls.push({ name: "fetch_file", args });
        return {
          result: { content: "Status: FROZEN — immutable acceptance contract" },
        };
      },
      mcp__Neon__list_projects: async (args) => {
        calls.push({ name: "list_projects", args });
        return { result: { projects: [] } };
      },
    };
    const run = vm.runInNewContext("(async()=>{\n" + source + "\n})()", {
      ALL_TOOLS: entries,
      tools,
      text: (value) => outputs.push(value),
      Date,
      Promise,
      Set,
      Map,
      JSON,
      Object,
      Error,
    });
    await run;
    assert.equal(calls[0].name, "get_repo");
    assert.equal(calls[0].args.repository_full_name, repo.repository_full_name);
    assert.equal(outputs.length, 1);
    assert.equal(outputs[0].skill, skill.slug);
    assert.ok(
      Object.prototype.hasOwnProperty.call(
        outputs[0].result,
        expected[skill.slug]
      ),
      "Expected unique behavior: " + expected[skill.slug]
    );
  });
  test("host recipe missing tool rejects: " + skill.slug, async () => {
    const source = readFileSync(
      join("skills", skill.slug, "references/host-recipe.js"),
      "utf8"
    );
    const run = vm.runInNewContext("(async()=>{\n" + source + "\n})()", {
      ALL_TOOLS: [],
      tools: {},
      text: () => {},
    });
    await assert.rejects(run, /unavailable|absent|missing/i);
  });
}
