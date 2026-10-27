// self-correcting-loops: directly executable host tool recipe; provide the authorized GitHub link ID.
const target = "Samwise-x/chatgpt-web-java";
const connectionId = "REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation = ALL_TOOLS.find((x) => x.name === "mcp__GitHub__get_repo");
if (!operation) throw Error("GitHub get_repo unavailable");
const response = await tools[operation.name]({
  repository_full_name: target,
  link_id: connectionId,
});
const resource = response.result ?? response;
const source = "github://" + (resource.repository_full_name ?? target);
let result;
let checked = resource.repository_full_name === target;
const trace = [
  { phase: "observe", ok: !!resource.repository_full_name },
  { phase: "evaluate", ok: checked },
];
if (!checked) trace.push({ phase: "stop", ok: false });
else trace.push({ phase: "verify", ok: !!resource.default_branch });
result = { trace, accepted: trace.every((x) => x.ok) };
text({
  skill: "self-correcting-loops",
  operation: operation.name,
  source,
  origin: "connected-tool",
  result,
});
