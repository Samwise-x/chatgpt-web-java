// data-transformations: isolated host JavaScript. Replace the authorized link selector before running.
const target="Samwise-x/chatgpt-web-java";
const connectionId="REPLACE_WITH_AUTHORIZED_LINK_ID";
const operation=ALL_TOOLS.find(x=>x.name==="mcp__GitHub__get_repo");
if(!operation)throw Error("get_repo unavailable");
const response=await tools[operation.name]({repository_full_name:target,link_id:connectionId});
const resource=response.result??response;
const source="github://"+(resource.repository_full_name??target);
let result;
const fields=Object.entries({repo:resource.repository_full_name,branch:resource.default_branch??null});const mapped=fields.map(([key,value])=>({key,value}));result={records:mapped,count:mapped.length};
text({skill:"data-transformations",operation:operation.name,source,origin:"connected-tool",result});
