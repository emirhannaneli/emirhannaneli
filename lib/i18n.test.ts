import { describe, it, expect } from "vitest";
import { hasLocale, localeHref, hreflang, nonDefaultLocales, defaultLocale } from "./i18n";

describe("i18n registry", () => {
  it("recognizes registered locales only", () => {
    expect(hasLocale("en")).toBe(true);
    expect(hasLocale("tr")).toBe(true);
    expect(hasLocale("xx")).toBe(false);
  });
  it("maps the default locale to / and others to /<code>", () => {
    expect(localeHref(defaultLocale)).toBe("/");
    expect(localeHref("tr")).toBe("/tr");
  });
  it("excludes the default locale from nonDefaultLocales", () => {
    expect(nonDefaultLocales.map((l) => l.code)).toEqual(["tr"]);
  });
  it("builds an hreflang map including x-default", () => {
    expect(hreflang).toEqual({ en: "/", tr: "/tr", "x-default": "/" });
  });
});
