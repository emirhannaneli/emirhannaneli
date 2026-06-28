import { describe, it, expect } from "vitest";
import { deepMerge } from "./deep-merge";

describe("deepMerge", () => {
  it("recursively overrides plain-object keys, base wins when override is absent", () => {
    const base = { a: 1, nested: { x: "base-x", y: "base-y" } };
    const out = deepMerge(base, { nested: { y: "over-y" } });
    expect(out).toEqual({ a: 1, nested: { x: "base-x", y: "over-y" } });
  });
  it("does not mutate the base", () => {
    const base = { nested: { x: 1 } };
    deepMerge(base, { nested: { x: 2 } });
    expect(base.nested.x).toBe(1);
  });
  it("replaces arrays wholesale (no index merge)", () => {
    expect(deepMerge({ a: [1, 2, 3] }, { a: [9] })).toEqual({ a: [9] });
  });
});
