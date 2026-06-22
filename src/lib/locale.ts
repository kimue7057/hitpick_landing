export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

export function stripLocaleFromPathname(pathname: string): string {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname || "/";
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const normalizedPath =
    pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === "ko") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
}

export function getPathnameForLocale(
  pathname: string,
  locale: Locale,
): string {
  return getLocalizedPath(stripLocaleFromPathname(pathname), locale);
}
