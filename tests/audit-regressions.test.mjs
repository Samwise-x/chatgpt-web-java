import test from "node:test";
import assert from "node:assert/strict";
import {
  evaluateGate,
  normalizeObservation,
  executeGraph,
} from "../dist/orchestration/index.js";

test("empty policy is rejected", () =>
  assert.throws(() => evaluateGate({}), /gate/i));
test("nonboolean policy is rejected", () =>
  assert.throws(() => evaluateGate({ accept: 99 }), /boolean/i));
test("unknown observation status rejected", () =>
  assert.throws(
    () =>
      normalizeObservation({
        id: "a",
        provider: "github",
        operation: "read",
        source: "github://a",
        status: "faked",
        value: null,
      }),
    /status/i
  ));
test("DAG settles siblings and carries partial evidence", async () => {
  let release;
  let finished = false;
  const held = new Promise((resolve) => {
    release = resolve;
  });
  let settled = false;
  const promise = executeGraph([
    {
      id: "fail",
      needs: [],
      run: async () => {
        throw Error("provider failed");
      },
    },
    {
      id: "sibling",
      needs: [],
      run: async () => {
        await held;
        finished = true;
        return "saved";
      },
    },
  ]).catch((e) => {
    settled = true;
    return e;
  });
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(settled, false);
  release();
  const error = await promise;
  assert.equal(finished, true);
  assert.deepEqual(
    error.failures.map((x) => x.id),
    ["fail"]
  );
  assert.equal(error.completed.get("sibling"), "saved");
});
