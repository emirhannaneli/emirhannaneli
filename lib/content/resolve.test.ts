import { describe, it, expect } from "vitest";
import { resolveContent } from "./index";
import en from "./en";
import { deepMerge } from "../deep-merge";

describe("resolveContent", () => {
  it("returns a complete SiteContent for the default locale", () => {
    expect(resolveContent("en")).toEqual(en);
  });
  it("overrides translated fields for tr", () => {
    expect(resolveContent("tr").nav.about).toBe("Hakkımda");
    expect(resolveContent("tr").projects.viewLabel).toBe("GitHub'da gör");
  });
  it("falls back to en for any field a locale omits", () => {
    const tr = resolveContent("tr");
    // Every project description and experience item exists (TR provides them; if any were
    // omitted, this still resolves from en — proving fallback completeness):
    expect(Object.keys(tr.projects.descriptions).sort()).toEqual(
      Object.keys(en.projects.descriptions).sort(),
    );
    expect(Object.keys(tr.experience.items).sort()).toEqual(
      Object.keys(en.experience.items).sort(),
    );
  });
  it("a deliberately-partial locale resolves every omitted field from en", () => {
    const partial = deepMerge(en, { nav: { about: "X" } });
    expect(partial.nav.about).toBe("X");                                    // overridden
    expect(partial.nav.skills).toBe(en.nav.skills);                         // fell back to en
    expect(partial.projects.descriptions["service-utils"]).toBe(en.projects.descriptions["service-utils"]);
    expect(partial.experience.items.education).toEqual(en.experience.items.education);
  });
});
