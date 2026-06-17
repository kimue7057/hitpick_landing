import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLayoutProps = {
  align?: "center" | "left";
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  description?: string;
  eyebrow?: string;
  tone?: "dark" | "light";
  title?: string;
};

export function SectionLayout({
  align = "left",
  children,
  className,
  contentClassName,
  description,
  eyebrow,
  tone = "dark",
  title,
}: SectionLayoutProps) {
  const headingAlignment = align === "center" ? "text-center" : "text-left";
  const isLight = tone === "light";

  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {eyebrow || title || description ? (
          <div
            className={cn(
              "max-w-3xl",
              headingAlignment,
              align === "center" && "mx-auto",
            )}
          >
            {eyebrow ? (
              <p
                className={cn(
                  "text-xs font-semibold tracking-[0.3em] uppercase",
                  isLight ? "text-[#148f86]" : "text-[var(--accent-secondary)]",
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  "font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl",
                  isLight ? "text-slate-950" : "text-white",
                )}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "mt-4 text-base leading-8 md:text-lg",
                  isLight ? "text-slate-600" : "text-[var(--muted)]",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        <div
          className={cn(title || description ? "mt-10" : "", contentClassName)}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
