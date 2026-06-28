// Locale registry comes from the single site config; helpers derive from it.
import { locales, defaultLocale } from "@/site.config";

export { locales, defaultLocale };

export type LocaleCode = (typeof locales)[number]["code"];
export const nonDefaultLocales = locales.filter((l) => l.code !== defaultLocale);

export function hasLocale(x: string): x is LocaleCode {
  return locales.some((l) => l.code === x);
}

export const localeHref = (code: LocaleCode): string => (code === defaultLocale ? "/" : `/${code}`);

export const hreflang: Record<string, string> = {
  ...Object.fromEntries(locales.map((l) => [l.code, localeHref(l.code)])),
  "x-default": localeHref(defaultLocale),
};
