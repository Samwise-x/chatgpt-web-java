// multi-stage-orchestration: isolated host JavaScript. Replace the authorized link selector before running.
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
const stages = [
  { name: "inspect", passed: !!resource.repository_full_name },
  { name: "evaluate", passed: resource.repository_full_name === target },
  { name: "verify", passed: !!resource.default_branch },
];
result = { stages, accepted: stages.every((x) => x.passed) };
text({
  skill: "multi-stage-orchestration",
  operation: operation.name,
  source,
  origin: "connected-tool",
  result,
});
