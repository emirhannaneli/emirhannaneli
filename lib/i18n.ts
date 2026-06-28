export const locales = [
  { code: "en", label: "English", short: "EN", og: "en_US" },
  { code: "tr", label: "Türkçe", short: "TR", og: "tr_TR" },
] as const;

export type LocaleCode = (typeof locales)[number]["code"];
export const defaultLocale: LocaleCode = "en";
export const nonDefaultLocales = locales.filter((l) => l.code !== defaultLocale);

export function hasLocale(x: string): x is LocaleCode {
  return locales.some((l) => l.code === x);
}

export const localeHref = (code: LocaleCode): string => (code === defaultLocale ? "/" : `/${code}`);

export const hreflang: Record<string, string> = {
  ...Object.fromEntries(locales.map((l) => [l.code, localeHref(l.code)])),
  "x-default": localeHref(defaultLocale),
};
