import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  accent?: boolean;
  children?: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  tone?: "dark" | "light";
  title?: string;
};

export function Card({
  accent = false,
  children,
  className,
  description,
  eyebrow,
  tone = "dark",
  title,
}: CardProps) {
  const isLight = tone === "light";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[28px] p-6 transition duration-300 hover:-translate-y-1",
        isLight
          ? "border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,248,252,0.94))] shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          : "border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,43,0.94),rgba(8,12,22,0.92))] shadow-[var(--shadow)] backdrop-blur hover:border-white/20",
        accent &&
          (isLight
            ? "border-[rgba(255,122,89,0.24)] bg-[linear-gradient(145deg,rgba(255,244,240,0.98),rgba(255,255,255,0.98)_46%,rgba(236,255,252,0.98)_100%)]"
            : "border-[rgba(255,122,89,0.2)] bg-[linear-gradient(145deg,rgba(255,122,89,0.18),rgba(14,19,35,0.96)_38%,rgba(72,211,196,0.06)_100%)]"),
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
          isLight
            ? "bg-[radial-gradient(circle_at_top_right,rgba(255,122,89,0.1),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(255,122,89,0.16),transparent_45%)]",
        )}
      />
      <div className="relative">
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.28em] uppercase",
              isLight ? "text-[#148f86]" : "text-[var(--accent-secondary)]",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h3
            className={cn(
              "font-display mt-3 text-xl font-semibold tracking-tight",
              isLight ? "text-slate-950" : "text-white",
            )}
          >
            {title}
          </h3>
        ) : null}
        {description ? (
          <p
            className={cn(
              "mt-3 text-sm leading-7",
              isLight ? "text-slate-600" : "text-[var(--muted)]",
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </article>
  );
}
