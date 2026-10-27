// code-analysis: isolated host JavaScript. Replace the authorized link selector before running.
const target = "Samwise-x/chatgpt-web-java";
const connectionId = "REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation = ALL_TOOLS.find((x) => x.name === "mcp__GitHub__get_repo");
if (!operation) throw Error("get_repo unavailable");
const response = await tools[operation.name]({
  repository_full_name: target,
  link_id: connectionId,
});
const resource = response.result ?? response;
const source = "github://" + (resource.repository_full_name ?? target);
let result;
const fileOp = ALL_TOOLS.find((x) => x.name === "mcp__GitHub__fetch_file");
if (!fileOp) throw Error("fetch_file absent");
const file = await tools[fileOp.name]({
  repository_full_name: target,
  path: "SPEC.md",
  link_id: connectionId,
});
const content = file.result?.content ?? file.content ?? "";
result = {
  file: "SPEC.md",
  hasFrozenSpec: typeof content === "string" && content.includes("FROZEN"),
  characters: content.length,
};
text({
  skill: "code-analysis",
  operation: operation.name,
  source,
  origin: "connected-tool",
  result,
});
