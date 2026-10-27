// evidence-provenance: isolated host JavaScript. Replace the authorized link selector before running.
const target="Samwise-x/chatgpt-web-java";
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("get_repo unavailable");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const observedAt=new Date().toISOString();result={id:"repo-read",provider:"github",correlationId:"get-repo-1",observedAt,status:"fulfilled",source};
text({skill:"evidence-provenance",operation:operation.name,source,origin:"connected-tool",result});
