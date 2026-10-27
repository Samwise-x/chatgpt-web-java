// runtime-introspection: live host read recipe; replace the connection selector with the authorized link ID.
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const target="Samwise-x/chatgpt-web-java";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("GitHub get_repo is absent");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const description=operation.description;result={operation:operation.name,contractPresent:description.length>0,hasTarget:description.includes("repository_full_name")};
text({skill:"runtime-introspection",source,operation:operation.name,origin:"connected-tool",result});
