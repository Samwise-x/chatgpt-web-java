import * as ts from "typescript";

export type SourceEvidence = {
  file: string;
  imports: { specifier: string; line: number }[];
  exports: { symbol: string; kind: string; line: number }[];
  calls: { target: string; line: number }[];
};
export function analyzeSource(file: string, content: string): SourceEvidence {
  const source = ts.createSourceFile(
    file,
    content,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  );
  const evidence: SourceEvidence = {
    file,
    imports: [],
    exports: [],
    calls: [],
  };
  const line = (node: ts.Node) =>
    source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;
  function walk(node: ts.Node): void {
    if (
      ts.isImportDeclaration(node) &&
      ts.isStringLiteral(node.moduleSpecifier)
    )
      evidence.imports.push({
        specifier: node.moduleSpecifier.text,
        line: line(node),
      });
    if (
      ts.isExportDeclaration(node) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    )
      evidence.exports.push({
        symbol: node.moduleSpecifier.text,
        kind: "reexport",
        line: line(node),
      });
    if (
      ts.canHaveModifiers(node) &&
      ts.getModifiers(node)?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      const named = node as ts.Node & { name?: ts.Node };
      if (named.name && ts.isIdentifier(named.name))
        evidence.exports.push({
          symbol: named.name.text,
          kind: ts.SyntaxKind[node.kind],
          line: line(node),
        });
    }
    if (ts.isCallExpression(node)) {
      const expression = node.expression;
      const target = ts.isIdentifier(expression)
        ? expression.text
        : ts.isPropertyAccessExpression(expression)
          ? expression.getText(source)
          : "<dynamic>";
      evidence.calls.push({ target, line: line(node) });
    }
    ts.forEachChild(node, walk);
  }
  walk(source);
  return evidence;
}
export function createImportGraph(
  records: readonly SourceEvidence[]
): { from: string; to: string }[] {
  return records.flatMap((record) =>
    record.imports.map((item) => ({ from: record.file, to: item.specifier }))
  );
}
