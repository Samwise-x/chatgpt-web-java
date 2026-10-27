// coordination-governance: directly executable host tool recipe; provide the authorized GitHub link ID.
const target="Samwise-x/chatgpt-web-java";
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("GitHub get_repo unavailable");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const requested={kind:"read",repo:target};const eligible=requested.kind==="read"&&resource.repository_full_name===requested.repo;result={eligible,writeAuthorized:false,capabilityNotAuthority:true};
text({skill:"coordination-governance",operation:operation.name,source,origin:"connected-tool",result});
