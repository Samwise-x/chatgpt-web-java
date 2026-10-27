// reliability-recovery: directly executable host tool recipe; provide the authorized GitHub link ID.
const target="Samwise-x/chatgpt-web-java";
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("GitHub get_repo unavailable");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const outcomes=await Promise.allSettled([Promise.resolve(response),Promise.reject(Error("deliberate fixture rejection"))]);result={fulfilled:outcomes.filter(x=>x.status==="fulfilled").length,rejected:outcomes.filter(x=>x.status==="rejected").length,explicitPartial:true};
text({skill:"reliability-recovery",operation:operation.name,source,origin:"connected-tool",result});
