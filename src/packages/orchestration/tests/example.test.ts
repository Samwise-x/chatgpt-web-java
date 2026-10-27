import { evaluateGate } from "../index.js";
const gate = evaluateGate({ test: true, schema: true });
if (!gate.passed) throw new Error("Expected public entry-point gate to pass");
