export type Capability = { name: string; kind: "read" | "write"; target: string };
export type Admission = { eligible: boolean; reasons: string[] };
export function admitCapability(
  capability: Capability,
  policy: { allowedOperations: readonly string[]; allowedTargets: readonly string[]; allowWrites: boolean }
): Admission {
  const reasons: string[] = [];
  if (!policy.allowedOperations.includes(capability.name)) reasons.push("operation-not-allowed");
  if (!policy.allowedTargets.includes(capability.target)) reasons.push("target-not-allowed");
  if (capability.kind === "write" && !policy.allowWrites) reasons.push("write-not-authorized");
  return { eligible: reasons.length === 0, reasons };
}
export type CorrectionTrace<T> = { attempts: number; accepted: boolean; observations: T[] };
export async function correctionLoop<T>(
  observe: () => Promise<T>,
  accepted: (state: T) => boolean,
  correct: (state: T) => Promise<void>,
  maxAttempts: number
): Promise<CorrectionTrace<T>> {
  if (!Number.isInteger(maxAttempts) || maxAttempts < 0) throw new Error("Invalid correction budget");
  const observations: T[] = [];
  for (let attempts = 0; attempts <= maxAttempts; attempts++) {
    const state = await observe();
    observations.push(state);
    if (accepted(state)) return { attempts, accepted: true, observations };
    if (attempts === maxAttempts) return { attempts, accepted: false, observations };
    await correct(state);
  }
  throw new Error("Correction loop invariant violated");
}
