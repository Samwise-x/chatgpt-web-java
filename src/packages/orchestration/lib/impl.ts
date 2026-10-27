/** Deterministic reference implementations used by executable examples. */
export type ToolDescription = { name: string; description: string };
export type GraphNode<T> = {
  id: string;
  needs: string[];
  run: (values: ReadonlyMap<string, T>) => Promise<T> | T;
};
export type Observation = {
  id: string;
  provider: string;
  operation: string;
  source: string;
  status: string;
  value: unknown;
  observedAt?: string;
  correlationId?: string;
  origin?: "live" | "synthetic";
};

export function selectTool(
  registry: readonly ToolDescription[],
  name: string
): ToolDescription {
  const matches = registry.filter((entry) => entry.name === name);
  if (matches.length !== 1)
    throw new Error("Tool must be present exactly once: " + name);
  return matches[0];
}

export async function executeGraph<T>(
  nodes: readonly GraphNode<T>[]
): Promise<Map<string, T>> {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  if (byId.size !== nodes.length) throw new Error("Duplicate graph node ID");
  for (const node of nodes) {
    if (new Set(node.needs).size !== node.needs.length)
      throw new Error("Duplicate dependency for " + node.id);
    for (const dependency of node.needs)
      if (!byId.has(dependency))
        throw new Error("Missing dependency: " + dependency);
  }
  const visited = new Set<string>();
  const visiting = new Set<string>();
  function checkCycle(id: string) {
    if (visiting.has(id)) throw new Error("Dependency cycle at " + id);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const dependency of byId.get(id)!.needs) checkCycle(dependency);
    visiting.delete(id);
    visited.add(id);
  }
  for (const node of nodes) checkCycle(node.id);
  const result = new Map<string, T>();
  const remaining = new Set(nodes.map((node) => node.id));
  while (remaining.size) {
    const ready = nodes.filter(
      (node) =>
        remaining.has(node.id) && node.needs.every((id) => result.has(id))
    );
    if (!ready.length) throw new Error("Graph has no ready nodes");
    const settled = await Promise.allSettled(
      ready.map((node) =>
        Promise.resolve().then(() => node.run(new Map(result)))
      )
    );
    const failures: { id: string; reason: unknown }[] = [];
    for (let index = 0; index < ready.length; index++) {
      const node = ready[index];
      const outcome = settled[index];
      if (outcome.status === "fulfilled") {
        result.set(node.id, outcome.value);
        remaining.delete(node.id);
      } else {
        failures.push({ id: node.id, reason: outcome.reason });
      }
    }
    if (failures.length) {
      const error = new AggregateError(
        failures.map((failure) => failure.reason),
        "Graph frontier failed"
      );
      Object.assign(error, { failures, completed: new Map(result) });
      throw error;
    }
  }
  return result;
}

export function reduceEvidence(records: readonly Observation[]): {
  total: number;
  failures: number;
  sources: string[];
  ids: string[];
} {
  return {
    total: records.length,
    failures: records.filter((r) => r.status !== "fulfilled").length,
    sources: [...new Set(records.map((r) => r.source))].sort(),
    ids: records.map((r) => r.id),
  };
}

export function evaluateGate(checks: Readonly<Record<string, boolean>>): {
  passed: boolean;
  failed: string[];
} {
  const entries = Object.entries(checks);
  if (!entries.length)
    throw new Error("At least one acceptance gate is required");
  for (const [name, passed] of entries)
    if (typeof passed !== "boolean")
      throw new Error("Gate must be boolean: " + name);
  const failed = entries.filter(([, passed]) => !passed).map(([name]) => name);
  return { passed: failed.length === 0, failed };
}
