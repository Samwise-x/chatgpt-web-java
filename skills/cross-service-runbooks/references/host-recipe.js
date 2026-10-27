// cross-service-runbooks: directly executable host tool recipe; provide the authorized GitHub link ID.
const target="Samwise-x/chatgpt-web-java";
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("GitHub get_repo unavailable");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const op=ALL_TOOLS.find(x=>x.name==="mcp__Neon__list_projects");if(!op)throw Error("Neon list_projects unavailable");const run=await Promise.allSettled([Promise.resolve(response),tools[op.name]({})]);result={providers:["github","neon"],statuses:run.map(x=>x.status),correlated:run.length===2};
text({skill:"cross-service-runbooks",operation:operation.name,source,origin:"connected-tool",result});
