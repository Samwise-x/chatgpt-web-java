export type SourceEvidence = {
  file: string;
  imports: { specifier: string; line: number }[];
  exports: { symbol: string; kind: string; line: number }[];
  calls: { target: string; line: number }[];
};
export function createImportGraph(
  records: readonly SourceEvidence[]
): { from: string; to: string }[] {
  return records.flatMap((record) =>
    record.imports.map((item) => ({ from: record.file, to: item.specifier }))
  );
}
