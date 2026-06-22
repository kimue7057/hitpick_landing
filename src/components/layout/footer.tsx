"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation, getSiteContent } from "@/content/site";
import { getLocaleFromPathname, getLocalizedPath } from "@/lib/locale";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const siteContent = getSiteContent(locale);
  const navigation = getNavigation(locale);

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.28em] text-[var(--accent-secondary)] uppercase">
              Hitpick Landing
            </p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
              {siteContent.footer.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {siteContent.footer.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              {siteContent.footer.quickRoutesTitle}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition hover:text-white"
                    href={getLocalizedPath(item.href, locale)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              {siteContent.footer.useCasesTitle}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {siteContent.footer.audienceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition hover:text-white"
                    href={getLocalizedPath(item.href, locale)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.meta.footerTech}</p>
          <p>{siteContent.meta.footerCaption}</p>
        </div>
      </div>
    </footer>
  );
}
