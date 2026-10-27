// cross-tool-orchestration: live host read recipe; replace the connection selector with the authorized link ID.
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
const n = ALL_TOOLS.find((x) => x.name === "mcp__Neon__list_projects");
if (!n) throw Error("Neon tool missing");
const responses = await Promise.allSettled([
  Promise.resolve(response),
  tools[n.name]({}),
]);
result = {
  operations: [operation.name, n.name],
  statuses: responses.map((x) => x.status),
  allSettled: responses.length === 2,
};
text({
  skill: "cross-tool-orchestration",
  source,
  operation: operation.name,
  origin: "connected-tool",
  result,
});
