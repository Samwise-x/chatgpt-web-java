import { spawnSync } from "node:child_process";
import { mkdirSync, rmSync, cpSync } from "node:fs";
import { resolve } from "node:path";
const target = resolve("build/chatgpt-web-java");
rmSync(resolve("build"), { recursive: true, force: true });
mkdirSync(target, { recursive: true });
for (const name of [
  "plugin.json",
  "README.md",
  "skills",
  "references",
  "catalog",
  "examples",
  "src",
  "tsconfig.json",
  "package.json",
]) {
  cpSync(resolve(name), resolve(target, name), { recursive: true });
}
const zip = resolve("build/chatgpt-web-java-plugin.zip");
const result = spawnSync(
  "python3",
  [
    "-c",
    `import zipfile,pathlib
root=pathlib.Path("build/chatgpt-web-java")
with zipfile.ZipFile("build/chatgpt-web-java-plugin.zip","w",compression=zipfile.ZIP_DEFLATED) as z:
 for p in sorted(root.rglob("*")):
  if p.is_file(): z.write(p,p.relative_to(root))`,
  ],
  { encoding: "utf8" }
);
if (result.status !== 0) throw Error(result.stderr);
console.log(zip);
