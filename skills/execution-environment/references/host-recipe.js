// execution-environment: live host read recipe; replace the connection selector with the authorized link ID.
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const target="Samwise-x/chatgpt-web-java";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("GitHub get_repo is absent");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const local = {initialized:true, settled:typeof response==="object"}; result = {runtime:"V8",stages:Object.keys(local),complete:local.initialized&&local.settled};
text({skill:"execution-environment",source,operation:operation.name,origin:"connected-tool",result});
