"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavigationItem } from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { ActionLink, BrandMark, CloseIcon, MenuIcon } from "./home-primitives";

type HomeHeaderProps = {
  locale: Locale;
  menuAriaLabel: string;
  navigationItems: NavigationItem[];
  primaryCtaHref: string;
  primaryCtaLabel: string;
  primaryCtaSrLabel: string;
};

function resolveHref(item: NavigationItem, locale: Locale) {
  return item.kind === "route"
    ? getLocalizedPath(item.href, locale)
    : item.href;
}

function HeaderLink({
  item,
  locale,
  onNavigate,
}: {
  item: NavigationItem;
  locale: Locale;
  onNavigate?: () => void;
}) {
  const href = resolveHref(item, locale);
  const commonClassName =
    "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#101114] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  if (item.kind === "anchor") {
    return (
      <a
        aria-label={item.ariaLabel}
        className={commonClassName}
        href={href}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      aria-label={item.ariaLabel}
      className={commonClassName}
      href={href}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

export function Header({
  locale,
  menuAriaLabel,
  navigationItems,
  primaryCtaHref,
  primaryCtaLabel,
  primaryCtaSrLabel,
}: HomeHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const languageHref = locale === "ko" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E8EF] bg-[rgba(247,248,250,0.9)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link
            aria-label="Go to Hitpick home"
            className="rounded-full focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FA] focus-visible:outline-none"
            href={locale === "ko" ? "/" : "/en"}
          >
            <BrandMark />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {navigationItems.map((item) => (
              <HeaderLink item={item} key={item.href} locale={locale} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              aria-label={
                locale === "ko"
                  ? "영문 홈으로 이동"
                  : "Switch to Korean homepage"
              }
              className="rounded-full border border-[#E6E8EF] bg-white px-3 py-2 text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase transition hover:border-[#CBD2E1] hover:text-[#101114] focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FA] focus-visible:outline-none"
              href={languageHref}
            >
              {locale === "ko" ? "EN" : "KO"}
            </Link>
            <ActionLink
              ariaLabel={primaryCtaSrLabel}
              href={getLocalizedPath(primaryCtaHref, locale)}
            >
              {primaryCtaLabel}
            </ActionLink>
          </div>

          <button
            aria-controls="home-mobile-navigation"
            aria-expanded={isOpen}
            aria-label={menuAriaLabel}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E6E8EF] bg-white text-[#101114] transition hover:border-[#CBD2E1] hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FA] focus-visible:outline-none md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[#E6E8EF] bg-[#F7F8FA] transition-[max-height,opacity] duration-200 md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
        id="home-mobile-navigation"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
          {navigationItems.map((item) => (
            <HeaderLink
              item={item}
              key={item.href}
              locale={locale}
              onNavigate={() => setIsOpen(false)}
            />
          ))}

          <div className="mt-2 flex items-center gap-3">
            <Link
              aria-label={
                locale === "ko"
                  ? "영문 홈으로 이동"
                  : "Switch to Korean homepage"
              }
              className="inline-flex items-center justify-center rounded-full border border-[#E6E8EF] bg-white px-4 py-3 text-sm font-semibold text-[#101114] transition hover:border-[#CBD2E1] hover:bg-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FA] focus-visible:outline-none"
              href={languageHref}
              onClick={() => setIsOpen(false)}
            >
              {locale === "ko" ? "English" : "한국어"}
            </Link>
            <ActionLink
              ariaLabel={primaryCtaSrLabel}
              className="flex-1"
              href={getLocalizedPath(primaryCtaHref, locale)}
            >
              {primaryCtaLabel}
            </ActionLink>
          </div>
        </div>
      </div>
    </header>
  );
}
