import test from "node:test";
import assert from "node:assert/strict";
import {
  executeGraph,
  selectTool,
  reduceEvidence,
  evaluateGate,
} from "../dist/orchestration/index.js";





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


