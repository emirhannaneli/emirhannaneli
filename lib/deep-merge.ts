type Plain = Record<string, unknown>;
const isPlain = (v: unknown): v is Plain =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** Deep-merge `override` onto a deep clone of `base`. Plain objects merge by key
 * (base wins where override is undefined); arrays and scalars are replaced wholesale. */
export function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlain(base) || !isPlain(override)) {
    return (override === undefined ? base : (override as T));
  }
  const out: Plain = { ...base };
  for (const key of Object.keys(override)) {
    const o = override[key];
    if (o === undefined) continue;
    out[key] = isPlain(out[key]) && isPlain(o) ? deepMerge(out[key], o) : o;
  }
  return out as T;
}
