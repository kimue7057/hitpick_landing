import Link from "next/link";
import type { HomePlatformContent } from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import { BrandMark } from "./home-primitives";

export function Footer({
  copy,
  locale,
}: {
  copy: HomePlatformContent["footer"];
  locale: Locale;
}) {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B0E] px-6 pt-16 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link
              aria-label="Go to Hitpick home"
              className="inline-flex rounded-full focus-visible:ring-2 focus-visible:ring-[#A3FF12] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0E] focus-visible:outline-none"
              href={locale === "ko" ? "/" : "/en"}
            >
              <BrandMark tone="light" />
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/60">
              {copy.description}
            </p>
          </div>

          {copy.linkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45 uppercase">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="rounded-sm transition hover:text-white focus-visible:ring-2 focus-visible:ring-[#A3FF12] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0B0E] focus-visible:outline-none"
                      href={getLocalizedPath(link.href, locale)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Hitpick. All rights reserved.</p>
          <p>{copy.note}</p>
        </div>
      </div>
    </footer>
  );
}
