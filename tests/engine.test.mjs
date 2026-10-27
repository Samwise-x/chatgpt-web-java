import test from "node:test";
import assert from "node:assert/strict";
import {
  parallelMap,
  settleById,
  executeGraph,
  selectTool,
  normalizeObservation,
  reduceEvidence,
  evaluateGate,
  reconcile,
} from "../dist/orchestration/index.js";

test("worker pool never exceeds supplied concurrency", async () => {
  let active = 0,
    peak = 0;
  const values = await parallelMap([1, 2, 3, 4, 5, 6], 2, async (value) => {
    active++;
    peak = Math.max(peak, active);
    await Promise.resolve();
    active--;
    return value * 2;
  });
  assert.deepEqual(values, [2, 4, 6, 8, 10, 12]);
  assert.equal(peak, 2);
});
test("bad concurrency fails", async () => {
  await assert.rejects(
    parallelMap([1], 0, async (x) => x),
    /Positive/
  );
});
test("all settled results have operation identities", async () => {
  const x = await settleById([
    { id: "a", run: async () => 7 },
    {
      id: "b",
      run: async () => {
        throw Error("expected");
      },
    },
  ]);
  assert.deepEqual(x[0], { id: "a", status: "fulfilled", value: 7 });
  assert.equal(x[1].id, "b");
  assert.equal(x[1].status, "rejected");
});
test("duplicate operation ID fails", async () => {
  await assert.rejects(
    settleById([
      { id: "a", run: async () => 1 },
      { id: "a", run: async () => 2 },
    ]),
    /Duplicate/
  );
});
test("DAG orders dependencies", async () => {
  const order = [];
  const x = await executeGraph([
    {
      id: "a",
      needs: [],
      run: async () => {
        order.push("a");
        return 2;
      },
    },
    {
      id: "b",
      needs: ["a"],
      run: async (m) => {
        order.push("b");
        return m.get("a") + 3;
      },
    },
  ]);
  assert.deepEqual(order, ["a", "b"]);
  assert.equal(x.get("b"), 5);
});
test("cycles and missing edges reject before dispatch", async () => {
  let called = 0;
  await assert.rejects(
    executeGraph([
      {
        id: "a",
        needs: ["b"],
        run: () => {
          called++;
          return 1;
        },
      },
      {
        id: "b",
        needs: ["a"],
        run: () => {
          called++;
          return 2;
        },
      },
    ]),
    /cycle/
  );
  await assert.rejects(
    executeGraph([
      {
        id: "a",
        needs: ["missing"],
        run: () => {
          called++;
          return 1;
        },
      },
    ]),
    /Missing/
  );
  assert.equal(called, 0);
});
test("tool selection uses exact unique advertised name", () => {
  assert.equal(
    selectTool([{ name: "foo", description: "bar" }], "foo").name,
    "foo"
  );
  assert.throws(() => selectTool([], "foo"), /exactly once/);
});
test("evidence preserves sources and explicit failures", () => {
  const records = [
    normalizeObservation({
      id: "x",
      provider: "github",
      operation: "fetch",
      source: "github://x",
      status: "fulfilled",
      value: {},
    }),
    normalizeObservation({
      id: "y",
      provider: "neon",
      operation: "list",
      source: "neon://y",
      status: "rejected",
      value: null,
    }),
  ];
  assert.deepEqual(reduceEvidence(records), {
    total: 2,
    failures: 1,
    sources: ["github://x", "neon://y"],
    ids: ["x", "y"],
  });
});
test("invalid provenance fields reject", () =>
  assert.throws(
    () =>
      normalizeObservation({
        id: "",
        provider: "x",
        operation: "y",
        source: "z",
        status: "fulfilled",
        value: 1,
      }),
    /id/
  ));
test("gates and reconciliation produce executable decisions", () => {
  assert.deepEqual(evaluateGate({ tests: true, review: false }), {
    passed: false,
    failed: ["review"],
  });
  assert.deepEqual(
    reconcile(
      [
        { id: "a", value: 1 },
        { id: "b", value: 2 },
      ],
      [{ id: "a", value: 1 }]
    ),
    { create: ["b"], update: [], unchanged: ["a"] }
  );
});

test("correlated evidence includes timestamp, origin and correlation", () => {
  const item = normalizeObservation({ id:"e", provider:"github", operation:"get_repo", source:"github://repo", status:"fulfilled", value:{}, origin:"live", correlationId:"request-42", observedAt:"2026-10-27T00:00:00.000Z" });
  assert.equal(item.origin,"live");
  assert.equal(item.correlationId,"request-42");
  assert.equal(item.observedAt,"2026-10-27T00:00:00.000Z");
  assert.throws(()=>normalizeObservation({id:"e",provider:"x",operation:"y",source:"z",status:"fulfilled",value:null,observedAt:"not-a-date"}),/timestamp/);
});
