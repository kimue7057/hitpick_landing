"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { getNavigation, getSiteContent } from "@/content/site";
import {
  getLocaleFromPathname,
  getLocalizedPath,
  getPathnameForLocale,
  stripLocaleFromPathname,
  type Locale,
} from "@/lib/locale";
import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  const basePathname = stripLocaleFromPathname(pathname);

  if (href === "/") {
    return basePathname === "/";
  }

  return basePathname.startsWith(href);
}

function LanguageSwitch({
  locale,
  pathname,
  onNavigate,
}: {
  locale: Locale;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
      {(["ko", "en"] as const).map((targetLocale) => {
        const isActive = locale === targetLocale;

        return (
          <Link
            key={targetLocale}
            aria-current={isActive ? "page" : undefined}
            aria-label={targetLocale === "ko" ? "Switch to Korean" : "Switch to English"}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.24em] uppercase transition",
              isActive
                ? "bg-white text-slate-950 shadow-[0_12px_30px_rgba(255,255,255,0.14)]"
                : "text-[var(--muted)] hover:text-white",
            )}
            href={getPathnameForLocale(pathname, targetLocale)}
            onClick={onNavigate}
          >
            {targetLocale}
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navigation = getNavigation(locale);
  const siteContent = getSiteContent(locale);
  const [isOpen, setIsOpen] = useState(false);
  const contactHref = getLocalizedPath("/contact", locale);
  const homeHref = getLocalizedPath("/", locale);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4 lg:px-8">
        <div className="rounded-full border border-white/10 bg-[rgba(8,12,22,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3" href={homeHref}>
              <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8b6f_0%,#48d3c4_100%)] text-lg font-semibold text-[#08111f]">
                H
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-white">
                  {siteContent.brand.name}
                </p>
                <p className="text-xs tracking-[0.24em] text-[var(--muted)] uppercase">
                  {siteContent.brand.tagline}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => {
                const isActive = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-[var(--muted)] hover:bg-white/[0.06] hover:text-white",
                    )}
                    href={getLocalizedPath(item.href, locale)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <LanguageSwitch locale={locale} pathname={pathname} />
              <CTAButton href={contactHref} variant="outline">
                {siteContent.header.primaryCta}
              </CTAButton>
            </div>

            <button
              aria-expanded={isOpen}
              aria-label={siteContent.header.menuAriaLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen((prevState) => !prevState)}
              type="button"
            >
              {isOpen
                ? siteContent.header.closeMenuLabel
                : siteContent.header.menuLabel}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.nav
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 rounded-[28px] border border-white/10 bg-[rgba(8,12,22,0.92)] p-4 shadow-[var(--shadow)] backdrop-blur-xl md:hidden"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-2">
                <div className="mb-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="text-xs font-semibold tracking-[0.24em] text-[var(--muted)] uppercase">
                    {siteContent.header.languageLabel}
                  </span>
                  <LanguageSwitch
                    locale={locale}
                    onNavigate={() => setIsOpen(false)}
                    pathname={pathname}
                  />
                </div>

                {navigation.map((item) => {
                  const isActive = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-[var(--muted)] hover:bg-white/[0.06] hover:text-white",
                      )}
                      href={getLocalizedPath(item.href, locale)}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <CTAButton
                  className="mt-2 w-full"
                  href={contactHref}
                  onClick={() => setIsOpen(false)}
                >
                  {siteContent.header.primaryCta}
                </CTAButton>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
