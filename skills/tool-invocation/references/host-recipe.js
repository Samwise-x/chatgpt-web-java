// tool-invocation: live host read recipe; replace the connection selector with the authorized link ID.
const connectionId = "REPLACE_WITH_AUTHORIZED_LINK_ID";
const target = "Samwise-x/chatgpt-web-java";
const operation = ALL_TOOLS.find((x) => x.name === "mcp__GitHub__get_repo");
if (!operation) throw Error("GitHub get_repo is absent");
const response = await tools[operation.name]({
  repository_full_name: target,
  link_id: connectionId,
});
const resource = response.result ?? response;
const source = "github://" + (resource.repository_full_name ?? target);
let result;
result = {
  operation: operation.name,
  received: !!resource.repository_full_name,
  branch: resource.default_branch ?? null,
};
text({
  skill: "tool-invocation",
  source,
  operation: operation.name,
  origin: "connected-tool",
  result,
});
