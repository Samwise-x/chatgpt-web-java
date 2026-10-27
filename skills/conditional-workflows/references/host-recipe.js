// conditional-workflows: isolated host JavaScript. Replace the authorized link selector before running.
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
const matches = resource.repository_full_name === target;
const decision = matches ? "inspect" : "reject";
result = { decision, requiredTarget: target, targetMatches: matches };
text({
  skill: "conditional-workflows",
  operation: operation.name,
  source,
  origin: "connected-tool",
  result,
});
