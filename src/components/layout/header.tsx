"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/ui/cta-button";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4 lg:px-8">
        <div className="rounded-full border border-white/10 bg-[rgba(8,12,22,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link className="flex items-center gap-3" href="/">
              <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff8b6f_0%,#48d3c4_100%)] text-lg font-semibold text-[#08111f]">
                H
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-white">
                  Hitpick
                </p>
                <p className="text-xs tracking-[0.24em] text-[var(--muted)] uppercase">
                  Creator x Brand
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
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <CTAButton href="/contact" variant="outline">
                파트너 문의
              </CTAButton>
            </div>

            <button
              aria-expanded={isOpen}
              aria-label="모바일 메뉴 열기"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen((prevState) => !prevState)}
              type="button"
            >
              {isOpen ? "닫기" : "메뉴"}
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
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <CTAButton
                  className="mt-2 w-full"
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  상담 시작하기
                </CTAButton>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
